// Attendre le chargement du DOM
document.addEventListener('DOMContentLoaded', function(){

    // Le DOM est chargé
    console.log('DOM chargé');

    // Créer une variable contenant le formulaire
    var myLogInForm = document.querySelector('#formLogIn');

    // Créer des variables pour les inputs
    var userName = document.querySelector('#userName');
    var userPassword = document.querySelector('#userPassword');

    // Créer des variables pour les labels
    var labelUserName = document.querySelector('[for="userName"]');
    var labelUserPassword = document.querySelector('[for="userPassword"]');

    // Capter la soumission du formulaire => événement submit
    myLogInForm.addEventListener('submit', function(evt){
        // Bloquer le comportement par defaut du formulaires
        evt.preventDefault();

        // Créer une variable pour le nombre d'erreur
        var formError = 0;

        // Vérifier si il y à bien minimum 5 caractères dans les inputs
        if( userName.value.length < 5 ){
            console.log('Minimum 5 caractères pour le userName');

            // Afficher un message d'erreur dans le DOM
            labelUserName.innerHTML += ' <b style="color: red">Min. 5 letters</b>';
            
            // Incrémenter la valeur de formScore
            formError++;
        }

        if( userPassword.value.length < 5 ){
            console.log('Minimum 5 caractères pour le userPassword');

            // Afficher un message d'erreur dans le DOM
            labelUserPassword.innerHTML += ' <b style="color: red">Min. 5 letters</b>';

            // Incrémenter la valeur de formScore
            formError++;
        }

        // Pour valider le formulaire il ne doit pas y avoir d'erreur
        if( formError == 0 ){
            console.log('Formulaire validé !');

            // Vider les champs du formulaire
            userName.value = '';
            userPassword.value = '';

            // Envoyer les données dans un fichier PHP et attendre la réponse...
        };


    });


    // Masquer l'erreur du champs userName
    userName.addEventListener('focus', function(){
        // Afficher le texte de base
        labelUserName.textContent = 'Email or Phone';
    });

    // Masquer l'erreur du champs userPassword
    userPassword.addEventListener('keyup', function(){
        
        // Masquer l'erreur si il y à 5 caractères dans le input
        if(userPassword.value.length >= 5){
            labelUserPassword.textContent = 'Password';
        }
    });

}); // Fin de la fonction d'attente de chargement du DOM