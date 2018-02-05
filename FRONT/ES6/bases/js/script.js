"use strict";

/*
Les variable ES6
*/
// VAR devient LET
var username = "Julien";
username = "Thomas";

// Les variables non-modifiables : const
var birthYear = 1979;
//


/*
Templating en ES6
*/
var mainTitle = document.querySelector("#mainTitle");

mainTitle.innerHTML = "\n        Bonjour " + username + ", vous avez " + (2017 - birthYear) + " ans.\n    ";
//


/*
Les fonctions fléchées
*/
var twice = function twice(number) {
    return console.log(number * 2);
};
twice(5);

// Paramètres optionnels
var sayHello = function sayHello() {
    var firstname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Julien";
    var lastname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Noyer";

    console.log("Bonjour " + firstname + " " + lastname + ".");
};
sayHello("Pierre", "Rabhi");
sayHello();
//


/*
Le SPREAD parameter
*/
var userSkills = function userSkills(username) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log("Votre nom est " + username);

    // Le SPREAD parameter est un tableau de données
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = skills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item);
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

userSkills("Julien", "HTML", "CSS", "Javascript");
userSkills("Abdel", "PHP", "SQL");
userSkills("Sophie", "C++");
//