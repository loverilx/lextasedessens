const products=[
  {name:'Éclat',category:'Vibromasseur',price:'49,90 €'},
  {name:'Velours',category:'Bien-être',price:'34,90 €'},
  {name:'Aura',category:'Jeux à deux',price:'29,90 €'},
  {name:'Lune',category:'Accessoire',price:'24,90 €'}
];
const featured=document.querySelector('#featured-products');
if(featured){featured.innerHTML=products.map((product,index)=>`<article class="product-card"><a href="boutique.html#produit-${index + 1}" aria-label="Voir ${product.name}"><div class="product-visual"></div><div class="product-info"><span class="product-category">${product.category}</span><h3>${product.name}</h3><span class="product-price">${product.price}</span></div></a><button class="product-button" type="button" aria-label="Ajouter ${product.name} aux favoris" data-favourite>♡</button></article>`).join('');}
const toggle=document.querySelector('[data-menu-toggle]'),menu=document.querySelector('[data-menu]');
toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('[data-favourite]').forEach(button=>button.addEventListener('click',()=>{button.textContent=button.textContent==='♡'?'♥':'♡';button.classList.toggle('is-active');}));
window.addEventListener('scroll',()=>document.querySelector('[data-header]')?.classList.toggle('is-scrolled',scrollY>25));
document.querySelector('[data-year]')?.append(new Date().getFullYear());
document.querySelector('[data-newsletter]')?.addEventListener('submit',event=>{event.preventDefault();const message=document.querySelector('[data-form-message]');message.textContent='Merci — votre inscription a bien été prise en compte.';event.currentTarget.reset();});
