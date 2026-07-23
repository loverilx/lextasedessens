// Données globales de la boutique
const products = [
  {
    id: "art-144",
    name: "L'Étreinte Satinée",
    category: "Lingerie & Accessoires",
    price: 49.00,
    description: "Une pièce délicate conçue pour envelopper la silhouette avec sensualité et raffinement.",
    details: [
      "Matière satinée douce et fluide",
      "Design élégant et confortable",
      "Idéal pour toutes les occasions intimes"
    ],
    image: "assets/images/product-144.jpg",
    alt: "Lingerie L'Étreinte Satinée",
    seoTitle: "L'Étreinte Satinée - Lingerie & Accessoires | L'Extase des Sens",
    metaDescription: "Découvrez L'Étreinte Satinée, une pièce délicate et raffinée conçue pour envelopper la silhouette avec sensualité."
  },
  {
    id: "art-145",
    name: "Brume Sensorielle Velours",
    category: "Cosmétiques & Soins",
    price: 29.00,
    description: "Une brume légère aux notes envoûtantes pour éveiller les sens et parfumer délicatement la peau.",
    details: [
      "Parfum subtil et longue tenue",
      "Formule douce testée dermatologiquement",
      "Flacon vaporisateur élégant de 100ml"
    ],
    image: "assets/images/product-145.jpg",
    alt: "Brume Sensorielle Velours",
    seoTitle: "Brume Sensorielle Velours - Cosmétiques | L'Extase des Sens",
    metaDescription: "Éveillez vos sens avec la Brume Sensorielle Velours, un parfum délicat et envoûtant pour la peau."
  },
  {
    id: "art-153",
    name: "Huile de Massage Ambre Noir",
    category: "Bien-être & Massage",
    price: 35.00,
    description: "Une huile de massage somptueuse aux effluves chaleureux d'ambre pour des moments de détente absolue.",
    details: [
      "Texture non grasse et glissante",
      "Notes boisées et ambrées",
      "Flacon de 150ml avec bouchon doseur"
    ],
    image: "assets/images/product-153.jpg",
    alt: "Huile de Massage Ambre Noir",
    seoTitle: "Huile de Massage Ambre Noir - Bien-être | L'Extase des Sens",
    metaDescription: "Profitez d'un moment de détente absolue avec l'Huile de Massage Ambre Noir aux notes chaleureuses."
  },
  {
    id: "art-140",
    name: "Masque Vénitien Dentelle",
    category: "Jeux & Accessoires",
    price: 24.00,
    description: "Ajoutez une touche de mystère et de séduction à vos soirées avec ce masque en dentelle fine.",
    details: [
      "Dentelle noire délicatement ajourée",
      "Attaches en ruban satiné",
      "Confortable et léger à porter"
    ],
    image: "assets/images/product-140.jpg",
    alt: "Masque Vénitien Dentelle",
    seoTitle: "Masque Vénitien Dentelle - Jeux & Accessoires | L'Extase des Sens",
    metaDescription: "Apportez mystère et séduction à vos soirées avec ce masque vénitien en dentelle fine."
  },
  {
    id: "art-148",
    name: "Bougie de Massage Cire Gourmande",
    category: "Bien-être & Massage",
    price: 26.00,
    description: "Une bougie parfumée qui se transforme en une huile tiède et onctueuse une fois allumée.",
    details: [
      "Cire végétale naturelle",
      "Température de fusion basse et sécurisée",
      "Parfum vanille et bois de santal"
    ],
    image: "assets/images/product-148.jpg",
    alt: "Bougie de Massage Cire Gourmande",
    seoTitle: "Bougie de Massage Cire Gourmande | L'Extase des Sens",
    metaDescription: "Laissez-vous tenter par la Bougie de Massage Cire Gourmande pour des massages sensuels et chaleureux."
  },
  {
    id: "art-142",
    name: "Menottes Douces en Soie",
    category: "Jeux & Accessoires",
    price: 22.00,
    description: "Explorez de nouvelles sensations en toute délicatesse grâce à ces menottes gainées de soie.",
    details: [
      "Doublure ultra-douce pour la peau",
      "Système d'attache rapide et sécurisé",
      "Design élégant et discret"
    ],
    image: "assets/images/product-142.jpg",
    alt: "Menottes Douces en Soie",
    seoTitle: "Menottes Douces en Soie - Accessoires | L'Extase des Sens",
    metaDescription: "Explorez de nouvelles sensations avec ces menottes douces en soie, alliant confort et élégance."
  },
  {
    id: "art-151",
    name: "Coffret Plaisir Partagé",
    category: "Coffrets",
    price: 89.00,
    description: "Un ensemble complet pensé pour pimenter l'intimité et multiplier les découvertes à deux.",
    details: [
      "Assortiment de produits haut de gamme",
      "Présentation soignée en coffret cadeau",
      "Idéal pour offrir ou se faire plaisir"
    ],
    image: "assets/images/product-151.jpg",
    alt: "Coffret Plaisir Partagé",
    seoTitle: "Coffret Plaisir Partagé - Coffrets Cadeaux | L'Extase des Sens",
    metaDescription: "Découvrez le Coffret Plaisir Partagé, un ensemble complet pour pimenter votre intimité à deux."
  },
  {
    id: "art-150",
    name: "Plumeau de Sensation Céleste",
    category: "Jeux & Accessoires",
    price: 19.00,
    description: "Un accessoire léger et aérien pour caresser la peau et éveiller les zones érogènes.",
    details: [
      "Fibres douces et soyeuses",
      "Manche ergonomique en bois vernis",
      "Sensations de frissons garanties"
    ],
    image: "assets/images/product-150.jpg",
    alt: "Plumeau de Sensation Céleste",
    seoTitle: "Plumeau de Sensation Céleste - Accessoires | L'Extase des Sens",
    metaDescription: "Éveillez vos sens avec le Plumeau de Sensation Céleste pour des caresses douces et aériennes."
  },
  {
    id: "art-147",
    name: "Gel Stimulant Intense",
    category: "Cosmétiques & Soins",
    price: 25.00,
    description: "Un gel formulé pour intensifier les sensations et stimuler l'afflux sanguin en douceur.",
    details: [
      "Action rapide et ciblée",
      "Compatible avec les accessoires",
      "Tube nomade de 50ml"
    ],
    image: "assets/images/product-147.jpg",
    alt: "Gel Stimulant Intense",
    seoTitle: "Gel Stimulant Intense - Cosmétiques | L'Extase des Sens",
    metaDescription: "Intensifiez vos moments de plaisir avec le Gel Stimulant Intense à l'action rapide et ciblée."
  },
  {
    id: "art-165",
    name: "String Ouvert Dentelle Fine",
    category: "Lingerie & Accessoires",
    price: 28.00,
    description: "Un sous-vêtement audacieux et raffiné, confectionné dans une dentelle délicatement ciselée.",
    details: [
      "Coupe sensuelle et minimaliste",
      "Élastiques confortables qui ne marquent pas",
      "Finitions haut de gamme"
    ],
    image: "assets/images/product-165.jpg",
    alt: "String Ouvert Dentelle Fine",
    seoTitle: "String Ouvert Dentelle Fine - Lingerie | L'Extase des Sens",
    metaDescription: "Succombez au charme de ce string ouvert en dentelle fine, à la fois audacieux et raffiné."
  },
  {
    id: "art-159",
    name: "Bandeau de Privation Satin",
    category: "Jeux & Accessoires",
    price: 18.00,
    description: "Laissez place à l'imagination et aiguisez vos autres sens avec ce bandeau occultant en satin.",
    details: [
      "Satin doux et agréable sur les yeux",
      "Lien ajustable pour un maintien parfait",
      "Occultation totale"
    ],
    image: "assets/images/product-159.jpg",
    alt: "Bandeau de Privation Satin",
    seoTitle: "Bandeau de Privation Satin - Accessoires | L'Extase des Sens",
    metaDescription: "Aiguisez vos sens avec le bandeau de privation en satin doux et entièrement occultant."
  },
  {
    id: "art-158",
    name: "Sérum Aphrodisiaque Floral",
    category: "Cosmétiques & Soins",
    price: 32.00,
    description: "Un élixir précieux aux extraits de plantes reconnues pour stimuler le désir et le bien-être.",
    details: [
      "Formule naturelle concentrée",
      "Parfum floral enivrant",
      "Pipette compte-gouttes pratique"
    ],
    image: "assets/images/product-158.jpg",
    alt: "Sérum Aphrodisiaque Floral",
    seoTitle: "Sérum Aphrodisiaque Floral - Cosmétiques | L'Extase des Sens",
    metaDescription: "Stimulez votre désir avec le sérum aphrodisiaque floral aux extraits de plantes naturelles."
  },
  {
    id: "art-156",
    name: "Kimono Transparent Nocturne",
    category: "Lingerie & Accessoires",
    price: 65.00,
    description: "Un vêtement d'intérieur vaporeux qui laisse deviner la silhouette avec élégance et mystère.",
    details: [
      "Voile léger effet mousseline",
      "Ceinture à nouer incluse",
      "Taille unique élégante et fluide"
    ],
    image: "assets/images/product-156.jpg",
    alt: "Kimono Transparent Nocturne",
    seoTitle: "Kimono Transparent Nocturne - Lingerie | L'Extase des Sens",
    metaDescription: "enveloppez-vous de mystère avec le Kimono Transparent Nocturne en voile léger."
  },
  {
    id: "art-155",
    name: "Cravache de Sagesse Cuir Souple",
    category: "Jeux & Accessoires",
    price: 34.00,
    description: "Pour des jeux de domination maîtrisés, alliant esthétisme et souplesse d'utilisation.",
    details: [
      "Cuir véritable souple et résistant",
      "Poignée tressée ergonomique",
      "Lanière de poignet de sécurité"
    ],
    image: "assets/images/product-155.jpg",
    alt: "Cravache de Sagesse Cuir Souple",
    seoTitle: "Cravache de Sagesse Cuir Souple - Accessoires | L'Extase des Sens",
    metaDescription: "Maîtrisez vos jeux de rôle avec la cravache de sagesse en cuir véritable souple et résistant."
  },
  {
    id: "art-154",
    name: "Lubrifiant Sensuel Acide Hyaluronique",
    category: "Cosmétiques & Soins",
    price: 27.00,
    description: "Une formule haut de gamme enrichie en acide hyaluronique pour une hydratation longue durée.",
    details: [
      "Effet glissant longue durée",
      "Hydrate et respecte les muqueuses",
      "Base aqueuse compatible accessoires"
    ],
    image: "assets/images/product-154.jpg",
    alt: "Lubrifiant Sensuel Acide Hyaluronique",
    seoTitle: "Lubrifiant Acide Hyaluronique - Cosmétiques | L'Extase des Sens",
    metaDescription: "Profitez d'un confort optimal avec le lubrifiant sensuel enrichi en acide hyaluronique."
  },
  {
    id: "art-152",
    name: "Body Découpé Fusion",
    category: "Lingerie & Accessoires",
    price: 52.00,
    description: "Un body aux lignes audacieuses qui épouse les formes pour un effet visuel saisissant.",
    details: [
      "Matière extensible confortable",
      "Découpes géométriques flatteuses",
      "Maintien irréprochable"
    ],
    image: "assets/images/product-152.jpg",
    alt: "Body Découpé Fusion",
    seoTitle: "Body Découpé Fusion - Lingerie | L'Extase des Sens",
    metaDescription: "Mettez vos formes en valeur avec le body découpé Fusion aux lignes audacieuses."
  },
  {
    id: "art-149",
    name: "Cocktail de Poudre Scintillante",
    category: "Cosmétiques & Soins",
    price: 31.00,
    description: "Une poudre corporelle pailletée délicatement parfumée pour illuminer la peau lors des soirées intimes.",
    details: [
      "Reflets nacrés subtils",
      "Touche de parfum irrésistible",
      "Application douce avec houppette incluse"
    ],
    image: "assets/images/product-149.jpg",
    alt: "Cocktail de Poudre Scintillante",
    seoTitle: "Poudre Scintillante - Cosmétiques | L'Extase des Sens",
    metaDescription: "Illumine votre peau avec la poudre corporelle scintillante et délicatement parfumée."
  },
  {
    id: "art-167",
    name: "Plug Bijou Cristal",
    category: "Jeux & Accessoires",
    price: 39.00,
    description: "Un objet d'apparat étincelant combinant plaisir anal et raffinement visuel.",
    details: [
      "Base en acier inoxydable hypoallergénique",
      "Cristal étincelant à la base",
      "Forme ergonomique pour insertion facile"
    ],
    image: "assets/images/product-167.jpg",
    alt: "Plug Bijou Cristal",
    seoTitle: "Plug Bijou Cristal - Jeux & Accessoires | L'Extase des Sens",
    metaDescription: "Alliez plaisir et esthétisme avec le plug anal bijou surmonté d'un cristal étincelant."
  },
  {
    id: "art-166",
    name: "Oeuf de Geisha Connecté",
    category: "Jeux & Accessoires",
    price: 59.00,
    description: "Musclez votre périnée tout en stimulant vos sens grâce aux vibrations contrôlées à distance.",
    details: [
      "Silicone médical soyeux",
      "Contrôle par application mobile",
      "Plusieurs modes de vibration discrets"
    ],
    image: "assets/images/product-166.jpg",
    alt: "Oeuf de Geisha Connecté",
    seoTitle: "Oeuf de Geisha Connecté - Accessoires | L'Extase des Sens",
    metaDescription: "Découvrez l'œuf de geisha connecté pour tonifier votre périnée avec des vibrations contrôlées."
  },
  {
    id: "art-164",
    name: "Ensemble Jarretelles Velours",
    category: "Lingerie & Accessoires",
    price: 55.00,
    description: "Un ensemble de jarretelles en velours stretch pour un look rétro et follement sensuel.",
    details: [
      "Velours doux et extensible",
      "Attaches métalliques robustes",
      "S'associe parfaitement avec vos bas"
    ],
    image: "assets/images/product-164.jpg",
    alt: "Ensemble Jarretelles Velours",
    seoTitle: "Ensemble Jarretelles Velours - Lingerie | L'Extase des Sens",
    metaDescription: "Craquez pour cet ensemble de jarretelles en velours stretch au style rétro et sensuel."
  },
  {
    id: "art-163",
    name: "Vibreur Wand Rose Pur",
    category: "Jeux & Accessoires",
    price: 69.00,
    description: "Un masseur intime puissant doté de multiples vitesses pour des vagues de plaisir intenses.",
    details: [
      "Moteur puissant et silencieux",
      "Tête souple en silicone velouté",
      "Rechargeable par USB"
    ],
    image: "assets/images/product-163.jpg",
    alt: "Vibreur Wand Rose Pur",
    seoTitle: "Vibreur Wand Rose Pur - Accessoires | L'Extase des Sens",
    metaDescription: "Offrez-vous des vagues de plaisir intense avec le vibreur Wand puissant et silencieux."
  },
  {
    id: "art-162",
    name: "Gant de Caresse Exquis",
    category: "Jeux & Accessoires",
    price: 15.00,
    description: "Un gant texturé conçu pour amplifier chaque effleurement et décupler les sensations tactiles.",
    details: [
      "Matière extensible adaptée à toutes les mains",
      "Texturations variées sur les doigts et la paume",
      "Lavable et réutilisable"
    ],
    image: "assets/images/product-162.jpg",
    alt: "Gant de Caresse Exquis",
    seoTitle: "Gant de Caresse Exquis - Accessoires | L'Extase des Sens",
    metaDescription: "Décuplez vos sensations tactiles avec le gant de caresse texturé et agréable."
  },
  {
    id: "art-161",
    name: "Huile Chauffante Vanille Gourmande",
    category: "Bien-être & Massage",
    price: 28.00,
    description: "Une huile qui chauffe délicatement au contact de la peau et sous l'effet du souffle.",
    details: [
      "Effet thermique activé par le souffle",
      "Délicieuse saveur vanillée",
      "Flacon de 100ml"
    ],
    image: "assets/images/product-161.jpg",
    alt: "Huile Chauffante Vanille Gourmande",
    seoTitle: "Huile Chauffante Vanille Gourmande | L'Extase des Sens",
    metaDescription: "Éveillez vos sens avec l'huile chauffante à la vanille activée par le souffle."
  },
  {
    id: "art-160",
    name: "Collier de Soumission Cuir & Chaîne",
    category: "Jeux & Accessoires",
    price: 29.00,
    description: "Un bijou de caractère pour affirmer ses envies et explorer les jeux de rôle en toute élégance.",
    details: [
      "Cuir noir mat et anneau en métal argenté",
      "Boucle de réglage sécurisée",
      "Confortable à porter"
    ],
    image: "assets/images/product-160.jpg",
    alt: "Collier de Soumission Cuir & Chaîne",
    seoTitle: "Collier de Soumission Cuir - Accessoires | L'Extase des Sens",
    metaDescription: "Affirmez vos envies avec ce collier de soumission en cuir mat et anneau argenté."
  },
  {
    id: "art-157",
    name: "Sels de Bain Aphrodisiaques Pétillants",
    category: "Bien-être & Massage",
    price: 21.00,
    description: "Plongez dans un bain relaxant aux cristaux parfumés pour préparer l'esprit et le corps à l'intimité.",
    details: [
      "Sels minéraux naturels et huiles essentielles",
      "Effet légèrement effervescent",
      "Sachet refermable de 400g"
    ],
    image: "assets/images/product-157.jpg",
    alt: "Sels de Bain Aphrodisiaques Pétillants",
    seoTitle: "Sels de Bain Aphrodisiaques - Bien-être | L'Extase des Sens",
    metaDescription: "Détendez-vous dans un bain relaxant aux sels minéraux et huiles essentielles aphrodisiaques."
  },
  {
    id: "art-146",
    name: "Jeu de Cartes 'Confessions Intimes'",
    category: "Jeux & Accessoires",
    price: 20.00,
    description: "Brisez la glace et brisez les tabous grâce à des questions coquines et des gages audacieux.",
    details: [
      "Plus de 100 cartes de défis et questions",
      "Plusieurs niveaux d'intensité",
      "Format compact idéal pour emporter partout"
    ],
    image: "assets/images/product-146.jpg",
    alt: "Jeu de Cartes Confessions Intimes",
    seoTitle: "Jeu de Cartes Confessions Intimes - Jeux | L'Extase des Sens",
    metaDescription: "Brisez la glace avec le jeu de cartes Confessions Intimes aux questions et gages coquins."
  },
  {
    id: "art-143",
    name: "Sangle de Maintien Ajustable",
    category: "Jeux & Accessoires",
    price: 45.00,
    description: "Un accessoire modulable et robuste pour diversifier les positions et intensifier l'abandon.",
    details: [
      "Sangles solides et réglables",
      "Boucles d'attache sécurisées",
      "Installation facile et discrète"
    ],
    image: "assets/images/product-143.jpg",
    alt: "Sangle de Maintien Ajustable",
    seoTitle: "Sangle de Maintien Ajustable - Accessoires | L'Extase des Sens",
    metaDescription: "Diversifiez vos positions avec la sangle de maintien ajustable robuste et sécurisée."
  }
];

