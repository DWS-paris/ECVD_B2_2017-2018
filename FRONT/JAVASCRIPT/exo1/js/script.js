// Attendre la chargement du DOM
$(document).ready(function(){

    /*
    Ajouter les liens de la NAV en jQuery
    */
        // Défin ition des variables
        var myNav = $('nav ul');
        var navArray = [
            '<li><a href="#">Accueil</a></li>',
            '<li><a href="#">A propos</a></li>',
            '<li><a href="#">Portfolio</a></li>',
            '<li><a href="#">Contacts</a></li>'
        ];

        // Itération sur une collection de données
        for( var i = 0; i < navArray.length; i++ ){
            // Ajouter la balise dans le DOM : append()
            myNav.append( navArray[i] );
        };
    //



    

    


}); // Fin de la fonction d'attente de chargement du DOM