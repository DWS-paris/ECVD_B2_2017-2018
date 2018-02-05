"use strict";

// Créer les variables globales
var mainContent = document.querySelector("#mainContent");
var apiLink = "http://digitalworkshop.fr/wp-json/wp/v2/posts";

// Créer une fonction pour traiter le résultat de la requêtes
var appendContentToHtml = function appendContentToHtml(dataParam, parentTag) {
    // Le paramètre dataParam est un tableau d'objets (flux JSON)
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = dataParam[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            // Afficher l'objet dans la console
            console.log(item);

            // Vérifier que le titre n'est pas égale à 'test'
            if (item.title.rendered != "test") {

                // Ajouter les balises dans le DOM
                parentTag.innerHTML += "\n                <section>\n                    <h2>" + item.title.rendered + "</h2>\n                    <article>" + item.excerpt.rendered + "</article>\n                </section>\n            ";
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    ;
};

// Créer une fonction pour éxécuter une requête asynchrone
var asyncLoadFunction = function asyncLoadFunction(url) {

    /*
    Configuration de la requête Fetch
    */
    fetch(url).then(function (data) {

        // Vérifier si les données sont bien présentent
        if (data.ok) {
            // Intégration du système de Promise pour renvoyer les données
            return Promise.resolve(data);
        } else {
            // Les données sont absentes
            return Promise.reject(new Error("Probl\xE8me de chargement"));
        };
    })
    //

    /*
    Si la requête à fonctionnée
    */
    // Formater le résultat en JSON
    .then(function (data) {
        return data.json();
    })

    // Utiliser les données au format JSON
    .then(function (data) {
        return appendContentToHtml(data, mainContent);
    })
    //

    /*
    Si la requête n'à pas fonctionnée
    */
    .catch(function (error) {
        return console.log(error);
    });
    //
};

/* 
Appeler la fonction
*/
asyncLoadFunction(apiLink);
//