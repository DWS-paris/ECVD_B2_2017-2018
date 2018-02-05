'use strict';

/*
Les variables globales
*/
// Sélectionner la balise H2 et la placer dans une variable
var myTitle = document.querySelector('h1');
var userMessage = document.querySelector('[name="userMessage"]');
var errorForm = document.querySelector('form p');
var messageBoxe = document.querySelector('main');

// Sélectionner le formulaire et le placer dans une constante
var myForm = document.querySelector('form');
//


/*
Création du chatBot
*/
var chatBot = {
    // Propriétés de l'objet
    botName: 'Alan',
    botSentence: '',
    botUnderstand: false,
    botIsGreeted: false,
    botSentencesList: {
        botSayHello: ['Bonjour', 'Salut', 'Hey !', 'Wesh'],
        botIsFine: ['Ca va bien', 'Tr\xE8s bien merci', 'Nickel']
    },

    // Méthodes de l'objet
    botAnalyze: function botAnalyze(userSentence) {
        // Rechercher la présence du terme 'SALUT' dans userSentence
        var upperSentence = userSentence.toUpperCase();

        if (upperSentence.search('SALUT') != -1 || upperSentence.search('BONJOUR') != -1 || upperSentence.search('WESH') != -1 || upperSentence.search('YO') != -1) {
            // Créer une variable pour l'index aléatoire de la réponse
            var indexResponse = Math.floor(Math.random() * chatBot.botSentencesList.botSayHello.length);

            // Modifier la propriété botSentence
            chatBot.botSentence = chatBot.botSentencesList.botSayHello[indexResponse];

            // Le bot à compris
            chatBot.botUnderstand = true;

            // Le bot est salué
            chatBot.botIsGreeted = true;
        } else if (upperSentence.search('CA VA') != -1) {

            // Vérifier si le bot est salué
            switch (chatBot.botIsGreeted) {
                case true:
                    // Créer une variable pour l'index aléatoire de la réponse
                    var _indexResponse = Math.floor(Math.random() * chatBot.botSentencesList.botIsFine.length);
                    // Modifier la propriété botSentence
                    chatBot.botSentence = chatBot.botSentencesList.botIsFine[_indexResponse];
                    break;

                default:
                    // Modifier la propriété botSentence
                    chatBot.botSentence = 'Il faut me dire bonjour avant de me parler';
                    break;
            }

            // Le bot à compris
            chatBot.botUnderstand = true;
        } else {
            // Modifier la propriété botSentence
            chatBot.botSentence = 'Je n\'ai pas compris...';

            // Le bot n'a pas compris
            chatBot.botUnderstand = false;
        }
    }
    //


    /*
    Créer une fonction pour traiter les données du formulaire
    */
};var formAnalyze = function formAnalyze() {
    // Connaitre la taille de la valeur de l'input
    var messageLength = userMessage.value.length;

    // Le formulaire est valide si il y a au moins un caractère
    if (messageLength > 0) {
        // Ajouter le message dans le DOM
        appendTags(userMessage.value, 'user');

        // Demander au bot d'analyser le message
        chatBot.botAnalyze(userMessage.value);

        // Afficher la réponse du chatbot
        appendTags(chatBot.botSentence, 'bot');

        // Vider la valeur de userMessage
        userMessage.value = '';
    } else {
        // Le fomulaire n'est pas valide, ajouter la class open sur errorForm
        errorForm.classList.add('open');
    }
};

// Masquer le message d'erreur au focus sur userMessage
userMessage.addEventListener('focus', function () {
    errorForm.classList.remove('open');
});
// 


/*
Créer une fonction pour ajouter un message dans le DOM
*/
var appendTags = function appendTags(message, className) {
    // Modifier le contenu HTML de la balise messageBox
    messageBoxe.innerHTML += '\n            <section class="' + className + '">\n                <p>' + message + '</p>\n            </section>\n        ';
};
//


/*
Capter la soumission du formulaire
*/
myForm.addEventListener('submit', function (event) {
    // Bloquer l'événement
    event.preventDefault();

    // Appeler la fonction de traitement du formulaire
    formAnalyze();
});
//