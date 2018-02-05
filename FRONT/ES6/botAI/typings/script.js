/*
Les variables globales
*/
    // Sélectionner la balise H2 et la placer dans une variable
    let myTitle = document.querySelector('h1');
    let userMessage = document.querySelector('[name="userMessage"]');
    let errorForm = document.querySelector('form p');
    let messageBoxe = document.querySelector('main');

    // Sélectionner le formulaire et le placer dans une constante
    const myForm = document.querySelector('form');
//


/*
Création du chatBot
*/
    const chatBot = {
        // Propriétés de l'objet
        botName: `Alan`,
        botSentence: ``,
        botUnderstand: false,
        botIsGreeted: false,
        botSentencesList: {
            botSayHello: [ `Bonjour`, `Salut`, `Hey !`, `Wesh`],
            botIsFine: [ `Ca va bien`, `Très bien merci`, `Nickel`]
        },

        // Méthodes de l'objet
        botAnalyze: userSentence => {
            // Rechercher la présence du terme 'SALUT' dans userSentence
            let upperSentence = userSentence.toUpperCase()

            if( 
                upperSentence.search('SALUT') != -1 ||
                upperSentence.search('BONJOUR') != -1 ||
                upperSentence.search('WESH') != -1 ||
                upperSentence.search('YO') != -1 
            ){
                // Créer une variable pour l'index aléatoire de la réponse
                let indexResponse = Math.floor( Math.random() * chatBot.botSentencesList.botSayHello.length )
                
                // Modifier la propriété botSentence
                chatBot.botSentence = chatBot.botSentencesList.botSayHello[indexResponse]

                // Le bot à compris
                chatBot.botUnderstand = true

                // Le bot est salué
                chatBot.botIsGreeted = true

            } else if(upperSentence.search('CA VA') != -1){

                // Vérifier si le bot est salué
                switch (chatBot.botIsGreeted){
                    case true:
                    // Créer une variable pour l'index aléatoire de la réponse
                    let indexResponse = Math.floor( Math.random() * chatBot.botSentencesList.botIsFine.length )
                    // Modifier la propriété botSentence
                    chatBot.botSentence = chatBot.botSentencesList.botIsFine[indexResponse]
                    break

                    default:
                    // Modifier la propriété botSentence
                    chatBot.botSentence = `Il faut me dire bonjour avant de me parler`
                    break
                }

                // Le bot à compris
                chatBot.botUnderstand = true

            } else{
                // Modifier la propriété botSentence
                chatBot.botSentence = `Je n'ai pas compris...`

                // Le bot n'a pas compris
                chatBot.botUnderstand = false
            }
        }

    }
//



/*
Créer une fonction pour traiter les données du formulaire
*/
    const formAnalyze = () => {
        // Connaitre la taille de la valeur de l'input
        let messageLength = userMessage.value.length
        
        // Le formulaire est valide si il y a au moins un caractère
        if( messageLength > 0 ){
            // Ajouter le message dans le DOM
            appendTags(userMessage.value, `user`)

            // Demander au bot d'analyser le message
            chatBot.botAnalyze(userMessage.value)

            // Afficher la réponse du chatbot
            appendTags(chatBot.botSentence, `bot`)

            // Vider la valeur de userMessage
            userMessage.value = ''

        } else{
            // Le fomulaire n'est pas valide, ajouter la class open sur errorForm
            errorForm.classList.add('open')
        }
    }

    // Masquer le message d'erreur au focus sur userMessage
    userMessage.addEventListener('focus', () => {
        errorForm.classList.remove('open')
    })
// 



/*
Créer une fonction pour ajouter un message dans le DOM
*/
    const appendTags = (message, className) => {
        // Modifier le contenu HTML de la balise messageBox
        messageBoxe.innerHTML += `
            <section class="${className}">
                <p>${message}</p>
            </section>
        `
    }
//



/*
Capter la soumission du formulaire
*/
    myForm.addEventListener('submit', (event) => {
        // Bloquer l'événement
        event.preventDefault()

        // Appeler la fonction de traitement du formulaire
        formAnalyze()
    })
//