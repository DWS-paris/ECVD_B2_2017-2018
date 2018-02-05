// Afficher un mesage dans la console
console.log('Salut');

// Les types de variable
var theString = 'Je suis un texte';
var myNumber = 38;
var myBool = true;
var myArray = [ 'Un texte', 79, true, theString ];

// Afficher dans la console le nombre de caractères de la variable theString
console.log( theString.length );
console.log( myArray.length );

// Afficher une des valeurs du tableau
console.log( myArray[0] );
console.log( myArray[0].length );

// Ajouter une valeur dans le tableau myArray
console.log( myArray );

myArray.push( myNumber );
console.log( myArray );

// Afficher chaque valeur du tableau dans la console
// console.table( myArray );

// Créer deux variables de type string
var firstName = 'Julien';
var lastName = 'Noyer';

// Saluer l'utilisateur dans la console (concatènation)
console.log( 'Bonjour ' + firstName + ' ' + lastName + ' comment vas-tu ?' );

// Boucles JavaScript
var names = ['Robert', 'Peter', 'Bunny', 'LeeScratch'];

for( var i = 0; i < names.length; i++ ){
    console.log( names[i] )
};