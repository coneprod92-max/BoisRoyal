
/* =========================================================
   BOISROYAL — MOTEUR DE TRADUCTION
   Langues : Français, Anglais, Allemand, Espagnol,
             Néerlandais et Tchèque
   ========================================================= */

(function () {
  "use strict";

  const LANGUAGES = {
    fr: { name: "Français", flag: "🇫🇷" },
    en: { name: "English", flag: "🇬🇧" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    es: { name: "Español", flag: "🇪🇸" },
    nl: { name: "Nederlands", flag: "🇳🇱" },
    cs: { name: "Čeština", flag: "🇨🇿" }
  };

  const TRANSLATIONS = {
    fr: {
      "language.label": "Langue",
      "common.loading": "Chargement...",
      "common.error": "Une erreur est survenue.",
      "common.success": "Opération réussie.",
      "common.close": "Fermer",
      "common.cancel": "Annuler",
      "common.validate": "Valider",
      "common.continue": "Continuer",
      "common.back": "Retour",
      "common.see_more": "Voir plus",
      "common.learn_more": "En savoir plus",
      "common.currency": "FCFA",
      "common.required": "Champ obligatoire",
      "common.optional": "Facultatif",
      "common.send": "Envoyer",
      "common.search": "Rechercher",
      "common.or": "ou",
      "common.yes": "Oui",
      "common.no": "Non",
      "nav.home": "Accueil",
      "nav.products": "Nos produits",
      "nav.quote": "Demander un devis",
      "nav.tracking": "Suivre ma commande",
      "nav.contact": "Contact",
      "nav.cart": "Mon panier",
      "hero.title": "Le bois de qualité, livré chez vous",
      "hero.subtitle": "Des produits de qualité pour vos besoins en bois et charbon.",
      "hero.button": "Découvrir nos produits",
      "products.title": "Nos produits",
      "products.subtitle": "Découvrez notre sélection de produits.",
      "products.empty": "Aucun produit disponible pour le moment.",
      "products.view": "Voir le produit",
      "products.add": "Ajouter au panier",
      "products.price": "Prix",
      "products.unavailable": "Indisponible",
      "products.charcoal": "Charbon",
      "products.wood": "Bois",
      "products.fuel": "Combustible",
      "products.category": "Catégorie",
      "products.details": "Détails du produit",
      "products.quantity": "Quantité disponible",
      "products.unit": "Unité",
      "products.starting_price": "À partir de",
      "cart.title": "Mon panier",
      "cart.empty": "Votre panier est vide.",
      "cart.total": "Total",
      "cart.remove": "Supprimer",
      "cart.checkout": "Commander",
      "cart.quantity": "Quantité",
      "cart.continue": "Continuer mes achats",
      "cart.subtotal": "Sous-total",
      "cart.delivery": "Livraison",
      "cart.update": "Mettre à jour",
      "quote.title": "Demander un devis",
      "quote.subtitle": "Recevez une proposition adaptée à vos besoins.",
      "quote.name": "Nom complet",
      "quote.email": "Adresse e-mail",
      "quote.phone": "Téléphone",
      "quote.address": "Adresse de livraison",
      "quote.message": "Votre message",
      "quote.submit": "Envoyer ma demande",
      "quote.success": "Votre demande a bien été envoyée.",
      "quote.error": "Impossible d'envoyer votre demande.",
      "quote.product": "Produit souhaité",
      "quote.quantity": "Quantité souhaitée",
      "quote.placeholder": "Décrivez votre besoin...",
      "delivery.title": "Livraison",
      "delivery.subtitle": "Nous organisons la livraison selon votre adresse.",
      "delivery.address": "Adresse de livraison",
      "reviews.title": "Avis de nos clients",
      "reviews.empty": "Aucun avis pour le moment.",
      "reviews.name": "Votre nom",
      "reviews.message": "Votre avis",
      "reviews.submit": "Publier mon avis",
      "reviews.success": "Merci pour votre avis !",
      "reviews.rating": "Votre note",
      "footer.rights": "Tous droits réservés.",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Confidentialité",
      "footer.terms": "Conditions générales",
      "footer.contact": "Contactez-nous",
      "tracking.title": "Suivre ma commande",
      "tracking.subtitle": "Consultez l'état d'avancement de votre commande.",
      "tracking.number": "Numéro de commande",
      "tracking.search": "Rechercher ma commande",
      "tracking.not_found": "Aucune commande trouvée avec ces informations.",
      "tracking.status": "Statut",
      "contact.title": "Contactez-nous",
      "contact.name": "Votre nom",
      "contact.email": "Votre adresse e-mail",
      "contact.message": "Votre message",
      "contact.submit": "Envoyer le message"
    },

    en: {
      "language.label": "Language",
      "common.loading": "Loading...",
      "common.error": "An error occurred.",
      "common.success": "Operation successful.",
      "common.close": "Close",
      "common.cancel": "Cancel",
      "common.validate": "Confirm",
      "common.continue": "Continue",
      "common.back": "Back",
      "common.see_more": "See more",
      "common.learn_more": "Learn more",
      "common.currency": "XOF",
      "common.required": "Required field",
      "common.optional": "Optional",
      "common.send": "Send",
      "common.search": "Search",
      "common.or": "or",
      "common.yes": "Yes",
      "common.no": "No",
      "nav.home": "Home",
      "nav.products": "Our products",
      "nav.quote": "Request a quote",
      "nav.tracking": "Track my order",
      "nav.contact": "Contact",
      "nav.cart": "My cart",
      "hero.title": "Quality wood, delivered to your door",
      "hero.subtitle": "Quality products for all your wood and charcoal needs.",
      "hero.button": "Discover our products",
      "products.title": "Our products",
      "products.subtitle": "Discover our selection of products.",
      "products.empty": "No products available at the moment.",
      "products.view": "View product",
      "products.add": "Add to cart",
      "products.price": "Price",
      "products.unavailable": "Unavailable",
      "products.charcoal": "Charcoal",
      "products.wood": "Wood",
      "products.fuel": "Fuel",
      "products.category": "Category",
      "products.details": "Product details",
      "products.quantity": "Available quantity",
      "products.unit": "Unit",
      "products.starting_price": "Starting at",
      "cart.title": "My cart",
      "cart.empty": "Your cart is empty.",
      "cart.total": "Total",
      "cart.remove": "Remove",
      "cart.checkout": "Place order",
      "cart.quantity": "Quantity",
      "cart.continue": "Continue shopping",
      "cart.subtotal": "Subtotal",
      "cart.delivery": "Delivery",
      "cart.update": "Update",
      "quote.title": "Request a quote",
      "quote.subtitle": "Receive an offer tailored to your needs.",
      "quote.name": "Full name",
      "quote.email": "Email address",
      "quote.phone": "Phone",
      "quote.address": "Delivery address",
      "quote.message": "Your message",
      "quote.submit": "Send my request",
      "quote.success": "Your request has been sent successfully.",
      "quote.error": "Unable to send your request.",
      "quote.product": "Product requested",
      "quote.quantity": "Requested quantity",
      "quote.placeholder": "Describe what you need...",
      "delivery.title": "Delivery",
      "delivery.subtitle": "We arrange delivery according to your address.",
      "delivery.address": "Delivery address",
      "reviews.title": "Customer reviews",
      "reviews.empty": "No reviews yet.",
      "reviews.name": "Your name",
      "reviews.message": "Your review",
      "reviews.submit": "Publish my review",
      "reviews.success": "Thank you for your review!",
      "reviews.rating": "Your rating",
      "footer.rights": "All rights reserved.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms and conditions",
      "footer.contact": "Contact us",
      "tracking.title": "Track my order",
      "tracking.subtitle": "Check the progress of your order.",
      "tracking.number": "Order number",
      "tracking.search": "Find my order",
      "tracking.not_found": "No order found with these details.",
      "tracking.status": "Status",
      "contact.title": "Contact us",
      "contact.name": "Your name",
      "contact.email": "Your email address",
      "contact.message": "Your message",
      "contact.submit": "Send message"
    },

    de: {
      "language.label": "Sprache",
      "common.loading": "Wird geladen...",
      "common.error": "Ein Fehler ist aufgetreten.",
      "common.success": "Vorgang erfolgreich.",
      "common.close": "Schließen",
      "common.cancel": "Abbrechen",
      "common.validate": "Bestätigen",
      "common.continue": "Weiter",
      "common.back": "Zurück",
      "common.see_more": "Mehr anzeigen",
      "common.learn_more": "Mehr erfahren",
      "common.currency": "XOF",
      "common.required": "Pflichtfeld",
      "common.optional": "Optional",
      "common.send": "Senden",
      "common.search": "Suchen",
      "common.or": "oder",
      "common.yes": "Ja",
      "common.no": "Nein",
      "nav.home": "Startseite",
      "nav.products": "Unsere Produkte",
      "nav.quote": "Angebot anfordern",
      "nav.tracking": "Bestellung verfolgen",
      "nav.contact": "Kontakt",
      "nav.cart": "Mein Warenkorb",
      "hero.title": "Qualitätsbrennholz direkt zu Ihnen nach Hause",
      "hero.subtitle": "Hochwertige Produkte für Ihren Bedarf an Holz und Holzkohle.",
      "hero.button": "Produkte entdecken",
      "products.title": "Unsere Produkte",
      "products.subtitle": "Entdecken Sie unsere Produktauswahl.",
      "products.empty": "Derzeit sind keine Produkte verfügbar.",
      "products.view": "Produkt ansehen",
      "products.add": "In den Warenkorb",
      "products.price": "Preis",
      "products.unavailable": "Nicht verfügbar",
      "products.charcoal": "Holzkohle",
      "products.wood": "Holz",
      "products.fuel": "Brennstoff",
      "products.category": "Kategorie",
      "products.details": "Produktdetails",
      "products.quantity": "Verfügbare Menge",
      "products.unit": "Einheit",
      "products.starting_price": "Ab",
      "cart.title": "Mein Warenkorb",
      "cart.empty": "Ihr Warenkorb ist leer.",
      "cart.total": "Gesamt",
      "cart.remove": "Entfernen",
      "cart.checkout": "Bestellen",
      "cart.quantity": "Menge",
      "cart.continue": "Weiter einkaufen",
      "cart.subtotal": "Zwischensumme",
      "cart.delivery": "Lieferung",
      "cart.update": "Aktualisieren",
      "quote.title": "Angebot anfordern",
      "quote.subtitle": "Erhalten Sie ein auf Ihre Bedürfnisse zugeschnittenes Angebot.",
      "quote.name": "Vollständiger Name",
      "quote.email": "E-Mail-Adresse",
      "quote.phone": "Telefon",
      "quote.address": "Lieferadresse",
      "quote.message": "Ihre Nachricht",
      "quote.submit": "Anfrage senden",
      "quote.success": "Ihre Anfrage wurde erfolgreich gesendet.",
      "quote.error": "Ihre Anfrage konnte nicht gesendet werden.",
      "quote.product": "Gewünschtes Produkt",
      "quote.quantity": "Gewünschte Menge",
      "quote.placeholder": "Beschreiben Sie Ihren Bedarf...",
      "delivery.title": "Lieferung",
      "delivery.subtitle": "Wir organisieren die Lieferung entsprechend Ihrer Adresse.",
      "delivery.address": "Lieferadresse",
      "reviews.title": "Kundenbewertungen",
      "reviews.empty": "Noch keine Bewertungen.",
      "reviews.name": "Ihr Name",
      "reviews.message": "Ihre Bewertung",
      "reviews.submit": "Bewertung veröffentlichen",
      "reviews.success": "Vielen Dank für Ihre Bewertung!",
      "reviews.rating": "Ihre Bewertung",
      "footer.rights": "Alle Rechte vorbehalten.",
      "footer.legal": "Impressum",
      "footer.privacy": "Datenschutz",
      "footer.terms": "Allgemeine Geschäftsbedingungen",
      "footer.contact": "Kontaktieren Sie uns",
      "tracking.title": "Bestellung verfolgen",
      "tracking.subtitle": "Prüfen Sie den Status Ihrer Bestellung.",
      "tracking.number": "Bestellnummer",
      "tracking.search": "Bestellung suchen",
      "tracking.not_found": "Keine Bestellung mit diesen Angaben gefunden.",
      "tracking.status": "Status",
      "contact.title": "Kontaktieren Sie uns",
      "contact.name": "Ihr Name",
      "contact.email": "Ihre E-Mail-Adresse",
      "contact.message": "Ihre Nachricht",
      "contact.submit": "Nachricht senden"
    },

    es: {
      "language.label": "Idioma",
      "common.loading": "Cargando...",
      "common.error": "Se ha producido un error.",
      "common.success": "Operación realizada correctamente.",
      "common.close": "Cerrar",
      "common.cancel": "Cancelar",
      "common.validate": "Confirmar",
      "common.continue": "Continuar",
      "common.back": "Volver",
      "common.see_more": "Ver más",
      "common.learn_more": "Más información",
      "common.currency": "XOF",
      "common.required": "Campo obligatorio",
      "common.optional": "Opcional",
      "common.send": "Enviar",
      "common.search": "Buscar",
      "common.or": "o",
      "common.yes": "Sí",
      "common.no": "No",
      "nav.home": "Inicio",
      "nav.products": "Nuestros productos",
      "nav.quote": "Solicitar presupuesto",
      "nav.tracking": "Seguir mi pedido",
      "nav.contact": "Contacto",
      "nav.cart": "Mi carrito",
      "hero.title": "Leña de calidad, entregada en su domicilio",
      "hero.subtitle": "Productos de calidad para todas sus necesidades de madera y carbón.",
      "hero.button": "Descubrir productos",
      "products.title": "Nuestros productos",
      "products.subtitle": "Descubra nuestra selección de productos.",
      "products.empty": "No hay productos disponibles por el momento.",
      "products.view": "Ver producto",
      "products.add": "Añadir al carrito",
      "products.price": "Precio",
      "products.unavailable": "No disponible",
      "products.charcoal": "Carbón vegetal",
      "products.wood": "Madera",
      "products.fuel": "Combustible",
      "products.category": "Categoría",
      "products.details": "Detalles del producto",
      "products.quantity": "Cantidad disponible",
      "products.unit": "Unidad",
      "products.starting_price": "Desde",
      "cart.title": "Mi carrito",
      "cart.empty": "Su carrito está vacío.",
      "cart.total": "Total",
      "cart.remove": "Eliminar",
      "cart.checkout": "Realizar pedido",
      "cart.quantity": "Cantidad",
      "cart.continue": "Seguir comprando",
      "cart.subtotal": "Subtotal",
      "cart.delivery": "Entrega",
      "cart.update": "Actualizar",
      "quote.title": "Solicitar presupuesto",
      "quote.subtitle": "Reciba una propuesta adaptada a sus necesidades.",
      "quote.name": "Nombre completo",
      "quote.email": "Correo electrónico",
      "quote.phone": "Teléfono",
      "quote.address": "Dirección de entrega",
      "quote.message": "Su mensaje",
      "quote.submit": "Enviar mi solicitud",
      "quote.success": "Su solicitud se ha enviado correctamente.",
      "quote.error": "No se pudo enviar su solicitud.",
      "quote.product": "Producto solicitado",
      "quote.quantity": "Cantidad solicitada",
      "quote.placeholder": "Describa lo que necesita...",
      "delivery.title": "Entrega",
      "delivery.subtitle": "Organizamos la entrega según su dirección.",
      "delivery.address": "Dirección de entrega",
      "reviews.title": "Opiniones de nuestros clientes",
      "reviews.empty": "Todavía no hay opiniones.",
      "reviews.name": "Su nombre",
      "reviews.message": "Su opinión",
      "reviews.submit": "Publicar mi opinión",
      "reviews.success": "¡Gracias por su opinión!",
      "reviews.rating": "Su valoración",
      "footer.rights": "Todos los derechos reservados.",
      "footer.legal": "Aviso legal",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos y condiciones",
      "footer.contact": "Contáctenos",
      "tracking.title": "Seguir mi pedido",
      "tracking.subtitle": "Consulte el estado de su pedido.",
      "tracking.number": "Número de pedido",
      "tracking.search": "Buscar mi pedido",
      "tracking.not_found": "No se encontró ningún pedido con estos datos.",
      "tracking.status": "Estado",
      "contact.title": "Contáctenos",
      "contact.name": "Su nombre",
      "contact.email": "Su correo electrónico",
      "contact.message": "Su mensaje",
      "contact.submit": "Enviar mensaje"
    },

    nl: {
      "language.label": "Taal",
      "common.loading": "Laden...",
      "common.error": "Er is een fout opgetreden.",
      "common.success": "Actie geslaagd.",
      "common.close": "Sluiten",
      "common.cancel": "Annuleren",
      "common.validate": "Bevestigen",
      "common.continue": "Doorgaan",
      "common.back": "Terug",
      "common.see_more": "Meer bekijken",
      "common.learn_more": "Meer informatie",
      "common.currency": "XOF",
      "common.required": "Verplicht veld",
      "common.optional": "Optioneel",
      "common.send": "Verzenden",
      "common.search": "Zoeken",
      "common.or": "of",
      "common.yes": "Ja",
      "common.no": "Nee",
      "nav.home": "Home",
      "nav.products": "Onze producten",
      "nav.quote": "Offerte aanvragen",
      "nav.tracking": "Mijn bestelling volgen",
      "nav.contact": "Contact",
      "nav.cart": "Mijn winkelwagen",
      "hero.title": "Kwaliteitshout bij u thuis bezorgd",
      "hero.subtitle": "Kwaliteitsproducten voor al uw behoeften aan hout en houtskool.",
      "hero.button": "Ontdek onze producten",
      "products.title": "Onze producten",
      "products.subtitle": "Ontdek ons productassortiment.",
      "products.empty": "Er zijn momenteel geen producten beschikbaar.",
      "products.view": "Product bekijken",
      "products.add": "Toevoegen aan winkelwagen",
      "products.price": "Prijs",
      "products.unavailable": "Niet beschikbaar",
      "products.charcoal": "Houtskool",
      "products.wood": "Hout",
      "products.fuel": "Brandstof",
      "products.category": "Categorie",
      "products.details": "Productdetails",
      "products.quantity": "Beschikbare hoeveelheid",
      "products.unit": "Eenheid",
      "products.starting_price": "Vanaf",
      "cart.title": "Mijn winkelwagen",
      "cart.empty": "Uw winkelwagen is leeg.",
      "cart.total": "Totaal",
      "cart.remove": "Verwijderen",
      "cart.checkout": "Bestellen",
      "cart.quantity": "Aantal",
      "cart.continue": "Verder winkelen",
      "cart.subtotal": "Subtotaal",
      "cart.delivery": "Bezorging",
      "cart.update": "Bijwerken",
      "quote.title": "Offerte aanvragen",
      "quote.subtitle": "Ontvang een voorstel op maat van uw behoeften.",
      "quote.name": "Volledige naam",
      "quote.email": "E-mailadres",
      "quote.phone": "Telefoon",
      "quote.address": "Bezorgadres",
      "quote.message": "Uw bericht",
      "quote.submit": "Mijn aanvraag verzenden",
      "quote.success": "Uw aanvraag is succesvol verzonden.",
      "quote.error": "Uw aanvraag kon niet worden verzonden.",
      "quote.product": "Gewenst product",
      "quote.quantity": "Gewenste hoeveelheid",
      "quote.placeholder": "Beschrijf wat u nodig heeft...",
      "delivery.title": "Bezorging",
      "delivery.subtitle": "Wij regelen de bezorging op basis van uw adres.",
      "delivery.address": "Bezorgadres",
      "reviews.title": "Klantbeoordelingen",
      "reviews.empty": "Nog geen beoordelingen.",
      "reviews.name": "Uw naam",
      "reviews.message": "Uw beoordeling",
      "reviews.submit": "Mijn beoordeling plaatsen",
      "reviews.success": "Bedankt voor uw beoordeling!",
      "reviews.rating": "Uw beoordeling",
      "footer.rights": "Alle rechten voorbehouden.",
      "footer.legal": "Juridische informatie",
      "footer.privacy": "Privacybeleid",
      "footer.terms": "Algemene voorwaarden",
      "footer.contact": "Neem contact met ons op",
      "tracking.title": "Mijn bestelling volgen",
      "tracking.subtitle": "Bekijk de voortgang van uw bestelling.",
      "tracking.number": "Bestelnummer",
      "tracking.search": "Mijn bestelling zoeken",
      "tracking.not_found": "Geen bestelling gevonden met deze gegevens.",
      "tracking.status": "Status",
      "contact.title": "Neem contact met ons op",
      "contact.name": "Uw naam",
      "contact.email": "Uw e-mailadres",
      "contact.message": "Uw bericht",
      "contact.submit": "Bericht verzenden"
    },

    cs: {
      "language.label": "Jazyk",
      "common.loading": "Načítání...",
      "common.error": "Došlo k chybě.",
      "common.success": "Operace byla úspěšná.",
      "common.close": "Zavřít",
      "common.cancel": "Zrušit",
      "common.validate": "Potvrdit",
      "common.continue": "Pokračovat",
      "common.back": "Zpět",
      "common.see_more": "Zobrazit více",
      "common.learn_more": "Zjistit více",
      "common.currency": "XOF",
      "common.required": "Povinné pole",
      "common.optional": "Nepovinné",
      "common.send": "Odeslat",
      "common.search": "Hledat",
      "common.or": "nebo",
      "common.yes": "Ano",
      "common.no": "Ne",
      "nav.home": "Domů",
      "nav.products": "Naše produkty",
      "nav.quote": "Požádat o cenovou nabídku",
      "nav.tracking": "Sledovat objednávku",
      "nav.contact": "Kontakt",
      "nav.cart": "Můj košík",
      "hero.title": "Kvalitní dřevo až k vašim dveřím",
      "hero.subtitle": "Kvalitní produkty pro všechny vaše potřeby v oblasti dřeva a dřevěného uhlí.",
      "hero.button": "Objevte naše produkty",
      "products.title": "Naše produkty",
      "products.subtitle": "Objevte naši nabídku produktů.",
      "products.empty": "Momentálně nejsou k dispozici žádné produkty.",
      "products.view": "Zobrazit produkt",
      "products.add": "Přidat do košíku",
      "products.price": "Cena",
      "products.unavailable": "Nedostupné",
      "products.charcoal": "Dřevěné uhlí",
      "products.wood": "Dřevo",
      "products.fuel": "Palivo",
      "products.category": "Kategorie",
      "products.details": "Podrobnosti o produktu",
      "products.quantity": "Dostupné množství",
      "products.unit": "Jednotka",
      "products.starting_price": "Od",
      "cart.title": "Můj košík",
      "cart.empty": "Váš košík je prázdný.",
      "cart.total": "Celkem",
      "cart.remove": "Odstranit",
      "cart.checkout": "Objednat",
      "cart.quantity": "Množství",
      "cart.continue": "Pokračovat v nákupu",
      "cart.subtotal": "Mezisoučet",
      "cart.delivery": "Doručení",
      "cart.update": "Aktualizovat",
      "quote.title": "Požádat o cenovou nabídku",
      "quote.subtitle": "Získejte nabídku přizpůsobenou vašim potřebám.",
      "quote.name": "Celé jméno",
      "quote.email": "E-mailová adresa",
      "quote.phone": "Telefon",
      "quote.address": "Doručovací adresa",
      "quote.message": "Vaše zpráva",
      "quote.submit": "Odeslat žádost",
      "quote.success": "Vaše žádost byla úspěšně odeslána.",
      "quote.error": "Žádost se nepodařilo odeslat.",
      "quote.product": "Požadovaný produkt",
      "quote.quantity": "Požadované množství",
      "quote.placeholder": "Popište, co potřebujete...",
      "delivery.title": "Doručení",
      "delivery.subtitle": "Doručení zajistíme podle vaší adresy.",
      "delivery.address": "Doručovací adresa",
      "reviews.title": "Hodnocení zákazníků",
      "reviews.empty": "Zatím žádná hodnocení.",
      "reviews.name": "Vaše jméno",
      "reviews.message": "Vaše hodnocení",
      "reviews.submit": "Zveřejnit hodnocení",
      "reviews.success": "Děkujeme za vaše hodnocení!",
      "reviews.rating": "Vaše hodnocení",
      "footer.rights": "Všechna práva vyhrazena.",
      "footer.legal": "Právní informace",
      "footer.privacy": "Ochrana soukromí",
      "footer.terms": "Obchodní podmínky",
      "footer.contact": "Kontaktujte nás",
      "tracking.title": "Sledovat objednávku",
      "tracking.subtitle": "Zkontrolujte stav své objednávky.",
      "tracking.number": "Číslo objednávky",
      "tracking.search": "Vyhledat objednávku",
      "tracking.not_found": "S těmito údaji nebyla nalezena žádná objednávka.",
      "tracking.status": "Stav",
      "contact.title": "Kontaktujte nás",
      "contact.name": "Vaše jméno",
      "contact.email": "Váš e-mail",
      "contact.message": "Vaše zpráva",
      "contact.submit": "Odeslat zprávu"
    }
  };

  const STORAGE_KEY = "boisroyal_language";

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return LANGUAGES[saved] ? saved : "fr";
    } catch (error) {
      return "fr";
    }
  }

  let currentLanguage = getSavedLanguage();

  function translate(key, fallback) {
    const dictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.fr;
    return dictionary[key] || TRANSLATIONS.fr[key] || fallback || key;
  }

  function applyTranslations(root) {
    const container = root || document;

    container.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      element.textContent = translate(key, element.textContent);
    });

    container.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.setAttribute(
        "placeholder",
        translate(key, element.getAttribute("placeholder"))
      );
    });

    container.querySelectorAll("[data-i18n-title]").forEach(element => {
      const key = element.getAttribute("data-i18n-title");
      element.setAttribute(
        "title",
        translate(key, element.getAttribute("title"))
      );
    });

    container.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
      const key = element.getAttribute("data-i18n-aria-label");
      element.setAttribute("aria-label", translate(key));
    });
  }

  function updateLanguageSelectors() {
    document.querySelectorAll("[data-language-selector]").forEach(select => {
      select.value = currentLanguage;
    });

    document.querySelectorAll("[data-current-language]").forEach(element => {
      element.textContent = LANGUAGES[currentLanguage].flag;
    });
  }

  function setLanguage(language) {
    if (!LANGUAGES[language]) return;

    currentLanguage = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      console.warn("Impossible de sauvegarder la langue.");
    }

    document.documentElement.lang = language;
    applyTranslations();
    updateLanguageSelectors();

    document.dispatchEvent(
      new CustomEvent("boisroyal:languageChanged", {
        detail: { language: currentLanguage }
      })
    );
  }

  function createLanguageSelector() {
    const select = document.createElement("select");

    select.setAttribute("data-language-selector", "");
    select.setAttribute("aria-label", translate("language.label"));

    Object.entries(LANGUAGES).forEach(([code, language]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${language.flag} ${language.name}`;
      select.appendChild(option);
    });

    select.value = currentLanguage;

    select.addEventListener("change", () => {
      setLanguage(select.value);
    });

    return select;
  }

  window.BoisRoyalI18n = {
    languages: LANGUAGES,
    translations: TRANSLATIONS,
    t: translate,
    setLanguage,
    getLanguage: () => currentLanguage,
    apply: applyTranslations,
    createSelector: createLanguageSelector
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = currentLanguage;
    applyTranslations();
    updateLanguageSelectors();

    document.querySelectorAll("[data-language-selector]").forEach(select => {
      select.addEventListener("change", () => {
        setLanguage(select.value);
      });
    });
  });
})();
