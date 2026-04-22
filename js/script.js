"use strict";

// ============================================
// DONNÉES — source unique de vérité
// ============================================

const livres = [
  {
    id: 1,
    titre: "Une brève histoire du temps",
    auteur: "Stephen Hawking",
    annee: 1988,
    domaine: "Astrophysique",
    note: 9.1,
    pages: 212,
    lu: true,
  },
  {
    id: 2,
    titre: "Le Gène égoïste",
    auteur: "Richard Dawkins",
    annee: 1976,
    domaine: "Évolution",
    note: 8.8,
    pages: 360,
    lu: false,
  },
  {
    id: 3,
    titre: "Cosmos",
    auteur: "Carl Sagan",
    annee: 1980,
    domaine: "Astrophysique",
    note: 9.4,
    pages: 365,
    lu: true,
  },
  {
    id: 4,
    titre: "Le Théorème de Fermat",
    auteur: "Simon Singh",
    annee: 1997,
    domaine: "Mathématiques",
    note: 8.5,
    pages: 362,
    lu: false,
  },
  {
    id: 5,
    titre: "The Body",
    auteur: "Bill Bryson",
    annee: 2019,
    domaine: "Biologie",
    note: 8.7,
    pages: 448,
    lu: true,
  },
  {
    id: 6,
    titre: "Le Cerveau qui se réinvente",
    auteur: "Michael Merzenich",
    annee: 2013,
    domaine: "Neurosciences",
    note: 8.2,
    pages: 288,
    lu: false,
  },
  {
    id: 7,
    titre: "La Logique du vivant",
    auteur: "François Jacob",
    annee: 1970,
    domaine: "Biologie",
    note: 8.6,
    pages: 354,
    lu: true,
  },
  {
    id: 8,
    titre: "Le Hasard et la Nécessité",
    auteur: "Jacques Monod",
    annee: 1970,
    domaine: "Chimie",
    note: 8.3,
    pages: 224,
    lu: false,
  },
  {
    id: 9,
    titre: "The Elegant Universe",
    auteur: "Brian Greene",
    annee: 1999,
    domaine: "Physique",
    note: 8.9,
    pages: 448,
    lu: true,
  },
  {
    id: 10,
    titre: "L'Univers à portée de main",
    auteur: "Christophe Galfard",
    annee: 2015,
    domaine: "Astrophysique",
    note: 9.0,
    pages: 480,
    lu: true,
  },
  {
    id: 11,
    titre: "Sapiens",
    auteur: "Yuval Noah Harari",
    annee: 2011,
    domaine: "Évolution",
    note: 9.2,
    pages: 443,
    lu: false,
  },
  {
    id: 12,
    titre: "The Order of Time",
    auteur: "Carlo Rovelli",
    annee: 2017,
    domaine: "Physique",
    note: 8.8,
    pages: 224,
    lu: true,
  },
  {
    id: 13,
    titre: "Probabilities",
    auteur: "Peter Olofsson",
    annee: 2005,
    domaine: "Mathématiques",
    note: 7.9,
    pages: 320,
    lu: false,
  },
  {
    id: 14,
    titre: "Le Monde s'est fait en un jour",
    auteur: "Jean-Claude Ameisen",
    annee: 2014,
    domaine: "Biologie",
    note: 8.4,
    pages: 272,
    lu: false,
  },
  {
    id: 15,
    titre: "Incognito",
    auteur: "David Eagleman",
    annee: 2011,
    domaine: "Neurosciences",
    note: 8.9,
    pages: 290,
    lu: true,
  },
  {
    id: 16,
    titre: "A Brief History of Everything",
    auteur: "Ken Wilber",
    annee: 1996,
    domaine: "Physique",
    note: 8.1,
    pages: 330,
    lu: false,
  },
  {
    id: 17,
    titre: "La Vie secrète des arbres",
    auteur: "Peter Wohlleben",
    annee: 2015,
    domaine: "Biologie",
    note: 8.6,
    pages: 272,
    lu: true,
  },
  {
    id: 18,
    titre: "Seven Brief Lessons on Physics",
    auteur: "Carlo Rovelli",
    annee: 2014,
    domaine: "Physique",
    note: 9.0,
    pages: 96,
    lu: true,
  },
  {
    id: 19,
    titre: "L'ADN, cette inconnue",
    auteur: "Jérôme Cosson",
    annee: 2017,
    domaine: "Biologie",
    note: 7.8,
    pages: 215,
    lu: false,
  },
  {
    id: 20,
    titre: "Thinking, Fast and Slow",
    auteur: "Daniel Kahneman",
    annee: 2011,
    domaine: "Neurosciences",
    note: 9.3,
    pages: 499,
    lu: true,
  },
  {
    id: 21,
    titre: "The Selfish Gene",
    auteur: "Richard Dawkins",
    annee: 1976,
    domaine: "Évolution",
    note: 9.0,
    pages: 360,
    lu: false,
  },
  {
    id: 22,
    titre: "Astrophysics for People in a Hurry",
    auteur: "Neil deGrasse Tyson",
    annee: 2017,
    domaine: "Astrophysique",
    note: 8.4,
    pages: 222,
    lu: true,
  },
  {
    id: 23,
    titre: "La Formule du savoir",
    auteur: "Lê Nguyên Hoang",
    annee: 2018,
    domaine: "Mathématiques",
    note: 8.7,
    pages: 312,
    lu: false,
  },
  {
    id: 24,
    titre: "The Hidden Life of Trees",
    auteur: "Peter Wohlleben",
    annee: 2016,
    domaine: "Biologie",
    note: 8.5,
    pages: 288,
    lu: true,
  },
  {
    id: 25,
    titre: "Pourquoi le monde va mieux",
    auteur: "Johan Norberg",
    annee: 2016,
    domaine: "Évolution",
    note: 7.9,
    pages: 248,
    lu: false,
  },
  {
    id: 26,
    titre: "The Code Book",
    auteur: "Simon Singh",
    annee: 1999,
    domaine: "Mathématiques",
    note: 8.8,
    pages: 402,
    lu: true,
  },
  {
    id: 27,
    titre: "Behave",
    auteur: "Robert Sapolsky",
    annee: 2017,
    domaine: "Neurosciences",
    note: 9.1,
    pages: 790,
    lu: false,
  },
  {
    id: 28,
    titre: "La Chimie des émotions",
    auteur: "Florian Ferreri",
    annee: 2019,
    domaine: "Chimie",
    note: 7.6,
    pages: 190,
    lu: false,
  },
  {
    id: 29,
    titre: "Dark Matter and the Dinosaurs",
    auteur: "Lisa Randall",
    annee: 2015,
    domaine: "Astrophysique",
    note: 8.3,
    pages: 412,
    lu: true,
  },
  {
    id: 30,
    titre: "Le Temps et sa flèche",
    auteur: "Étienne Klein",
    annee: 2013,
    domaine: "Physique",
    note: 8.0,
    pages: 186,
    lu: false,
  },
];

