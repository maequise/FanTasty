Pour lancer mongo:

- se placer dans le dossier contenant docker-compose.yaml
- exécuter la commande ``docker compose up -d``

Pour se connecter à mongo-express:
- dans le navigateur, se rendre sur l'adresse ``http://localhost:8081``

Les informations de connexion sont:
- username: root
- password: example

Pour se connecter à mongo depuis l'API c# utiliser l'url suivante:

``mongodb://root:example@localhost:27017/Exo_tests``