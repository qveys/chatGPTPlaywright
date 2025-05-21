# Dossier `cookies`

Ce dossier est utilisé pour stocker les fichiers de cookies générés par le script `login-chatgpt.js`.

## À quoi sert ce dossier ?

- Il contient les cookies de session exportés après une connexion automatisée à ChatGPT.
- Par défaut, le fichier `cookies-chatgpt.json` y sera sauvegardé si le volume est bien monté (voir `docker-compose.yml`).

## Sécurité

- **Ne partage jamais ces fichiers publiquement !**
- Les cookies peuvent donner accès à ta session ChatGPT.
- Ajoute ce dossier à ton `.gitignore` si ce n'est pas déjà fait.

## Nettoyage

- Tu peux supprimer les fichiers de ce dossier à tout moment pour réinitialiser la session.

---

Ce dossier peut rester vide si aucune connexion n'a encore été effectuée. 