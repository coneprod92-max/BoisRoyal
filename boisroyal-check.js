
    const SUPABASE_URL="https://evvblxiitorfdniqmqcf.supabase.co";
    const SUPABASE_KEY="sb_publishable_pJHLKhN_Qvj8M38uFNx4ow_WktH1zZC";
    const PRODUCT_TABLE="br_products";
    const PHOTOS={wood:"produit-filets.webp",logs:"histoire-acacia.webp",charcoal:"produit-caisse-bouleau.webp"};
    const demoProducts=[
      {id:"demo-filet",name:"Filet de bois de chauffage",slug:"filet-bois-chauffage",category:"bois_chauffage",description:"Un format pratique pour vos besoins du quotidien.",price:6.90,unit:"le filet",image_url:PHOTOS.wood,is_active:true},
      {id:"demo-lot",name:"Lot de bois — format familial",slug:"lot-bois-format-familial",category:"bois_chauffage",description:"Un lot pour constituer une réserve à la maison.",price:24.90,unit:"le lot",image_url:PHOTOS.logs,is_active:true},
      {id:"demo-charbon",name:"Charbon de bois",slug:"charbon-de-bois",category:"charbon",description:"Contactez-nous pour connaître le conditionnement disponible.",price:null,unit:"selon format",image_url:PHOTOS.charcoal,is_active:true}
    ];
    let products=[],filter="tous",cart=readCart();

    function readCart(){try{return JSON.parse(localStorage.getItem("boisroyal_cart")||"[]")}catch(e){return[]}}
    function saveCart(){localStorage.setItem("boisroyal_cart",JSON.stringify(cart));updateCart()}
    function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
    function category(p){return String(p.category||"").toLowerCase().includes("charbon")||String(p.name||"").toLowerCase().includes("charbon")?"charbon":"bois"}
    function photo(p){if(p.image_url)return p.image_url;return category(p)==="charbon"?PHOTOS.charcoal:((p.name||"").toLowerCase().includes("filet")?PHOTOS.wood:PHOTOS.logs)}
    function money(v){if(v===null||v===undefined||v===""||!Number.isFinite(Number(v)))return"Sur devis";return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(Number(v))}
    function renderProducts(){
      const q=document.getElementById("productSearch").value.trim().toLowerCase();
      const list=products.filter(p=>(filter==="tous"||category(p)===filter)&&[p.name,p.description,p.category,p.unit].join(" ").toLowerCase().includes(q));
      const grid=document.getElementById("productGrid");
      if(!list.length){grid.innerHTML='<div class="empty">Aucun produit trouvé. Essayez une autre recherche.</div>';return}
      grid.innerHTML=list.map(p=>`<article class="product-card">
        <div class="product-image"><img src="${esc(photo(p))}" alt="${esc(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='${PHOTOS.wood}'"><span class="product-badge">${category(p)==="charbon"?"Charbon":"Bois de chauffage"}</span></div>
        <div class="product-body"><span class="product-type">${category(p)==="charbon"?"Combustible":"Bois de chauffage"}</span><h3>${esc(p.name)}</h3><p class="product-desc">${esc(p.description||"Contactez-nous pour plus de détails sur ce produit.")}</p>
        <div class="product-bottom"><div class="price">${money(p.price)}<span class="unit">${esc(p.unit||"unité")}</span></div><button class="add-button" onclick="addToCart('${esc(String(p.id))}')">＋ Ajouter</button></div></div></article>`).join("");
    }
    async function loadProducts(){
      try{
        if(!window.supabase?.createClient)throw new Error("Supabase indisponible");
        const db=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
        const {data,error}=await db.from(PRODUCT_TABLE).select("id,name,slug,category,description,price,unit,stock_quantity,is_active,image_url,created_at").eq("is_active",true).order("created_at",{ascending:false});
        if(error)throw error;
        products=data||[];
        if(!products.length)products=demoProducts;
      }catch(e){console.warn("Chargement du catalogue :",e);products=demoProducts}
      renderProducts();updateCart();
    }
    function addToCart(id){
      const p=products.find(x=>String(x.id)===String(id));if(!p)return;
      let line=cart.find(x=>String(x.id)===String(p.id));
      if(line)line.quantity++;else cart.push({id:p.id,name:p.name,slug:p.slug||"",price:p.price,unit:p.unit||"unité",quantity:1});
      saveCart();openCart();
    }
    function changeQty(id,delta){
      const line=cart.find(x=>String(x.id)===String(id));if(!line)return;
      line.quantity+=delta;if(line.quantity<=0)cart=cart.filter(x=>String(x.id)!==String(id));saveCart();
    }
    function removeItem(id){cart=cart.filter(x=>String(x.id)!==String(id));saveCart()}
    function cartCount(){return cart.reduce((n,x)=>n+Number(x.quantity||0),0)}
    function total(){return cart.reduce((n,x)=>n+(Number(x.price)||0)*Number(x.quantity||0),0)}
    function updateCart(){
      const count=cartCount();document.getElementById("cartCount").textContent=count;document.getElementById("mobileCartCount").textContent=count;
      document.getElementById("cartTotal").textContent=money(total());
      const box=document.getElementById("cartItems");
      if(!cart.length){box.innerHTML='<div class="cart-empty">Votre panier est vide.<br>Découvrez nos produits pour commencer.</div>';document.querySelector(".checkout").disabled=true;return}
      document.querySelector(".checkout").disabled=false;
      box.innerHTML=cart.map(x=>`<div class="cart-line"><div><strong>${esc(x.name)}</strong><small>${money(x.price)} · ${esc(x.unit)}</small><div class="qty"><button onclick="changeQty('${esc(String(x.id))}',-1)">−</button><b>${x.quantity}</b><button onclick="changeQty('${esc(String(x.id))}',1)">+</button></div></div><div><b>${money((Number(x.price)||0)*x.quantity)}</b><br><button class="remove" onclick="removeItem('${esc(String(x.id))}')">Retirer</button></div></div>`).join("");
    }
    function openCart(){document.getElementById("cartOverlay").classList.add("open");document.body.style.overflow="hidden";updateCart()}
    function closeCart(){document.getElementById("cartOverlay").classList.remove("open");document.body.style.overflow=""}
    function goToCheckout(){
      if(!cart.length)return;
      localStorage.setItem("boisroyal_cart",JSON.stringify(cart));
      window.location.href="devis.html?panier=1";
    }
    document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()}));
    document.getElementById("productSearch").addEventListener("input",renderProducts);
    document.querySelectorAll("[data-category-link]").forEach(a=>a.addEventListener("click",()=>{filter=a.dataset.categoryLink;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));renderProducts()}));
    document.getElementById("year").textContent=new Date().getFullYear();
    updateCart();loadProducts();
  