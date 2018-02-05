/*
Attendre le chargement du DOM
    - Je sélectionne le document
    - J'attend qu'il soit pret
        - Je lance une fonction de callback
*/
$(document).ready(function(){

    /*
    Déclaration des variables globales
    */
        // Variables du formulaire
        var myForm = $('#myForm');
        var myNewTask = $('#myNewTask');
        var errorMsg = $('#errorMsg');
        var tasksCollection = [
            {
                title: 'Créer une page HTML avec un formulaire',
                isDone: true
            },
            {
                title: 'Ajouter jQuery',
                isDone: true
            },
            {
                title: 'Capter la soumission du formulaire',
                isDone: true
            },
            {
                title: 'Ajouter la nouvelle tâche dans le DOM',
                isDone: false
            }
        ];

        // Variable liste des tâches
        var todoList = $('#todoList');
    //


    /*
    Fonction pour ajouter la liste des tâches dans le DOM
    */
        function displayTasksList(){
            // Faire une boucle sur la collection de données
            for( var i = 0; i < tasksCollection.length; i++ ){

                if( tasksCollection[i].isDone ){
                    // Ajouter un article dans todoList
                    todoList.append('<article class="taskIsDone">' + tasksCollection[i].title + '</article>')
                
                } else{
                    // Ajouter un article dans todoList
                    todoList.append('<article>' + tasksCollection[i].title + '</article>')
                };
            };
        };
    //

    /*
    Gérer un formulaire
    */  
        // Déclarer la fonction
        function formAddTask(){
            /*
            Capter la soumission du formulaire
                - Ajouter l'événement en paramètre de la fonction de callback
                - Bloquer le comportement naturel de l'événement
            */
            myForm.submit(function(evt){
                // Bloquer le comportement naturel de l'événement
                evt.preventDefault();

                // Vérifier la valeur du input
                if( myNewTask.val().length <= 0 ){
                    // Affiche le message d'erreur : ajouter le class open sur errorMsg
                    errorMsg.addClass('open');

                } else{
                    // Enregister la nouvelle tâche dans un tableau
                    tasksCollection.push({
                        title: myNewTask.val(),
                        isDone: false
                    });

                    // Ajouter le tâche dans le DOM
                    todoList.append('<article>' + myNewTask.val() + '</article>')
                    
                    // Vider le champs du formulaire
                    myNewTask.val('');
                };
            });
        };
    //


    /*
    Fonction pour masquer les erreurs
    */
        // Déclarer la fonction
        function hideErrorMsg(){
            // Capter le 'focus' sur le input 'myNewTask'
            myNewTask.focus(function(){
                // Supprimer la class 'open' de 'errorMsg'
                errorMsg.removeClass('open');
            });
        };
    //


    /*
    Lancer l'application
    */
        displayTasksList();
        formAddTask();
        hideErrorMsg();
    //

}); // Fin de la fonction d'attente de chargement du DOM