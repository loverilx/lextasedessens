const products = [
  {
    id: 'art-163',
    name: 'Gode Ventouse Premium – Réalisme Anatomique & Format Élancé',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-163.jpg',
    description: 'Conçu pour les amateurs de réalisme, ce gode ventouse associe une silhouette élancée à une finition anatomique particulièrement soignée. Son format équilibré, sa texture détaillée et son silicone premium en font un modèle idéal pour une expérience naturelle et confortable.',
    details: [
      'Longueur totale : 17 cm',
      'Diamètre : 3,8 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-163'
    ]
  },
  {
    id: 'art-162',
    name: 'Gode Ventouse Premium – Format Compact & Sensations de Volume',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-162.jpg',
    description: 'Conçu pour les amateurs de modèles compacts, ce gode ventouse privilégie un diamètre généreux afin d\'offrir une sensation de volume dès les premiers instants. Son design réaliste, sa texture soignée et son silicone premium en font un modèle aussi confortable qu\'élégant.',
    details: [
      'Longueur totale : 15 cm',
      'Diamètre : 4,5 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-162'
    ]
  },
  {
    id: 'art-161',
    name: 'Gode Ventouse Premium – Réalisme Anatomique & Format Équilibré',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-161.jpg',
    description: 'Conçu pour les amateurs de réalisme, ce gode ventouse associe une silhouette harmonieuse à des finitions anatomiques particulièrement soignées. Son format polyvalent, sa texture détaillée et son silicone premium en font un modèle idéal pour une expérience naturelle, confortable et immersive.',
    details: [
      'Longueur totale : 17 cm',
      'Diamètre : 4,1 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-161'
    ]
  },
  {
    id: 'art-160',
    name: 'Gode Ventouse Premium – Réalisme Anatomique & Format Polyvalent',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-160.jpg',
    description: 'Conçu pour les amateurs de réalisme, ce gode ventouse associe des proportions harmonieuses à une finition anatomique soignée. Son diamètre équilibré, sa texture détaillée et son silicone premium en font un modèle idéal pour une expérience naturelle et confortable.',
    details: [
      'Longueur totale : 17 cm',
      'Diamètre : 4,2 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-160'
    ]
  },
  {
    id: 'art-157',
    name: 'Gode Ventouse Premium – Format Confort & Réalisme Anatomique',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-157.jpg',
    description: 'Conçu pour les amateurs de modèles réalistes, ce gode ventouse associe un format confortable à une finition anatomique particulièrement soignée. Sa texture détaillée, son silicone premium et son diamètre équilibré en font un modèle idéal pour une utilisation régulière.',
    details: [
      'Longueur totale : 16 cm',
      'Diamètre : 3,8 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-157'
    ]
  },
  {
    id: 'art-146',
    name: 'Gode Ventouse XXL Premium – Grand Format & Réalisme Intense',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-146.jpg',
    description: 'Conçu pour les amateurs de modèles généreux, ce gode ventouse associe un grand format à une finition anatomique particulièrement soignée. Sa texture réaliste, son silicone premium et sa base ventouse en font un modèle pensé pour offrir confort, stabilité et une expérience immersive.',
    details: [
      'Longueur totale : 23 cm',
      'Diamètre : 4,8 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-146'
    ]
  },
  {
    id: 'art-143',
    name: 'Gode Ventouse Premium',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-143.jpg',
    description: 'Un format réaliste et polyvalent en silicone premium, avec base ventouse stable et compatibilité harnais.',
    details: [
      'Longueur totale : 20 cm',
      'Diamètre : 3,8 cm',
      'Silicone premium doux au toucher',
      'Base ventouse stable',
      'Compatible avec les harnais',
      'Référence : ART-143'
    ]
  },
  {
    id: 'velours',
    name: 'Velours',
    category: 'Bien-être',
    price: 34.90,
    description: 'Une attention délicate pour transformer chaque moment en rituel.',
    details: ['Texture veloutée', 'Format compact', 'Nettoyage facile']
  },
  {
    id: 'aura',
    name: 'Aura',
    category: 'Jeux à deux',
    price: 29.90,
    description: 'Pensé pour partager de nouveaux instants de complicité.',
    details: ['Souple et léger', 'Adapté aux débutants', 'Guide inclus']
  },
  {
    id: 'lune',
    name: 'Lune',
    category: 'Accessoires',
    price: 24.90,
    description: 'Un essentiel élégant qui accompagne vos moments intimes.',
    details: ['Design discret', 'Matière body-safe', 'Pochette de rangement']
  },
  {
    id: 'soie',
    name: 'Soie',
    category: 'Bien-être',
    price: 19.90,
    description: 'Un soin sensoriel pour prolonger vos instants de douceur.',
    details: ['Formule douce', 'Parfum délicat', 'Format 100 ml']
  },
  {
    id: 'secret',
    name: 'Secret',
    category: 'Jeux à deux',
    price: 39.90,
    description: 'Un jeu complice pour explorer vos envies à deux.',
    details: ['Cartes d’inspiration', 'Règles simples', 'Pour deux adultes']
  },
  {
    id: 'rive',
    name: 'Rive',
    category: 'Vibromasseurs',
    price: 54.90,
    description: 'Des vibrations modulables dans une silhouette raffinée.',
    details: ['Plusieurs intensités', 'Rechargeable USB', 'Étanche']
  },
  {
    id: 'nuit',
    name: 'Nuit',
    category: 'Accessoires',
    price: 17.90,
    description: 'Un accessoire sensuel pour créer une atmosphère à votre image.',
    details: ['Tissu satiné', 'Taille ajustable', 'Lavable à la main']
  }
];

