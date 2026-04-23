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
    cover: "https://covers.openlibrary.org/b/isbn/9782277233619-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780802713315-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780385539302-L.jpg",
  },
  {
    id: 6,
    titre: "The Brain That Changes Itself",
    auteur: "Norman Doidge",
    annee: 2007,
    domaine: "Neurosciences",
    note: 8.9,
    pages: 427,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/9780143113102-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9782070713066-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/0394718364-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780393338102-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9782290130902-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
  },
  {
    id: 12,
    titre: "Reality Is Not What It Seems",
    auteur: "Carlo Rovelli",
    annee: 2016,
    domaine: "Physique",
    note: 8.9,
    pages: 256,
    lu: true,
    cover: "https://covers.openlibrary.org/b/isbn/9780141983219-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780471648000-L.jpg",
  },
  {
    id: 14,
    titre: "Your Inner Fish",
    auteur: "Neil Shubin",
    annee: 2008,
    domaine: "Biologie",
    note: 8.5,
    pages: 229,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/9780307277459-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780307389923-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/157062187X-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9782897730178-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780399184437-L.jpg",
  },
  {
    id: 19,
    titre: "The Spark in the Machine",
    auteur: "Daniel Keown",
    annee: 2014,
    domaine: "Biologie",
    note: 8.1,
    pages: 256,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/9781848191969-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9782759822607-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9781771642484-L.jpg",
  },
  {
    id: 25,
    titre: "The Gene",
    auteur: "Siddhartha Mukherjee",
    annee: 2016,
    domaine: "Évolution",
    note: 9.0,
    pages: 608,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/9781476733524-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780385495325-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9781594205071-L.jpg",
  },
  {
    id: 28,
    titre: "The Disappearing Spoon",
    auteur: "Sam Kean",
    annee: 2010,
    domaine: "Chimie",
    note: 8.4,
    pages: 391,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/9780316051644-L.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9780062328502-L.jpg",
  },
  {
    id: 30,
    titre: "In Search of Schrödinger's Cat",
    auteur: "John Gribbin",
    annee: 1984,
    domaine: "Physique",
    note: 8.3,
    pages: 302,
    lu: false,
    cover: "https://covers.openlibrary.org/b/isbn/0552125555-L.jpg",
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
  return (
    palettes[domaine] || { from: "#1a1a2e", to: "#16213e", accent: "#00d4ff" }
  );
}

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
  const couleurs = getDomainColors(livre.domaine);
  const initiales = getInitiales(livre.titre);

  return `
    <div class="book-card">

      <div class="book-cover" style="
        background: linear-gradient(135deg, ${couleurs.from} 0%, ${couleurs.to} 100%);
        border-bottom: 3px solid ${couleurs.accent};
      ">
        <img
          src="${livre.cover}"
          alt="Couverture de ${escapeHtml(livre.titre)}"
          class="book-cover-img"
          onerror="this.remove(); document.getElementById('fallback-${livre.id}').style.display='flex';"
        >
        <!-- onerror : si l'image échoue → on la supprime du DOM
             et on affiche le fallback identifié par son id unique -->

        <div id="fallback-${livre.id}" class="book-cover-fallback" style="display:none;">
          <!-- display:none par défaut — visible seulement si onerror se déclenche -->
          <span class="book-cover-initiales" style="color: ${couleurs.accent}">
            ${initiales}
          </span>
          <span class="book-cover-domaine" style="color: ${couleurs.accent}">
            ${escapeHtml(livre.domaine)}
          </span>
        </div>
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
  Object.values(errorElements).forEach((el) => {
    el.textContent = "";
  });
}

function validateForm(data) {
  const errors = {};
  const currentYear = getCurrentYear();

  if (data.titre === "") errors.titre = "Le titre est obligatoire.";

  if (data.auteur === "") errors.auteur = "L'auteur est obligatoire.";

  if (Number.isNaN(data.annee) || data.annee < 1800 || data.annee > currentYear)
    errors.annee = `Année entre 1800 et ${currentYear}.`;

  if (data.domaine === "") errors.domaine = "Choisissez un domaine.";

  if (Number.isNaN(data.note) || data.note < 0 || data.note > 10)
    errors.note = "Note entre 0 et 10.";

  if (Number.isNaN(data.pages) || data.pages < 1)
    errors.pages = "Nombre de pages invalide.";

  return errors;
}

function showErrors(errors) {
  Object.entries(errors).forEach(([key, message]) => {
    if (errorElements[key]) errorElements[key].textContent = message;
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
    cover: "",
    // les livres ajoutés manuellement n'ont pas de couverture
    // → le fallback CSS s'affichera automatiquement
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
