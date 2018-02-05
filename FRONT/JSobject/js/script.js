/*
Créer un model d'objet (constructor)
*/
    function TaskModel( title, taskIsDone ){
        this.title = title;
        this.taskIsDone = taskIsDone;
    };
    
    
    /*
    Ajouter des méthodes au model objet
    */ 
        TaskModel.prototype.achieveTask = function(){
            return this.taskIsDone = true;
        };

        TaskModel.prototype.appendTask = function(){
            $('#tasksList').append('<li>'+ this.title +' <span><i class="fa fa-check" aria-hidden="true"></i> <i class="fa fa-times" aria-hidden="true"></i></li></span>');
        };
    //
//




/*
Créer une collection de TaskModel
*/
    // Création de la collection
    var tasksCollection = [ 
        new TaskModel('Mon titre', false), 
        new TaskModel('Salut', false), 
        new TaskModel('Hello', false) 
    ];

    // Ajouter les éléments dans le DOM
    for( var i = 0; i < tasksCollection.length; i++ ){
        tasksCollection[i].appendTask();
    };
//



/*
Validation d'une tâche
*/
    function changeTask(taskId){
        tasksCollection[taskId].achieveTask();
        $('li').eq(taskId).addClass('isDone');
    };

    function deleteTask(taskId){
        $('li').eq(taskId).slideUp();

        // Supprimer l'index du tableau
        tasksCollection.splice( taskId, 1 );

        console.log(tasksCollection);
        
    };

    var checkArray = $('.fa-check');
    var deleteArray = $('.fa-times');

    for( var i = 0; i < checkArray.length; i++ ){
        $(checkArray[i]).attr('onClick', 'changeTask('+ i +')')
    };

    for( var i = 0; i < deleteArray.length; i++ ){
        $(deleteArray[i]).attr('onClick', 'deleteTask('+ i +')')
    };
//