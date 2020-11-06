# Projet - Programmation Web Avancé

> Ce projet à pour but de réalisé un site web utilisant les différents outils vu en cours et TP ( [Voir le CDC](https://docs.google.com/document/d/1VhO3QO_8a0t3_-tG39zs7HO62An1NaNUpjT2xRqNvHg/edit) )

Membre de l'équipe :
  
  1. WILLIAMU Vaihau
  2. DIOUF Ndèye Khady Diagne
  3. KAKE FOGUE Freddy Manoël

## Faire fonctionner le site

* **Prérequis :**
  * Installer [Node.js](https://nodejs.org/fr/download/) et [postgreSQL](https://www.postgresql.org/download/)
  * Connaître son mot de passe et le port de postgreSQL (définit lors de l'installation)

* **Démarche :**
  * Ouvrir pgAdmin
    * Nouveau sur pgAdmin
  * Dézipper le fichier zip.
  * Ouvrir **./routes/api.js** avec un éditeur de texte. ([Éditeur conseillé](https://code.visualstudio.com/download))
  * Rentrer votre mot de passe postgreSQL *(noté ici **SQLmdp**)* à la ligne 10 : **(N'oubliez pas les guillemets et la virgule)**
  
    ```javascript
    [10]    password: "SQLmdp",
    ```
  
  * Rentrer le nom de la base de donnée que vous avez configuré précédemment *(noté ici **bddName**)* à la ligne 11 : **(N'oubliez pas les guillemets et la virgule)**

    ```javascript
    [11]    database: "bddName",
    ```

  * Rentrer le port postgreSQL *(noté ici **portNbr**)* à la ligne 12 : (ex : *5432*)

    ```javascript
    [12]    port: portNbr
    ```

  * Sauvegarder les modifications
  * Dans un invite de commande
