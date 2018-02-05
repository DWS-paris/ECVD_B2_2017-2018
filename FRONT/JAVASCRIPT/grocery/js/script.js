$(document).ready(function(){

    // Définition des variabbles
    var formError;
    var groceryForm = $('form');
    var productType = $('#productType');
    var productName = $('#productName');
    var productComment = $('#productComment');
    var productOption = $('#productOption');
    
    var newProductObject = {
        productType: null,
        productName: null,
        productComment: null,
        productOption: null,

        appendTags: function(){
            // Masquer le message vide du DOM
            $('#blackProductList').hide();

            // Ajouter un produit
            $('#productList').append('<li><img src="img/'+ this.productType +'.svg" alt="Picto '+ this.productType +'"><p>'+ this.productName +' : '+ this.productComment +'</p><p>'+ this.productOption +'</p></li>');

            // Réinitialiser l'objet
            this.clearObject();
        },

        clearObject: function(){
            this.productType = null;
            this.productName = null;
            this.productComment = null;
            this.productOption = null;
        }
    };

    // Créer une fonction pour afficher le message d'erreur
    function addErrorMsg(inputElement){
        // Afficher un message d'erreur
        inputElement.prev().find('span').text('Obligatoire');
    }

    // Suppression des messages d'erreur
    $('select, input, textarea').focus(function(){
        $(this).prev().find('span').text('');
    });

    $('[type="checkbox"]').focus(function(){
        $(this).parent().parent().prev().find('span').text('');
    });

    // Soumission du formulaire
    groceryForm.submit(function(evt){
        // Bloquer le comportement par default du formulaire
        evt.preventDefault();

        // Réinitialiser les erreurs et l'objet
        formError = 0;
        newProductObject.clearObject();

        /*
        Vérification des champs
        */
            if( productType.val() === "null" ){
                // Incrémenter la variabbler formError
                formError++;

                // Afficher un message d'erreur
                addErrorMsg(productType);

            } else{ 
                // Enregistrer la donnée dans l'objet newProductObject
                newProductObject.productType =  productType.val() 
            };

            if(productName.val().length <= 0){
                // Incrémenter la variabbler formError
                formError++;

                // Afficher un message d'erreur
                addErrorMsg(productName);

            } else{ 
                // Enregistrer la donnée dans l'objet newProductObject
                newProductObject.productName =  productName.val() 
            };

            if(productComment.val().length <= 0){
                // Incrémenter la variabbler formError
                formError++;

                // Afficher un message d'erreur
                addErrorMsg(productComment);

            } else{ 
                // Enregistrer la donnée dans l'objet newProductObject
                newProductObject.productComment =  productComment.val() 
            };

            // Création d'une variable pour connaître l'option sélectionnée
            var selectedProductOption = $('[name="productOption"]:checked');

            if( selectedProductOption.length === 0 ){
                // Incrémenter la variabbler formError
                formError++;
                
                // Afficher un message d'erreur
                addErrorMsg(productOption);

            } else{ 
                // Enregistrer la donnée dans l'objet newProductObject
                newProductObject.productOption =  selectedProductOption.val() 
            };
        //


        /*
        Validation finale du formulaire
        */
            if(formError === 0){
                // Ajouter la balise HTML
                newProductObject.appendTags();

                // Vider les champs du formulaire
                groceryForm[0].reset();
            };
        //
    });

});