const euro = value => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
const cartKey = 'extase-cart';
const getCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');
const cartCount = () => getCart().reduce((n, item) => n + item.quantity, 0);

function updateCartCount() {
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartCount());
}

function setCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id) {
  const cart = getCart(), item = cart.find(entry => entry.id === id);
  if (item) item.quantity += 1;
  else cart.push({ id, quantity: 1 });
  setCart(cart);
}

function productCard(product, index) {
  const image = product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : '';
  return `<article class="product-card shop-product-card"><a href="produit.html?id=${product.id}" aria-label="Voir ${product.name}"><div class="product-visual product-art-${index % 4}">${image}</div><div class="product-info"><span class="product-category">${product.category}</span><h3>${product.name}</h3><span class="product-price">${euro(product.price)}</span></div></a><button class="add-to-cart" type="button" data-add-cart="${product.id}">Ajouter</button></article>`;
}

function bindButtons() {
  document.querySelectorAll('[data-add-cart]').forEach(button => button.addEventListener('click', () => {
    addToCart(button.dataset.addCart);
    const label = button.textContent;
    button.textContent = 'Ajouté ✓';
    setTimeout(() => button.textContent = label, 1200);
  }));
}

function renderFeatured() {
  const element = document.querySelector('#featured-products');
  if (!element) return;
  element.innerHTML = products.slice(0, 4).map(productCard).join('');
  bindButtons();
}

function renderShop() {
  const container = document.querySelector('[data-shop-products]');
  if (!container) return;
  const search = document.querySelector('[data-search]'), filters = document.querySelectorAll('[data-filter]'), count = document.querySelector('[data-results-count]');
  let active = new URLSearchParams(location.search).get('categorie') || 'Tous';

  function update() {
    const term = (search.value || '').trim().toLowerCase();
    const shown = products.filter(product => (active === 'Tous' || product.category === active) && `${product.name} ${product.category}`.toLowerCase().includes(term));
    container.innerHTML = shown.map(productCard).join('') || '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
    count.textContent = `${shown.length} produit${shown.length > 1 ? 's' : ''}`;
    bindButtons();
    filters.forEach(button => button.classList.toggle('is-active', button.dataset.filter === active));
  }

  filters.forEach(button => button.addEventListener('click', () => { active = button.dataset.filter; update(); }));
  search.addEventListener('input', update);
  update();
}

function renderProduct() {
  const target = document.querySelector('[data-product-page]');
  if (!target) return;
  const product = products.find(item => item.id === new URLSearchParams(location.search).get('id')) || products[0];
  const image = product.image ? `<img src="${product.image}" alt="${product.name}">` : '';
  target.innerHTML = `<div class="product-detail-art product-art-${products.indexOf(product) % 4}">${image}</div><div class="product-detail-info"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p class="detail-price">${euro(product.price)}</p><p class="detail-description">${product.description}</p><ul>${product.details.map(detail => `<li>${detail}</li>`).join('')}</ul><button class="button button-dark" data-add-cart="${product.id}">Ajouter au panier <span>→</span></button><p class="detail-note">Expédition discrète · Paiement à configurer avant ouverture des ventes.</p></div>`;
  bindButtons();
}

function renderCart() {
  const target = document.querySelector('[data-cart-page]');
  if (!target) return;
  const cart = getCart(), items = cart.map(item => ({ ...item, product: products.find(product => product.id === item.id) })).filter(item => item.product);
  if (!items.length) {
    target.innerHTML = '<p class="empty-cart">Votre panier est vide. <a href="boutique.html">Découvrir la boutique →</a></p>';
    return;
  }
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  target.innerHTML = `<div class="cart-items">${items.map(item => `<article class="cart-item"><div class="cart-mini-art product-art-${products.indexOf(item.product) % 4}"></div><div><p class="product-category">${item.product.category}</p><h2>${item.product.name}</h2><strong>${euro(item.product.price)}</strong></div><div class="cart-quantity"><button data-quantity="${item.product.id}" data-change="-1">−</button><span>${item.quantity}</span><button data-quantity="${item.product.id}" data-change="1">+</button></div><button class="remove-item" data-remove="${item.product.id}">Supprimer</button></article>`).join('')}</div><aside class="cart-summary"><p>Sous-total</p><strong>${euro(total)}</strong><small>Les frais de livraison seront affichés lors de la configuration du paiement.</small><button class="button button-dark" type="button" disabled>Passer au paiement</button></aside>`;

  document.querySelectorAll('[data-change]').forEach(button => button.addEventListener('click', () => {
    const cart = getCart(), item = cart.find(entry => entry.id === button.dataset.quantity);
    item.quantity += Number(button.dataset.change);
    setCart(cart.filter(entry => entry.quantity > 0));
    renderCart();
  }));

  document.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => {
    setCart(getCart().filter(item => item.id !== button.dataset.remove));
    renderCart();
  }));
}

const toggle = document.querySelector('[data-menu-toggle]'), menu = document.querySelector('[data-menu]');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

window.addEventListener('scroll', () => document.querySelector('[data-header]')?.classList.toggle('is-scrolled', scrollY > 25));
document.querySelector('[data-year]')?.append(new Date().getFullYear());
document.querySelector('[data-newsletter]')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('[data-form-message]').textContent = 'Merci — votre inscription a bien été prise en compte.';
  event.currentTarget.reset();
});

renderFeatured();
renderShop();
renderProduct();
renderCart();
updateCartCount();