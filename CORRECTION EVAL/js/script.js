/* VERSION NATIVE */
    // Attendre le chargement du DOM
    document.addEventListener('DOMContentLoaded', function(){

        // Création de la fonction $
        function $(htmlTag){
            return document.querySelector(htmlTag);
        };
        
        // Définir les variables
        var burgerBtn = $('#burgerBtn');
        var mainNavigation = $('#mainNavigation');

        // Capter le clique sur burgerBtn
        burgerBtn.addEventListener('click', function(){
            // Afficher mainNavigation
            mainNavigation.classList.toggle('open')
        })
    });


/* Version jQuery
$(document).ready(function(){
    // Définir les variables
    var burgerBtn = $('#burgerBtn');
    var mainNavigation = $('#mainNavigation');

    // Capter le clique sur burgerBtn
    burgerBtn.click(function(){
        // Afficher mainNavigation
        mainNavigation.slideToggle();
    })
})  

*/