# # Gestion de Tâches
# Analyse du Code
1. Déclaration des Variables
Le code commence par la déclaration de plusieurs variables qui représentent des éléments de l’interface utilisateur, notamment des modals et des listes de tâches. Ces variables sont essentielles pour interagir avec le DOM.

2. Gestion des Modals
Deux modals sont utilisés pour l’ajout et l’édition de tâches. La fonction addTesk() affiche le modal d’ajout, tandis que fermeaddTesk() le ferme. Les valeurs des champs sont réinitialisées lorsque le modal est ouvert.

3. Validation et Ajout de Tâches
Une validation des champs d’entrée est effectuée avant d’ajouter une tâche. Les données sont stockées dans un tableau listeElement, qui contient des objets représentant chaque tâche.

4. Affichage des Tâches
La fonction modalAdd() rafraîchit l’affichage des tâches dans différentes catégories (À faire, En cours, Fait) en fonction de la valeur de la propriété category.

5. Édition et Suppression de Tâches
Les tâches peuvent être éditées et supprimées via les fonctions addEdet() et deleteTask(), respectivement.

6. Statistiques
La fonction statistique() met à jour le nombre de tâches dans chaque catégorie, fournissant ainsi un aperçu utile à l'utilisateur.

# interface d'utilisation
![alt text](image-1.png)
# lien de la page d'utilisation
https://lakrouehamza.github.io/Brief4-syst-me-simple-pour-g-rer-les-t-ches./