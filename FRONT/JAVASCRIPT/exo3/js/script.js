// Attendre la chargement du DOM
$(document).ready(function(){

    /*
    Capter le click pour déclencher une fonction
    */
        // Définition des variables
        var myForm = $('form');
        var userTitle = $('[name="userTitle"]');
        var userChoice = $('[name="userChoice"]');
        var formError = 0;

        
        // Capter la soumission du formulaire
        myForm.submit( function(evt){
            // Bloquer le comportement naturel du formulaire
            evt.preventDefault();

            // Réinitialiser la variable formError
            formError = 0;

            // La valeur de userTitle doit au minimum avoir 1 caractère
            if( userTitle.val().length <= 0 ){
                // Sélectionner le SPAN de la balise précédente pour changer le contenu texte
                userTitle.prev().find('span').text(' Champs obligatoire');

                // Incrémenter la variable formError
                formError++;
            }

            // La valeur de userChoice ne peut pas être égal à "null"
            if( userChoice.val() == "null" ){
                // Sélectionner le SPAN de la balise précédente pour changer le contenu texte
                userChoice.prev().find('span').text(' Champs obligatoire');

                // Incrémenter la variable formError
                formError++;
            };

            /*
            Validation finale du formulaire
            */
                if( formError === 0 ){
                    // Traiter les données du formulaire
                    alert( 'Vous avez ajoutez ' + userTitle.val() + '(' + userChoice.val() + ')' );

                    // Vider les champs du formulaire
                    userTitle.val('');
                    userChoice.val('null');
                };
            //
        });
    
        /*
        Supprimer les messages d'erreur
         */
            userTitle.focus(function(){
                userTitle.prev().find('span').text('');
            });

            userChoice.focus(function(){
                userChoice.prev().find('span').text('');
            });
        //
    //



}); // Fin de la fonction d'attente de chargement du DOM