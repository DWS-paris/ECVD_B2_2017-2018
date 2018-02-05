// Attendre le chargement du DOM
$(document).ready( function(){

    /*
    Chargement asynchrone du contenu
    */
        // Charger le fichier add.html dans la section #addCitizen
        $('#addCitizen').load('./components/add.html', function(){

            // Charger le fichier avatar.html dans la section #avatar
            $('#avatar').load('./components/avatar.html', function(){

                // Charger le fichier footer.html dans le footer
                $('footer').load('./components/footer.html', function(){

                    // Créer un objet pour la ville
                    var myTown = {
                        totalSims: 0,
                        totalGirls: 0,
                        totalBoys: 0,
                        totalAge: 0,
                        amount: 0,

                        setStats: function(){
                            $('#totalSims').text( this.totalSims );
                            $('#simsWoman').html( this.totalGirls + '<b>/' + this.totalSims + '</b>' );
                            $('#simsMan').html( this.totalBoys + '<b>/' + this.totalSims + '</b>'  );
                        },

                        setAgeAmount: function(){
                            $('#simsAgeAmount').html( (this.totalAge / this.totalSims) + '<b> ans>' );
                        }
                    };

                    myTown.setStats();

                    // Appeler la fonction pour ajouter un Sim
                    addCitizen( myTown );

                    // Appeler la fontion pour modifier l'avatar
                    customAvatar();
                });
            });
        });        
    //

    
    /*
    Créer une fonction pour valider le formulaire
    */
        function addCitizen( paramTown ){
            var formCitizen = $('#formCitizen');
            
            // Capter la soumission du formulaire
            formCitizen.submit( function(evt){
                /*
                Création de l'objet singleSim
                */
                    var singleSim = {
                        name: undefined,
                        age: undefined,
                        gender: undefined,
                        styleUp: undefined,
                        styleDown: undefined
                    };
                //
                var avatarGender = $('[name="gender"]:checked');
                var avatarName = $('#avatarName');
                var avatarAge = $('#avatarAge');
                var avatarStyleTop = $('#avatarStyleTop');
                var avatarStyleBottom = $('#avatarStyleBottom');

                // Bloquer le comportement naturel du formulaire
                evt.preventDefault();

                // Vérifier #avatarName
                if( avatarName.val().length > 1 ){
                    // Définir le nom de l'avatar
                    singleSim.name = avatarName.val();

                } else{ console.log('Nom obligatoire') };

                // Vérifier #avatarAge
                if( avatarAge.val() > 0 ){
                    // Définir l'age de l'avatar
                    singleSim.age = avatarAge.val();

                } else{ console.log('Age obligatoire') };

                // Définir le genre de singleSim
                singleSim.gender = avatarGender.val();

                // Vérifier avatarStyleTop
                if( avatarStyleTop.val() != 'null' ){
                    singleSim.styleUp = avatarStyleTop.val();

                } else { console.log( 'avatarStyleTop obligatoire') };

                // Vérifier avatarStyleTop
                if( avatarStyleBottom.val() != 'null' ){
                    singleSim.styleDown = avatarStyleBottom.val();

                } else { console.log( 'avatarStyleBottom obligatoire') };

                
                /*
                Validation finale du formulaire
                */
                    if( 
                        singleSim.age != undefined &&
                        singleSim.gender != undefined &&
                        singleSim.name != undefined &&
                        singleSim.styleDown != undefined &&
                        singleSim.styleUp != undefined
                     ){
                        console.log('Le formulaire est validé !');
                        
                        // Ajouter le Sim
                        paramTown.totalSims++;
                        
                        if(singleSim.gender == 'girl'){
                            paramTown.totalGirls++;

                        } else{
                            paramTown.totalBoys++;
                        };

                        // Mettre à jour les statistiques de la ville
                        paramTown.setStats();

                        // Mettre à jour la moyenne d'age
                        paramTown.totalAge += parseInt(singleSim.age);
                        paramTown.setAgeAmount();

                        console.log(paramTown)
                        
                        // Vider les champs du formulaire
                        this.reset();
                        resetAvatar();
                    };
                //
                

            });
        };
    //

    /*
    Créer une fonction pour modifier l'avatar
    */
        function customAvatar(){
            // Afficher le genre
                var avatarWoman = $('#avatarWoman');
                var avatarMan = $('#avatarMan');
                var avatarBody = $('#avatarBody');

                avatarWoman.click( function(){
                    avatarBody.attr('src', './img/' + avatarWoman.val() + '.png' );
                });

                avatarMan.click( function(){
                    avatarBody.attr('src', './img/' + avatarMan.val() + '.png' );
                });
            //

            // Changer les sapes
                var avatarStyleTop = $('#avatarStyleTop');
                var avatarStyleBottom = $('#avatarStyleBottom');
                var avatarTop = $('#avatarTop');
                var avatarBottom = $('#avatarBottom');

                avatarStyleTop.change(function(){
                    avatarTop.attr('src', './img/top/' + $(this).val() + '.png')
                });

                avatarStyleBottom.change(function(){
                    avatarBottom.attr('src', './img/bottom/' + $(this).val() + '.png')
                });
            //
        };
    //


    /*
     Créer une fonction pour remettre l'avatar à zéro
    */
        function resetAvatar(){
            $('#avatarBody').attr('src', './img/null.png');
            $('#avatarTop').attr('src', './img/top/null.png');
            $('#avatarBottom').attr('src', './img/bottom/null.png');
        };
    //


    /*
    Créer une fonction pour les statistiques de la ville
    */
        function townStats(){
            // Créer un objet pour la ville
            var myTown = {
                totalSims: 0,
                totalGirls: 0,
                totalBoys: 0,
                average: 0
            };
        };
    //















}); // Fin de chargement du DOM