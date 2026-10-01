# Y.A.S — Yoga Accessible Solidaire · Site vitrine

Site statique (HTML / CSS / JavaScript, sans backend ni cookie) de l'association **Y.A.S – Yoga Accessible Solidaire** (La Réunion) : cours collectifs à prix libre, yoga adapté en structures sociales et médico-sociales, séances pour associations et entreprises.

Charte graphique reprise de la plaquette de communication : menthe `#90d1b9`, turquoise `#569592`, pêche `#ffe5c7`, corail `#e8704a`, bulles arrondies, écriture manuscrite pour les accents.

## Consulter en local

Ouvrir simplement **`index.html`** dans un navigateur (double-clic). Aucune installation requise.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil, choix du profil, chiffres animés, respiration guidée, schéma d'impact, cours suspendus |
| `projet.html` | Intention, fonctionnement (frise), publics, objet statutaire |
| `equipe.html` | Conseil d'administration (Ugo Charles, président · Philippe Leleu, secrétaire), équipe bénévole, gouvernance |
| `cours-collectifs.html` | Cours collectifs, déroulé type |
| `structures.html` | Interventions en structures sociales et médico-sociales (onglets par type de structure) |
| `entreprises-associations.html` | Séances pour équipes salariées et bénévoles |
| `tarifs.html` | Prix libre, gratuité, cours suspendus, simulateur |
| `agir.html` | Adhérer, donner, enseigner, prêter un lieu… |
| `contact.html` | Coordonnées et formulaire (ouvre la messagerie) |
| `mentions-legales.html` | Mentions légales, RGPD, droit à l'image |

`assets/` contient `style.css`, `main.js`, `favicon.svg` et les photos (`images/`).

## À compléter avant mise en ligne

Rechercher les éléments surlignés en jaune (`class="todo"`) et la valeur `a-completer@exemple.org` dans `contact.html` :
e-mail, téléphone, réseaux sociaux, RNA / SIRET, horaires et lieux des cours, montant de l'adhésion, lien de don, biographies du conseil d'administration, spécialité de Maë.
Les encadrés pointillés `class="slot"` sont des emplacements pour de futures photos : les remplacer par `<div class="photo"><img src="assets/images/…" alt="…"></div>`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub (ex. `yas-yoga`) et y pousser ce dossier :
   ```bash
   git remote add origin https://github.com/VOTRE-COMPTE/yas-yoga.git
   git branch -M main
   git push -u origin main
   ```
2. **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
3. Mettre à jour l'URL dans `robots.txt` et `sitemap.xml`.

## Photos et droit à l'image

Les photos montrent des personnes identifiables : conserver les autorisations de droit à l'image des personnes représentées.

## Licences

- Code : [MIT](LICENSE)
- Textes et visuels : [CC BY-NC-ND 4.0](LICENSE-CONTENT.md) · photographies : tous droits réservés