// Gestion du panier (localStorage)
function getCart() {
  try {
    const cart = localStorage.getItem('lextase_cart');
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem('lextase_cart', JSON.stringify(cart));
    updateCartCount();
  } catch (e) {}
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }
  saveCart(cart);
  showToast("Produit ajouté au panier avec succès !");
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage();
}

function updateQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = parseInt(quantity, 10);
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart(cart);
    renderCartPage();
  }
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function euro(amount) {
  return amount.toFixed(2).replace('.', ',') + ' €';
}

// Rendu des pages
function renderHomePage() {
  const grid = document.querySelector('[data-featured-products]');
  if (!grid) return;
  const featured = products.slice(0, 4);
  grid.innerHTML = featured.map((product, index) => `
    <div class="product-card" onclick="location.href='produit.html?id=${product.id}'">
      <div class="product-card-img product-art-${index % 4}">
        ${product.image ? `<img src="${product.image}" alt="${product.alt || product.name}">` : ''}
      </div>
      <div class="product-card-content">
        <span class="eyebrow">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="price">${euro(product.price)}</p>
        <button class="button button-outline" onclick="event.stopPropagation(); addToCart('${product.id}')">Ajouter</button>
      </div>
    </div>
  `).join('');
}

function renderBoutiquePage() {
  const grid = document.querySelector('[data-boutique-grid]');
  if (!grid) return;
  
  const categoryFilter = document.querySelector('[data-category-filter]');
  const searchInput = document.querySelector('[data-search-input]');
  
  function displayProducts() {
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    const filtered = products.filter(product => {
      const matchCat = selectedCategory === 'all' || product.category === selectedCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });
    
    if (filtered.length === 0) {
      grid.innerHTML = `<p class="no-products">Aucun produit ne correspond à votre recherche.</p>`;
      return;
    }
    
    grid.innerHTML = filtered.map((product, index) => `
      <div class="product-card" onclick="location.href='produit.html?id=${product.id}'">
        <div class="product-card-img product-art-${index % 4}">
          ${product.image ? `<img src="${product.image}" alt="${product.alt || product.name}">` : ''}
        </div>
        <div class="product-card-content">
          <span class="eyebrow">${product.category}</span>
          <h3>${product.name}</h3>
          <p class="price">${euro(product.price)}</p>
          <button class="button button-outline" onclick="event.stopPropagation(); addToCart('${product.id}')">Ajouter</button>
        </div>
      </div>
    `).join('');
  }
  
  if (categoryFilter) categoryFilter.addEventListener('change', displayProducts);
  if (searchInput) searchInput.addEventListener('input', displayProducts);
  
  displayProducts();
}

