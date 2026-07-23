const products = [
  {
    id: 'art-144',
    name: 'Kit d’Initiation BDSM & Bondage – Coffret Découverte Complet',
    category: 'Accessoires',
    price: 20.00,
    image: 'assets/images/products/art-144.jpg',
    description: 'Découvrez un ensemble complet pensé pour explorer l’univers du BDSM et du bondage en toute confiance. Ce kit réunit les accessoires essentiels pour créer une expérience basée sur la découverte, la complicité et la communication entre partenaires.',
    details: [
      'Système d’attache ajustable pour lit',
      '4 menottes rembourrées pour poignets et chevilles',
      'Paddle en similicuir pour stimulations progressives',
      'Pinces à seins avec clochettes',
      'Bandeau de privation sensorielle',
      'Référence : ART-144'
    ]
  },
  {
    id: 'art-145',
    name: 'Set de Cockrings Multi-Tailles & Design Géométrique',
    category: 'Accessoires',
    price: 10.00,
    image: 'assets/images/products/art-145.jpg',
    description: 'Découvrez un ensemble complet de cockrings pensé pour varier les sensations et s’adapter facilement aux différentes morphologies. Avec son design octogonal moderne et ses multiples tailles, ce coffret permet une utilisation progressive et personnalisée.',
    details: [
      'Design octogonal géométrique original',
      'Coffret complet de 9 pièces multi-tailles',
      'Modèle spécifique triple anneau inclus',
      'Silicone souple haute qualité',
      'Finition douce "Soft Touch" mat',
      'Référence : ART-145'
    ]
  },
  {
    id: 'art-153',
    name: 'Douche Intime Portable Multifonction – Hygiène & Confort',
    category: 'Bien-être',
    price: 20.00,
    image: 'assets/images/products/art-153.jpg',
    description: 'Découvrez une solution pratique et discrète dédiée au bien-être intime et à l’hygiène personnelle. Grâce à son format compact et ses différents embouts interchangeables, cette douche intime permet une utilisation simple à la maison comme en déplacement.',
    details: [
      'Format nomade compact et transportable',
      'Embouts interchangeables inclus',
      'Canule ergonomique inclinée',
      'Système de pompage par tuyau d’aspiration',
      'Coffret de rangement compartimenté inclus',
      'Référence : ART-153'
    ]
  },
  {
    id: 'art-140',
    name: 'Douche Intime Électrique Rechargeable – Hygiène & Confort Premium',
    category: 'Bien-être',
    price: 20.00,
    image: 'assets/images/products/art-140.jpg',
    description: 'Découvrez une solution moderne dédiée au bien-être intime et à l’hygiène personnelle. Cette douche intime électrique rechargeable associe simplicité d’utilisation, confort et technologie pour une routine d’hygiène plus pratique.',
    details: [
      'Système électrique automatique motorisé',
      'Réservoir intégré transparent',
      'Embout ergonomique souple (silicone & ABS)',
      'Rechargeable via USB',
      'Format pratique et discret',
      'Référence : ART-140'
    ]
  },
  {
    id: 'art-148',
    name: 'Gode Ventouse Lava Réaliste – Texture Peau & Design Organique',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-148.jpg',
    description: 'Découvrez un modèle au design spectaculaire combinant réalisme, texture travaillée et sensations intenses. Avec son apparence inspirée de la roche en fusion et ses détails anatomiques soignés, ce gode apporte une expérience visuelle et sensorielle originale.',
    details: [
      'Longueur totale : 21,6 cm',
      'Diamètre : 5,1 cm',
      'Silicone haute densité au toucher doux',
      'Design original marbré effet "Lava" (noir et orange)',
      'Texture ultra-réaliste avec reliefs anatomiques',
      'Base ventouse renforcée (mains libres)',
      'Référence : ART-148'
    ]
  },
  {
    id: 'art-142',
    name: 'Stimulateur Connecté Va-et-Vient & Vibrations Premium',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-142.jpg',
    description: 'Découvrez une nouvelle génération de stimulateurs connectés alliant mouvement automatique, vibrations puissantes et contrôle intelligent. Conçu pour offrir une expérience immersive, ce modèle associe plusieurs technologies dans un design élégant et performant.',
    details: [
      'Longueur totale : 14,33 cm',
      'Diamètre : 3,32 cm (pointe) à 3,88 cm (zone texturée)',
      'Mouvement automatique de va-et-vient motorisé',
      'Vibrations puissantes & réglables',
      'Contrôle intelligent par smartphone (App) & télécommande',
      'Base ventouse stable (mains libres)',
      'Rechargeable',
      'Référence : ART-142'
    ]
  },
  {
    id: 'art-151',
    name: 'Gode Spiral Fantasy – Design Licorne Multicolore',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-151.jpg',
    description: 'Apportez une touche d\'originalité à votre collection avec ce modèle au design inspiré de l\'univers fantasy. Sa silhouette torsadée, son dégradé de couleurs et sa forme évolutive en font un accessoire aussi esthétique qu\'agréable à découvrir.',
    details: [
      'Longueur totale : 19 cm',
      'Diamètre du corps : 4,1 cm (jusqu\'à 5,5 cm max)',
      'Matière : Silicone premium au toucher doux',
      'Design fantasy avec texture en spirale',
      'Dégradé multicolore élégant (violet vers bleu profond)',
      'Forme conique progressive',
      'Base évasée pour une excellente stabilité',
      'Référence : ART-151'
    ]
  },
  {
    id: 'art-150',
    name: 'Gode XL Bicolore Premium – Volume & Sensations Intenses',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-150.jpg',
    description: 'Conçu pour les amateurs de modèles généreux, ce gode XL associe un design élégant, des dimensions imposantes et une finition soignée. Son dégradé de couleurs et sa forme ergonomique en font un accessoire aussi esthétique que performant.',
    details: [
      'Longueur totale : 23 cm',
      'Diamètre du corps : 5 cm (jusqu\'à 7,3 cm max)',
      'Matière : Silicone premium au toucher doux',
      'Dégradé bicolore moderne (rose vers violet)',
      'Forme progressive & pointe affinée',
      'Base évasée pour une excellente stabilité',
      'Référence : ART-150'
    ]
  },
  {
    id: 'art-147',
    name: 'Gode Gonflable Premium – Volume Ajustable & Design Galaxy',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-147.jpg',
    description: 'Conçu pour les amateurs de sensations personnalisées, ce modèle associe un système de gonflage innovant à un design inspiré des couleurs de l\'univers. Grâce à son volume ajustable, il permet d\'adapter progressivement les sensations selon vos envies.',
    details: [
      'Longueur totale : 16,2 cm',
      'Longueur insérable : 12,7 cm',
      'Diamètre du corps : 5,8 cm (jusqu\'à 6,5 cm gonflé)',
      'Matière : Silicone premium au toucher doux',
      'Système de gonflage manuel avec poire',
      'Base évasée pour une excellente stabilité',
      'Référence : ART-147'
    ]
  },
  {
    id: 'art-165',
    name: 'Gode Vibrant XXL – Réalisme & Vibrations Intenses',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-165.jpg',
    description: 'Conçu pour les amateurs de modèles longs, ce gode vibrant associe des dimensions généreuses, une texture réaliste et des vibrations puissantes pour offrir une expérience immersive. Son design anatomique et sa base ventouse en font un accessoire polyvalent, aussi confortable que performant.',
    details: [
      'Longueur totale : 21,5 cm',
      'Diamètre : 4 cm',
      'Matière : Silicone premium au toucher doux',
      'Vibrations réglables (moteur puissant)',
      'Base ventouse stable (mains libres)',
      'Référence : ART-165'
    ]
  },
  {
    id: 'art-159',
    name: 'Gode Chauffant & Vibrant XXL – Confort Thermique & Sensations Intenses',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-159.jpg',
    description: 'Conçu pour les amateurs de modèles au format généreux, ce gode chauffant et vibrant associe un diamètre important à des fonctionnalités avancées pour offrir une expérience personnalisable. Son design réaliste, sa fonction chauffante et ses vibrations en font un modèle pensé pour allier confort et technologie.',
    details: [
      'Longueur totale : 15 cm',
      'Diamètre : 6,05 cm',
      'Matière : Silicone premium au toucher doux',
      'Fonction chauffante intégrée',
      'Vibrations réglables',
      'Base ventouse stable (mains libres)',
      'Référence : ART-159'
    ]
  },
  {
    id: 'art-158',
    name: 'Gode Chauffant & Vibrant XL – Réalisme & Confort Premium',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-158.jpg',
    description: 'Conçu pour les amateurs de sensations réalistes, ce gode chauffant et vibrant associe une finition anatomique soignée à des technologies avancées pour offrir une expérience immersive. Son format XL, sa fonction chauffante et ses vibrations personnalisables en font un modèle alliant confort, performance et élégance.',
    details: [
      'Longueur totale : 18 cm',
      'Diamètre : 4 cm',
      'Matière : Silicone premium au toucher doux',
      'Fonction chauffante intégrée',
      'Vibrations réglables',
      'Base ventouse stable (mains libres)',
      'Référence : ART-158'
    ]
  },
  {
    id: 'art-156',
    name: 'Gode Chauffant & Vibrant Premium – Réalisme & Double Technologie',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-156.jpg',
    description: 'Conçu pour les amateurs de sensations réalistes, ce gode associe une finition anatomique soignée à une double technologie de pointe. Grâce à sa fonction chauffante et à ses vibrations personnalisables, il offre une expérience immersive tout en conservant un format équilibré et facile à prendre en main.',
    details: [
      'Longueur totale : 16 cm',
      'Diamètre : 4 cm',
      'Matière : Silicone premium au toucher doux',
      'Fonction chauffante intégrée',
      'Vibrations réglables',
      'Base ventouse stable (mains libres)',
      'Référence : ART-156'
    ]
  },
  {
    id: 'art-155',
    name: 'Gode Éjaculateur Premium – Réalisme & Effet Éjaculation',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-155.jpg',
    description: 'Conçu pour les amateurs de réalisme, ce modèle associe une finition anatomique soignée à un système permettant de simuler une éjaculation. Son format équilibré, sa texture détaillée et sa base ventouse en font un accessoire pensé pour offrir une expérience immersive.',
    details: [
      'Longueur totale : 16 cm',
      'Diamètre : 3,5 cm',
      'Matière : Silicone premium au toucher doux',
      'Système de simulation d\'éjaculation intégré (réservoir & pompe)',
      'Base ventouse stable (mains libres)',
      'Référence : ART-155'
    ]
  },
  {
    id: 'art-154',
    name: 'Gode Vibrant Double Stimulation – Réalisme & Stimulateur Externe',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-154.jpg',
    description: 'Conçu pour offrir une expérience complète, ce modèle associe une texture réaliste, des vibrations intégrées et un stimulateur externe. Son design ergonomique permet de combiner plusieurs types de stimulation dans un seul accessoire, tout en conservant un format confortable et facile à utiliser.',
    details: [
      'Longueur totale : 18 cm',
      'Diamètre : 4 cm',
      'Matière : Silicone premium au toucher doux',
      'Stimulateur externe intégré',
      'Vibrations réglables',
      'Base ventouse stable (mains libres)',
      'Référence : ART-154'
    ]
  },
  {
    id: 'art-152',
    name: 'Gode Vibrant Premium – Élégance Pourpre & Sensations Profondes',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-152.jpg',
    description: 'Conçu pour les amateurs de modèles élégants, ce gode vibrant associe une silhouette élancée, une légère courbure anatomique et des vibrations puissantes. Sa finition violette rehaussée de détails dorés lui confère un design raffiné, tout en offrant une expérience confortable et immersive.',
    details: [
      'Longueur totale : 22 cm',
      'Diamètre : 3,9 cm',
      'Matière : Silicone premium au toucher doux',
      'Vibrations réglables (moteur puissant)',
      'Base ergonomique avec commandes intégrées',
      'Référence : ART-152'
    ]
  },
  {
    id: 'art-149',
    name: 'Gode Vibrant Premium – Design Arqué & Télécommande Sans Fil',
    category: 'Vibromasseurs',
    price: 25.00,
    image: 'assets/images/products/art-149.jpg',
    description: 'Conçu pour les amateurs de technologies et de confort, ce gode vibrant associe une silhouette légèrement arquée à un système de vibrations pilotable à distance. Son design bicolore moderne et sa prise en main ergonomique en font un modèle aussi élégant que performant.',
    details: [
      'Longueur totale : 18 cm',
      'Diamètre : 3,5 cm',
      'Matière : Silicone premium au toucher doux',
      'Télécommande sans fil incluse',
      'Vibrations réglables (moteur performant)',
      'Référence : ART-149'
    ]
  },
  {
    id: 'art-167',
    name: 'Gode Ventouse Black Edition – Élégance Ébène & Grand Format',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-167.jpg',
    description: 'Conçu pour les amateurs de modèles généreux, ce gode ventouse associe un design sobre et raffiné à des dimensions confortables. Sa finition noire intense met en valeur ses détails anatomiques et apporte une touche d\'élégance à cette pièce pensée pour les utilisateurs en quête de sensations de volume.',
    details: [
      'Longueur totale : 22 cm',
      'Diamètre : 4,5 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Compatible avec les harnais',
      'Référence : ART-167'
    ]
  },
  {
    id: 'art-166',
    name: 'Gode XXL Ventouse Premium – Grand Format & Réalisme Intense',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-166.jpg',
    description: 'Conçu pour les amateurs de modèles très généreux, ce gode XXL associe des dimensions imposantes à une finition anatomique soignée. Sa texture réaliste, son silicone premium et sa base ventouse renforcée en font un modèle pensé pour offrir une expérience confortable et immersive.',
    details: [
      'Longueur totale : 20 cm',
      'Diamètre : 5,5 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse renforcée (mains libres)',
      'Référence : ART-166'
    ]
  },
  {
    id: 'art-164',
    name: 'Gode Ventouse Premium – Réalisme Anatomique & Format Confort',
    category: 'Gode',
    price: 25.00,
    image: 'assets/images/products/art-164.jpg',
    description: 'Conçu pour les amateurs de réalisme, ce gode ventouse associe une finition anatomique détaillée à un format équilibré. Sa texture travaillée, ses dimensions confortables et son silicone premium en font un modèle idéal pour profiter d\'une expérience naturelle et agréable.',
    details: [
      'Longueur totale : 16 cm',
      'Diamètre : 3,8 cm',
      'Matière : Silicone premium au toucher doux',
      'Base ventouse stable (mains libres)',
      'Référence : ART-164'
    ]
  },
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
  }
];

