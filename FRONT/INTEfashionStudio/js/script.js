//Attendre la chargement du DOM
$(document).ready(function(){

    /*
        Fonctionnement du burger menu
        - l'utilisateur clic sur la balise #burgerBtn
        - une fois qu'il à cliqué, la balise #mainNav s'affiche
        - quand la balise #mainNav est afficher, un clic sur #burgerBtn masque #mainNav
    */

    // Définition des variables
    var burgerBtn = $('#burgerBtn');
    var mainNav = $('#mainNav');
    var menuIsOpen = false;

    // Gestion du clic sur burgerBtn
    burgerBtn.click(function(){
        
        // Vérifier si le menu est ouvert ou non
        if( menuIsOpen === false ){
            // Le menu est fermé
            mainNav.fadeToggle();
        } else{
            // Le menu est ouvert
            mainNav.fadeToggle();
        }

        // Inverser une valeur boolean
        menuIsOpen = !menuIsOpen;
    });

}); // Fin de la fonction de chargement du DOM