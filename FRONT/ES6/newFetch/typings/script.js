// Créer les variables globales
const mainContent = document.querySelector(`#mainContent`);
const apiLink = `http://digitalworkshop.fr/wp-json/wp/v2/posts`;

// Créer une fonction pour traiter le résultat de la requêtes
const appendContentToHtml = (dataParam, parentTag) => {
    // Le paramètre dataParam est un tableau d'objets (flux JSON)
    for( let item of dataParam ){
        // Afficher l'objet dans la console
        console.log(item);

        // Vérifier que le titre n'est pas égale à 'test'
        if( item.title.rendered != `test` ){
            
            // Ajouter les balises dans le DOM
            parentTag.innerHTML += `
                <section>
                    <h2>${item.title.rendered}</h2>
                    <article>${item.excerpt.rendered}</article>
                </section>
            `
        } 
    };
};

// Créer une fonction pour éxécuter une requête asynchrone
const asyncLoadFunction = url => {

    /*
    Configuration de la requête Fetch
    */
        fetch( url ).then( data => {

            // Vérifier si les données sont bien présentent
            if( data.ok ){
                // Intégration du système de Promise pour renvoyer les données
                return Promise.resolve(data);

            } else{
                // Les données sont absentes
                return Promise.reject( new Error(`Problème de chargement`) );
            };
        })
    //

    /*
    Si la requête à fonctionnée
    */
        // Formater le résultat en JSON
        .then( data => data.json() )

        // Utiliser les données au format JSON
        .then( data => appendContentToHtml(data, mainContent) )
    //

    /*
    Si la requête n'à pas fonctionnée
    */
        .catch( error => console.log(error) );
    //
};

/* 
Appeler la fonction
*/
    asyncLoadFunction(apiLink);
//