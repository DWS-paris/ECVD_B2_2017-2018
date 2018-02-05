/*
Création d'une application de calcule de moyenne
- Créer un tableau vide pour stocker les notes
- Créer une boucle pour calculer la moyenne
- Afficher le résultat dans la page HTML
*/

var notesArray = [];

// Créer une fonction sans paramètres
function addNote(){
    // Afficher une fenêtre surgissante
    var userChoice = prompt('Ajouter une note');

    // Transformer une string en number/integer avec parseInt()
    // console.log( parseInt(userChoice) );

    // Ajouter la note (au format number/integer) dans tableau
    notesArray.push( parseInt(userChoice) );

    // Afficher le tableau de note
    console.log(notesArray);
};

// Créer une fonction pour calculer la moyenne des notes
function classeAmount(){
    // Créer une variable pour aditionner les valeurs du tableau
    var totalNote = 0;

    // Aditionner les notes du tableau puis diviser la somme par le nombre de notes
    for( var i = 0; i < notesArray.length; i++ ){
        // Ajouter la valeur à totalNote
        totalNote += notesArray[i]
    };

    // Calculer la moyenne , 1 chiffre après la virgule
    console.log(Math.round(totalNote / notesArray.length, -1));

}