function renderProduct() {
  const target = document.querySelector('[data-product-page]');
  if (!target) return;
  const product = products.find(item => item.id === new URLSearchParams(location.search).get('id')) || products[0];
  
  const baseUrl = "https://loverilx.github.io/lextasedessens/";
  const currentCanonicalUrl = `${baseUrl}produit.html?id=${product.id}`;
  const productImageFull = product.image ? (product.image.startsWith('http') ? product.image : baseUrl + product.image.replace(/^\/+/, '')) : '';
  
  if (product.seoTitle) {
    document.title = product.seoTitle;
  }
  
  if (product.metaDescription) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = product.metaDescription;
  }

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = currentCanonicalUrl;

  const ogMetaTags = [
    { property: 'og:title', content: product.seoTitle || product.name },
    { property: 'og:description', content: product.metaDescription || product.description },
    { property: 'og:image', content: productImageFull },
    { property: 'og:url', content: currentCanonicalUrl },
    { property: 'og:type', content: 'product' }
  ];

  ogMetaTags.forEach(tagData => {
    let tag = document.querySelector(`meta[property="${tagData.property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', tagData.property);
      document.head.appendChild(tag);
    }
    tag.content = tagData.content;
  });

  const twitterMetaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: product.seoTitle || product.name },
    { name: 'twitter:description', content: product.metaDescription || product.description },
    { name: 'twitter:image', content: productImageFull }
  ];

  twitterMetaTags.forEach(tagData => {
    let tag = document.querySelector(`meta[name="${tagData.name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', tagData.name);
      document.head.appendChild(tag);
    }
    tag.content = tagData.content;
  });

  let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-product-schema]');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.setAttribute('data-product-schema', 'true');
    document.head.appendChild(jsonLdScript);
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": productImageFull ? [productImageFull] : [],
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": currentCanonicalUrl,
      "priceCurrency": "EUR",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock"
    }
  };
  jsonLdScript.textContent = JSON.stringify(productSchema);

  const imageAlt = product.alt || product.name;
  const image = product.image ? `<img src="${product.image}" alt="${imageAlt}">` : '';
  
  target.innerHTML = `<div class="product-detail-art product-art-${products.indexOf(product) % 4}">${image}</div><div class="product-detail-info"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p class="detail-price">${euro(product.price)}</p><p class="detail-description">${product.description}</p><ul>${product.details.map(detail => `<li>${detail}</li>`).join('')}</ul><button class="button button-dark" data-add-cart="${product.id}">Ajouter au panier <span>→</span></button><p class="detail-note">Expédition discrète · Frais de port fixes de 6,00 € · Paiement sécurisé via PayPal.Me.</p></div>`;
  bindButtons();
}

