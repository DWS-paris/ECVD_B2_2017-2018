// Attendre la chargement du DOM
$(document).ready(function(){

    /*
    Capter le click pour déclencher une fonction
    */
        // Définition des variables
        var myButton = $('header a');
        var myMain = $('main');

        // Créer une fonction pour modifier le contenu HTML du MAIN
        function editHtmlContent(){
            // Récupérer le contenu HTML actuel de la balise MAIN
            var actualHtml = myMain.html();

            // Démander à l'utilisateur d'écrire une phrase
            var newSentence = prompt('Ajouter une pharse.');

            // Ajouter le phrase dans le MAIN en modifiant le contenu HTML
            myMain.html( actualHtml + '<p>' + newSentence + '</p>' );
        }

        // Capter le click en bloquant le comportement par défaut de la balise A
        myButton.click(function(evt){
            // Bloquer le comportement par défault
            evt.preventDefault();

            // Appeler la fonction
            editHtmlContent();
        });
    //



    

    


}); // Fin de la fonction d'attente de chargement du DOM