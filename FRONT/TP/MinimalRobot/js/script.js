/*
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', function(){
    
    // Créer une variable pour la balise HTML
    var burgerMenuBtn = document.getElementById('burgerMenuBtn');
    var burgerPicto = document.getElementById('burgerPicto');
    var myNav = document.getElementById('myNav');


    // Capter le clique sur la variable
    burgerMenuBtn.addEventListener('click', function(evt){
        // Bloquer le comportement naturel de la balise
        evt.preventDefault();

        // Ajouter la class .open sur la nav
        myNav.classList.toggle('open');

        // Changer l'aspect du picto
        burgerPicto.classList.toggle('fa-bars');
        burgerPicto.classList.toggle('fa-times');
    });



    /*
    Gestion de la modal
    */
        // Variables pour la modal
        var myProject = document.getElementById('myProject');
        var modal = document.getElementById('modal');
        var closeModal = document.getElementById('closeModal');

        // Récupération des balises 'figure'
        var figureArray = document.getElementsByTagName('figure');

        // Faire une boucle sur figureArray pour récupérer chacune des balises
        for( var i = 0; i < figureArray.length; i++ ){

            // Capter le click sur le figure
            figureArray[i].addEventListener('click', function(){

                // Récupérer la valeur de l'attribut src de l'image
                var image = this.getElementsByTagName('img');
                var imageSrc = image[0].getAttribute('src');

                // Injecter la variable imageSrc dans l'image de la modal
                var modalImage = modal.getElementsByTagName('img');
                modalImage[0].setAttribute('src', imageSrc);
                
                // Ajouter la class open à la balise modal
                modal.classList.add('open');
            });
        };

        // Capter le click sur la balise closeModal
        closeModal.addEventListener('click', function(evt){
            // Bloquer le comportement naturel de la balise
            evt.preventDefault();
            
            // Ajouter la class open à la balise modal
            modal.classList.add('close');

            // Attendre 1 demi seconde (fin de la transition) pour supprimer les class
            setTimeout(function(){
                modal.classList.remove('open');
                modal.classList.remove('close');
                
            }, 500);

        });
    //
    
}); // Fin de la fonction d'attente de chargement du DOM