
const URL_SUPABASE = 'https://evvblxiitorfdniqmqcf.supabase.co';
const CLE_PUBLIQUE = 'sb_publishable_pJHLKhN_Qvj8M38uFNx4ow_WktH1zZC';

const form = document.getElementById('form');
const button = document.getElementById('send');
const status = document.getElementById('status');
const productList = document.getElementById('productList');
const cartTotal = document.getElementById('cartTotal');

let cart = [];

function readCart() {
  try {
    const data = JSON.parse(localStorage.getItem('boisroyal_cart') || '[]');
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function money(value) {
  if (value === null || value === undefined || value === '' ||
      !Number.isFinite(Number(value))) {
    return 'Sur devis';
  }

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(Number(value));
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function renderCart() {
  cart = readCart();

  if (!cart.length) {
    productList.innerHTML =
      '<div class="empty">Votre panier est vide. ' +
      '<a href="index.html">Retournez à la boutique pour choisir vos produits.</a></div>';

    cartTotal.textContent = money(0);
    button.disabled = true;
    return;
  }

  let subtotal = 0;
  let hasUnknownPrice = false;

  productList.innerHTML = cart.map(item => {
    const quantity = Number(item.quantity);
    const price = item.price;

    if (price === null || price === undefined || price === '' ||
        !Number.isFinite(Number(price))) {
      hasUnknownPrice = true;
    } else {
      subtotal += Number(price) * quantity;
    }

    return `
      <div class="product">
        <div>
          <b>${escapeHTML(item.name || 'Produit BoisRoyal')}</b>
          <small>${escapeHTML(item.unit || 'Unité')} · ${money(price)} / unité</small>
        </div>
        <div class="quantity">× ${quantity}</div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = hasUnknownPrice
    ? money(subtotal) + ' + produits sur devis'
    : money(subtotal);

  button.disabled = false;
}

function getOrderItems() {
  return cart.map(item => {
    const quantity = Number(item.quantity);
    const slug = String(item.slug || '').trim();
    const id = String(item.id || '');

    if (!slug || id.startsWith('demo-')) {
      throw new Error(
        'Un produit de démonstration est présent dans votre panier. ' +
        'Retournez à la boutique et rechargez le catalogue avant de recommencer.'
      );
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error('Une quantité de produit est invalide.');
    }

    return { slug, quantity };
  });
}

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const val = id => document.getElementById(id).value.trim();

  status.className = '';
  status.textContent = '';

  if (val('website')) {
    status.textContent = 'Demande refusée.';
    status.className = 'error';
    return;
  }

  cart = readCart();

  if (!cart.length) {
    status.textContent = 'Votre panier est vide.';
    status.className = 'error';
    return;
  }

  let items;

  try {
    items = getOrderItems();
  } catch (error) {
    status.textContent = error.message;
    status.className = 'error';
    return;
  }

  const payload = {
    customer_name: val('name'),
    customer_phone: val('phone'),
    customer_email: val('email'),
    delivery_address: val('address'),
    delivery_postal_code: val('postal'),
    delivery_city: val('city'),
    delivery_country: val('country'),
    delivery_notes: val('notes'),
    company_website: val('website'),
    items
  };

  button.disabled = true;
  button.textContent = 'Envoi en cours...';
  status.textContent = 'Envoi de votre demande...';

  try {
    const response = await fetch(
      URL_SUPABASE + '/functions/v1/boisroyal-order-request',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': CLE_PUBLIQUE
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || 'Envoi impossible. Veuillez réessayer.'
      );
    }

    localStorage.removeItem('boisroyal_cart');
    cart = [];

    productList.innerHTML =
      '<div class="empty">Votre demande a bien été envoyée.</div>';
    cartTotal.textContent = money(0);

    status.textContent =
      'Demande envoyée avec succès ! Référence : ' +
      (result.order_number || 'enregistrée') +
      '. BoisRoyal vous recontactera pour confirmer les prix, ' +
      'la livraison et les modalités de paiement.';

    status.className = 'success';
    form.reset();
    button.disabled = true;

  } catch (error) {
    status.textContent =
      error.message || 'Erreur de connexion. Veuillez réessayer.';
    status.className = 'error';
    button.disabled = false;
  } finally {
    button.textContent = 'Envoyer ma demande gratuite';
  }
});

renderCart();