function renderCartPage() {
  const container = document.querySelector('[data-cart-container]');
  if (!container) return;
  
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h2>Votre panier est vide</h2>
        <p>Découvrez notre collection et laissez-vous tenter par nos produits.</p>
        <a href="boutique.html" class="button button-dark">Explorer la boutique</a>
      </div>
    `;
    return;
  }
  
  let subtotal = 0;
  const shippingFee = 6.00;
  
  const itemsHtml = cart.map(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return '';
    const itemTotal = product.price * cartItem.quantity;
    subtotal += itemTotal;
    
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          ${product.image ? `<img src="${product.image}" alt="${product.alt || product.name}">` : ''}
        </div>
        <div class="cart-item-details">
          <h4>${product.name}</h4>
          <p class="price">${euro(product.price)}</p>
        </div>
        <div class="cart-item-actions">
          <input type="number" min="1" value="${cartItem.quantity}" onchange="updateQuantity('${product.id}', this.value)">
          <button class="remove-btn" onclick="removeFromCart('${product.id}')">Supprimer</button>
        </div>
      </div>
    `;
  }).join('');
  
  const total = subtotal + shippingFee;
  
  container.innerHTML = `
    <div class="cart-grid">
      <div class="cart-items-list">${itemsHtml}</div>
      <div class="cart-summary">
        <h3>Résumé de la commande</h3>
        <div class="summary-line"><span>Sous-total</span><span>${euro(subtotal)}</span></div>
        <div class="summary-line"><span>Frais de port (fixes)</span><span>${euro(shippingFee)}</span></div>
        <div class="summary-line total"><span>Total</span><span>${euro(total)}</span></div>
        <a href="https://paypal.me/votrecompte/${total.toFixed(2)}EUR" target="_blank" class="button button-dark" style="width:100%; text-align:center; margin-top:20px; display:block;">Payer via PayPal.Me</a>
        <p class="summary-note">Paiement sécurisé. Expédition ultra-discrète sous 24h.</p>
      </div>
    </div>
  `;
}

function bindButtons() {
  document.querySelectorAll('[data-add-cart]').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-add-cart');
      addToCart(productId);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderHomePage();
  renderBoutiquePage();
  renderProduct();
  renderCartPage();
  bindButtons();
});