installer lextesion prettier pou nous aider à formater notre code

npm init pour   //creer notre projet
npm i express mongoose jsonwebtoken bcrypt dotenv --save
npm i nodemon   //permet de relancer le serveur si le serveur crache


sudo mkdir -p /data/db
pour le demarrage de mongodb sur ubuntu il me faut creer un data à la racine avec mkdir data
ensuite dans data il me faut creer un dossier db
et pour lancer mongodb il me faut taper mongod

pour pouvoire lire les donnés de lui il faut installer cors et le configurer dans notre index


mettre en place la l'authentification via JWT (jsonwebtoken) sur lr serveur.

on doit, 
- installer le package jsonwebtoken
- créer une fonctionnalité "register" (createUser)
- créer une fonctionnalité "login" 
- créer un middleware pour checker si le token est valide


- créer un middleware pour gérer l'authentification
- créer une route pour l'authentification
- créer une route pour la récupération des données protégées
- créer une route pour la déconnexion
- créer une route pour la réinitialisation du mot de passe
- créer une route pour la récupération du profil utilisateur
- créer une route pour la modification du profil utilisateur


Installer jsonwebtoken
Utilisez npm pour installer le package jsonwebtoken :
Installez également le package bcrypt :