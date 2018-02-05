// Créer une variable pour sauvegarder l'input
var myInput = document.querySelector('#userAge');
var formMsg = document.querySelector('#formMessage')

// Créer une fonction pour la soumission du formulaire
function submitForm(){
    // Bloquer le comportement naturel du formulaire
    event.preventDefault();

    // Récupérer la valeur de l'input renseignée par l'utilisateur
    var userChoice = myInput.value;

    // Si le input à au moins 1 caractère et maximum 2 caractères
    if( userChoice.length != 0 && userChoice.length < 3 && userChoice != 0){

        // Afficher un message si l'utilisateru a plus de 18 ans
        if( userChoice >= 18 ){ 
            // Afficher un message dans le DOM
            formMsg.innerHTML = 'Vous êtes <b>majeur</b>';

        } else{
            // Afficher un message dans le DOM
            formMsg.innerHTML = 'Vous êtes <b>mineur</b>';
        };

        // Vider la valeur de l'input
        myInput.value = '';

    } else{ // Sinon...
        // Afficher un message dans le DOM
        formMsg.innerHTML = 'Merci d\'indiquer <b>votre âge</b>';
    };
};