const euro = value => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
const cartKey = 'extase-cart';
const getCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');

const cartCount = () => {
  const cart = getCart();
  const items = cart.map(item => ({ ...item, product: products.find(product => product.id === item.id) })).filter(item => item.product);
  if (items.length === 0) {
    if (cart.length > 0) localStorage.removeItem(cartKey);
    return 0;
  }
  return items.reduce((n, item) => n + item.quantity, 0);
};

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
  target.innerHTML = `<div class="product-detail-art product-art-${products.indexOf(product) % 4}">${image}</div><div class="product-detail-info"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p class="detail-price">${euro(product.price)}</p><p class="detail-description">${product.description}</p><ul>${product.details.map(detail => `<li>${detail}</li>`).join('')}</ul><button class="button button-dark" data-add-cart="${product.id}">Ajouter au panier <span>→</span></button><p class="detail-note">Expédition discrète · Frais de port fixes de 6,00 € · Paiement sécurisé via PayPal.Me.</p></div>`;
  bindButtons();
}

let appliedDiscountAmount = 0; 
let appliedPromoCode = '';

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwSw_CZG7SNAYzGUhAXzTuTgzQRR-2P9ygLM1ol7dpec0LT-Xs4-NWEPG4lRS4orRki/exec";

function renderCart() {
  const target = document.querySelector('[data-cart-page]');
  if (!target) return;
  
  // Écran de succès avec forçage absolu anti-flex via !important
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    const totalPay = urlParams.get('total') || '0.00';
    target.style.cssText = "display: block !important; width: 100% !important; float: none !important;";
    target.innerHTML = `
      <div style="width: 100% !important; display: block !important; text-align: center !important; margin: 40px auto !important; float: none !important; clear: both !important;">
        <div style="max-width: 600px !important; width: 100% !important; margin: 0 auto !important; background: #ffffff !important; padding: 40px !important; border-radius: 12px !important; border: 1px solid #e5e5e5 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important; text-align: center !important; box-sizing: border-box !important; display: block !important; float: none !important;">
          
          <div style="font-size: 3rem !important; margin-bottom: 15px !important; display: block !important; width: 100% !important;">✨</div>
          
          <h2 style="color: #28a745 !important; font-size: 1.8rem !important; margin: 0 0 20px 0 !important; display: block !important; width: 100% !important;">Commande enregistrée avec succès !</h2>
          
          <p style="font-size: 1.1rem !important; line-height: 1.6 !important; color: #444 !important; margin: 0 0 15px 0 !important; display: block !important; width: 100% !important;">
            Merci pour votre confiance. Vos coordonnées et votre panier ont bien été transmis.
          </p>
          
          <p style="font-size: 1rem !important; color: #666 !important; line-height: 1.5 !important; margin: 0 0 30px 0 !important; display: block !important; width: 100% !important;">
            Pour finaliser votre commande d'un montant total de <strong style="color: #111 !important; font-size: 1.2rem !important;">${totalPay} €</strong>, veuillez procéder au paiement sécurisé via notre lien PayPal.Me :
          </p>
          
          <div style="margin: 0 0 30px 0 !important; display: block !important; width: 100% !important;">
            <a href="https://paypal.me/Loverilx/${totalPay}EUR" target="_blank" style="display: inline-block !important; background: #0070ba !important; color: #fff !important; padding: 15px 35px !important; border-radius: 6px !important; text-decoration: none !important; font-weight: bold !important; font-size: 1.2rem !important; box-shadow: 0 4px 10px rgba(0,112,186,0.2) !important;">
              Payer ${totalPay} € sur PayPal.Me →
            </a>
          </div>
          
          <p style="font-size: 0.85rem !important; color: #888 !important; border-top: 1px solid #eee !important; padding-top: 20px !important; margin: 20px 0 0 0 !important; display: block !important; width: 100% !important; line-height: 1.4 !important;">
            Une fois le paiement effectué, votre commande sera préparée et expédiée discrètement.<br>Vous pouvez fermer cette page en toute sécurité après votre règlement.
          </p>
          
        </div>
      </div>
    `;
    updateCartCount();
    return;
  }

  const cart = getCart(), items = cart.map(item => ({ ...item, product: products.find(product => product.id === item.id) })).filter(item => item.product);
  if (!items.length) {
    target.innerHTML = '<p class="empty-cart">Votre panier est vide. <a href="boutique.html">Découvrir la boutique →</a></p>';
    updateCartCount();
    return;
  }
  
  const sousTotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const fraisDePort = 6.00;
  
  let discountAmount = appliedDiscountAmount;
  if (discountAmount > (sousTotal + fraisDePort)) {
    discountAmount = sousTotal + fraisDePort;
  }

  const total = Math.max(0, (sousTotal + fraisDePort) - discountAmount);
  
  target.innerHTML = `
    <div class="cart-items">
      ${items.map(item => {
        const itemImage = item.product.image ? `<img src="${item.product.image}" alt="${item.product.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">` : '';
        return `
        <article class="cart-item" style="display: flex; align-items: center; gap: 20px; padding: 15px 0; border-bottom: 1px solid #eee;">
          ${itemImage}
          <div style="flex-grow: 1;">
            <p class="product-category" style="margin: 0; font-size: 0.85rem; color: #666;">${item.product.category} (Réf: ${item.product.id})</p>
            <h2 style="margin: 4px 0; font-size: 1.05rem;">${item.product.name}</h2>
            <strong style="color: #111;">${euro(item.product.price)}</strong>
          </div>
          <div class="cart-quantity" style="display: flex; align-items: center; gap: 10px;">
            <button data-quantity="${item.product.id}" data-change="-1" style="padding: 2px 8px; cursor: pointer;">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="${item.product.id}" data-change="1" style="padding: 2px 8px; cursor: pointer;">+</button>
          </div>
          <button class="remove-item" data-remove="${item.product.id}" style="background: none; border: none; color: #d9534f; cursor: pointer; text-decoration: underline;">Supprimer</button>
        </article>
      `;}).join('')}
    </div>
    <aside class="cart-summary" style="margin-top: 30px; background: #fafafa; padding: 20px; border-radius: 8px;">
      <!-- Bloc Code Promo -->
      <div style="margin-bottom: 15px; display: flex; gap: 10px;">
        <input type="text" id="promo-input" placeholder="Votre code promo" value="${appliedPromoCode}" style="flex-grow: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; text-transform: uppercase;">
        <button id="apply-promo-btn" style="padding: 8px 12px; background: #111; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Appliquer</button>
      </div>
      <p id="promo-msg" style="font-size: 0.85rem; margin: -5px 0 15px 0; color: ${appliedPromoCode ? 'green' : '#666'};">${appliedPromoCode ? `Code appliqué !` : ''}</p>

      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Sous-total</span>
        <span>${euro(sousTotal)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
        <span>Livraison</span>
        <span>${euro(fraisDePort)}</span>
      </div>
      ${discountAmount > 0 ? `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #28a745;">
        <span>Réduction</span>
        <span>-${euro(discountAmount)}</span>
      </div>` : ''}
      <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ddd;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 1.1em;">
        <strong>Total</strong>
        <strong>${euro(total)}</strong>
      </div>

      <!-- Formulaire coordonnées client avec vérification format -->
      <div style="margin-top: 20px; background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #ddd;">
        <h3 style="margin-top: 0; font-size: 1rem;">Vos coordonnées de livraison</h3>
        <div style="margin-bottom: 10px;">
          <label style="display: block; font-size: 0.85rem; margin-bottom: 4px;">Nom et Prénom :</label>
          <input type="text" id="customer-name" placeholder="Ex: Jean Dupont" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 10px;">
          <label style="display: block; font-size: 0.85rem; margin-bottom: 4px;">E-mail :</label>
          <input type="email" id="customer-email" placeholder="Ex: jean@exemple.fr" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 10px;">
          <label style="display: block; font-size: 0.85rem; margin-bottom: 4px;">Téléphone :</label>
          <input type="tel" id="customer-phone" placeholder="Ex: 06 12 34 56 78" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 15px;">
          <label style="display: block; font-size: 0.85rem; margin-bottom: 4px;">Adresse postale complète :</label>
          <textarea id="customer-address" placeholder="12 rue de la Paix, 75001 Paris" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; height: 60px; resize: vertical;"></textarea>
        </div>
        <button class="button button-dark" id="checkout-sheet-btn" style="width: 100%; text-align: center; display: block; border: none; cursor: pointer; padding: 10px; background: #111; color: #fff; border-radius: 4px; font-weight: bold;">
          Valider la commande (${euro(total)}) →
        </button>
      </div>
    </aside>
  `;

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

  const promoBtn = document.getElementById('apply-promo-btn');
  promoBtn?.addEventListener('click', async () => {
    const inputVal = document.getElementById('promo-input').value.trim().toUpperCase();
    const msgEl = document.getElementById('promo-msg');

    if (!inputVal) return;

    if (inputVal === "TEST15") {
      appliedPromoCode = "TEST15";
      appliedDiscountAmount = 15.00;
      msgEl.style.color = 'green';
      msgEl.textContent = "Code test appliqué (-15,00 €) !";
      renderCart();
      return;
    }

    msgEl.style.color = '#666';
    msgEl.textContent = "Vérification en cours...";

    try {
      const response = await fetch(`${WEB_APP_URL}?code=${inputVal}&action=check`);
      if (!response.ok) {
          throw new Error(`Erreur serveur (${response.status})`);
      }
      const result = await response.json();

      if (result.status === "valid") {
        appliedPromoCode = inputVal;
        appliedDiscountAmount = sousTotal * (inputVal.includes("10") ? 0.10 : 0.05);
        
        msgEl.style.color = 'green';
        msgEl.textContent = "Code appliqué avec succès !";
        renderCart();
      } else if (result.status === "used") {
        appliedPromoCode = '';
        appliedDiscountAmount = 0;
        msgEl.style.color = '#d9534f';
        msgEl.textContent = "Ce code a déjà été utilisé.";
        renderCart();
      } else {
        appliedPromoCode = '';
        appliedDiscountAmount = 0;
        msgEl.style.color = '#d9534f';
        msgEl.textContent = "Code promo inconnu.";
        renderCart();
      }
    } catch (error) {
      msgEl.style.color = '#d9534f';
      msgEl.textContent = "Erreur de connexion au serveur.";
    }
  });

  const checkoutBtn = document.getElementById('checkout-sheet-btn');
  checkoutBtn?.addEventListener('click', async () => {
    const nameInput = document.getElementById('customer-name').value.trim();
    const emailInput = document.getElementById('customer-email').value.trim();
    const phoneInput = document.getElementById('customer-phone').value.trim();
    const addressInput = document.getElementById('customer-address').value.trim();

    if (!nameInput || !emailInput || !phoneInput || !addressInput) {
      alert('Veuillez remplir tous les champs (Nom, Email, Téléphone et Adresse).');
      return;
    }

    if (!emailInput.includes('@') || !emailInput.includes('.')) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    checkoutBtn.textContent = 'Enregistrement en cours...';
    checkoutBtn.disabled = true;

    const articlesList = items.map(i => `${i.quantity}x ${i.product.name}`).join(', ');
    const referencesList = items.map(i => `${i.quantity}x ${i.product.id}`).join(', ');

    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          phone: phoneInput,
          address: addressInput,
          items: articlesList,
          references: referencesList,
          total: total.toFixed(2)
        })
      });
      if (!response.ok) {
          throw new Error(`Erreur serveur (${response.status})`);
      }

      if (appliedPromoCode && appliedPromoCode !== "TEST15") {
        await fetch(`${WEB_APP_URL}?code=${appliedPromoCode}&action=use`).catch(() => {});
      }

      localStorage.removeItem(cartKey);

      window.location.href = `panier.html?success=true&total=${total.toFixed(2)}`;

    } catch (e) {
      window.location.href = `panier.html?success=true&total=${total.toFixed(2)}`;
    }
  });
}

const toggle = document.querySelector('[data-menu-toggle]'), menu = document.querySelector('[data-menu]');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

window.addEventListener('scroll', () => document.querySelector('[data-header]')?.classList.toggle('is-scrolled', window.scrollY > 20));

updateCartCount();
renderFeatured();
renderShop();
renderProduct();
renderCart();