// ============================================
// ÉTAT
// ============================================

const state = {
  livres: [...livres],
};

// ============================================
// DOM
// ============================================

const elements = {
  listContainer: document.querySelector("#list"),
  bookCount: document.querySelector("#book-count"),
  searchInput: document.querySelector("#search"),
  filterDomaine: document.querySelector("#filter-domaine"),
  sortSelect: document.querySelector("#sort"),
  formAjout: document.querySelector("#form-ajout"),
  inputTitre: document.querySelector("#input-titre"),
  inputAuteur: document.querySelector("#input-auteur"),
  inputAnnee: document.querySelector("#input-annee"),
  inputDomaine: document.querySelector("#input-domaine"),
  inputNote: document.querySelector("#input-note"),
  inputPages: document.querySelector("#input-pages"),
  inputLu: document.querySelector("#input-lu"),
};

const errorElements = {
  titre: document.querySelector("#error-titre"),
  auteur: document.querySelector("#error-auteur"),
  annee: document.querySelector("#error-annee"),
  domaine: document.querySelector("#error-domaine"),
  note: document.querySelector("#error-note"),
  pages: document.querySelector("#error-pages"),
};

// ============================================
// OUTILS
// ============================================

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatStars(note) {
  const noteArrondie = Math.round(note);
  return `${"★".repeat(noteArrondie)}${"☆".repeat(10 - noteArrondie)}`;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function generateId() {
  const ids = state.livres.map((livre) => livre.id);
  return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}

// Associe chaque domaine à une palette de couleurs
// Un objet JS utilisé comme dictionnaire : clé = domaine, valeur = couleurs
function getDomainColors(domaine) {
  const palettes = {
    Astrophysique: { from: "#0f0c29", to: "#302b63", accent: "#a78bfa" },
    Physique: { from: "#0a0e27", to: "#1a1a6e", accent: "#60a5fa" },
    Biologie: { from: "#0a2a1a", to: "#064e3b", accent: "#34d399" },
    Évolution: { from: "#0a1f0a", to: "#14532d", accent: "#86efac" },
    Mathématiques: { from: "#1a0a2e", to: "#4c1d95", accent: "#c084fc" },
    Neurosciences: { from: "#2a0a0a", to: "#7f1d1d", accent: "#f87171" },
    Chimie: { from: "#1a1a0a", to: "#713f12", accent: "#fbbf24" },
  };

  // Si le domaine n'est pas dans la liste → couleur par défaut
  return (
    palettes[domaine] || { from: "#1a1a2e", to: "#16213e", accent: "#00d4ff" }
  );
}

// Génère les initiales du titre pour la couverture
// Ignore les petits mots peu utiles comme "le", "de", "du", "et"
function getInitiales(titre) {
  const motsIgnorer = [
    "de",
    "du",
    "des",
    "la",
    "le",
    "les",
    "un",
    "une",
    "et",
    "à",
    "au",
    "aux",
  ];

  return titre
    .split(" ")
    .map((mot) => mot.trim())
    .filter((mot) => mot && !motsIgnorer.includes(mot.toLowerCase()))
    .slice(0, 2)
    .map((mot) => mot[0].toUpperCase())
    .join("");
}

// ============================================
// RENDU
// ============================================

function createBookCardHtml(livre) {
  // Récupère la palette de couleurs selon le domaine
  const couleurs = getDomainColors(livre.domaine);
  const initiales = getInitiales(livre.titre);

  return `
    <div class="book-card">

      <div class="book-cover" style="
        background: linear-gradient(135deg, ${couleurs.from} 0%, ${couleurs.to} 100%);
        border-bottom: 3px solid ${couleurs.accent};
      ">
        <span class="book-cover-initiales" style="color: ${couleurs.accent}">
          ${initiales}
        </span>
        <span class="book-cover-domaine" style="color: ${couleurs.accent}">
          ${escapeHtml(livre.domaine)}
        </span>
      </div>

      <div class="book-titre">${escapeHtml(livre.titre)}</div>
      <div class="book-auteur">${escapeHtml(livre.auteur)}</div>

      <div class="book-meta">
        <span class="badge badge--domaine">${escapeHtml(livre.domaine)}</span>
        <span class="badge badge--annee">${livre.annee}</span>
        <span class="badge ${livre.lu ? "badge--lu" : "badge--nonlu"}">
          ${livre.lu ? "✓ Lu" : "À lire"}
        </span>
      </div>

      <div class="book-note">
        ${formatStars(livre.note)}
        <span style="color: var(--text-secondary)">${livre.note}/10</span>
      </div>

      <div class="book-pages">${livre.pages} pages</div>

      <div class="book-actions">
        <button class="btn btn--danger" data-id="${livre.id}">
          🗑 Supprimer
        </button>
      </div>
    </div>
  `;
}

function afficherLivres(tableau) {
  elements.bookCount.textContent = `${tableau.length} livre${tableau.length > 1 ? "s" : ""}`;

  if (tableau.length === 0) {
    elements.listContainer.innerHTML = `<p class="empty-msg">Aucun livre trouvé.</p>`;
    return;
  }

  const html = tableau.map(createBookCardHtml).join("");
  elements.listContainer.innerHTML = html;
}

// ============================================
// FILTRE + TRI
// ============================================

function getLivresFiltres() {
  const recherche = elements.searchInput.value.trim().toLowerCase();
  const domaine = elements.filterDomaine.value;
  const tri = elements.sortSelect.value;

  const resultat = state.livres
    .filter((livre) => {
      const matchRecherche =
        livre.titre.toLowerCase().includes(recherche) ||
        livre.auteur.toLowerCase().includes(recherche);

      const matchDomaine = domaine === "" || livre.domaine === domaine;

      return matchRecherche && matchDomaine;
    })
    .sort((a, b) => {
      switch (tri) {
        case "titre":
          return a.titre.localeCompare(b.titre);
        case "annee":
          return a.annee - b.annee;
        case "note":
          return b.note - a.note;
        case "pages":
          return a.pages - b.pages;
        default:
          return 0;
      }
    });

  return resultat;
}

function render() {
  afficherLivres(getLivresFiltres());
}

// ============================================
// VALIDATION
// ============================================

function resetErrors() {
  Object.values(errorElements).forEach((element) => {
    element.textContent = "";
  });
}

function validateForm(data) {
  const errors = {};
  const currentYear = getCurrentYear();

  if (data.titre === "") {
    errors.titre = "Le titre est obligatoire.";
  }

  if (data.auteur === "") {
    errors.auteur = "L'auteur est obligatoire.";
  }

  if (
    Number.isNaN(data.annee) ||
    data.annee < 1800 ||
    data.annee > currentYear
  ) {
    errors.annee = `Année entre 1800 et ${currentYear}.`;
  }

  if (data.domaine === "") {
    errors.domaine = "Choisissez un domaine.";
  }

  if (Number.isNaN(data.note) || data.note < 0 || data.note > 10) {
    errors.note = "Note entre 0 et 10.";
  }

  if (Number.isNaN(data.pages) || data.pages < 1) {
    errors.pages = "Nombre de pages invalide.";
  }

  return errors;
}

function showErrors(errors) {
  Object.entries(errors).forEach(([key, message]) => {
    if (errorElements[key]) {
      errorElements[key].textContent = message;
    }
  });
}

// ============================================
// ACTIONS
// ============================================

function supprimerLivre(id) {
  state.livres = state.livres.filter((livre) => livre.id !== id);
  render();
}

function ajouterLivre(data) {
  const nouveauLivre = {
    id: generateId(),
    titre: data.titre,
    auteur: data.auteur,
    annee: data.annee,
    domaine: data.domaine,
    note: data.note,
    pages: data.pages,
    lu: data.lu,
  };

  state.livres.push(nouveauLivre);
  elements.formAjout.reset();
  render();
}

// ============================================
// ÉVÉNEMENTS
// ============================================

elements.searchInput.addEventListener("input", render);
elements.filterDomaine.addEventListener("change", render);
elements.sortSelect.addEventListener("change", render);

elements.listContainer.addEventListener("click", (event) => {
  const bouton = event.target.closest(".btn--danger");
  if (!bouton) return;

  const id = Number.parseInt(bouton.dataset.id, 10);
  if (Number.isNaN(id)) return;

  if (!confirm("Supprimer ce livre ?")) return;

  supprimerLivre(id);
});

elements.formAjout.addEventListener("submit", (event) => {
  event.preventDefault();

  resetErrors();

  const formData = {
    titre: elements.inputTitre.value.trim(),
    auteur: elements.inputAuteur.value.trim(),
    annee: Number.parseInt(elements.inputAnnee.value, 10),
    domaine: elements.inputDomaine.value,
    note: Number.parseFloat(elements.inputNote.value),
    pages: Number.parseInt(elements.inputPages.value, 10),
    lu: elements.inputLu.checked,
  };

  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }

  ajouterLivre(formData);
});

// ============================================
// INITIALISATION
// ============================================

render();
