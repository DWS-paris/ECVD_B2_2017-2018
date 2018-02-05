/*
Les variable ES6
*/
    // VAR devient LET
    let username = `Julien`;
    username = `Thomas`;

    // Les variables non-modifiables : const
    const birthYear = 1979;
//


/*
Templating en ES6
*/
    let mainTitle = document.querySelector(`#mainTitle`);

    mainTitle.innerHTML = `
        Bonjour ${username}, vous avez ${2017 - birthYear} ans.
    `
//


/*
Les fonctions fléchées
*/
    const twice = number => console.log(number * 2)
    twice(5);

    // Paramètres optionnels
    const sayHello = (firstname = `Julien`, lastname= `Noyer`) => {
        console.log( `Bonjour ${firstname} ${lastname}.` );
    }
    sayHello(`Pierre`, `Rabhi`);
    sayHello();
//


/*
Le SPREAD parameter
*/
    const userSkills = ( username, ...skills ) => {
        console.log(`Votre nom est ${username}`);
        
        // Le SPREAD parameter est un tableau de données
        for( let item of skills ){
            console.log(item);
        };
    };
    
    userSkills( `Julien`, `HTML`, `CSS`, `Javascript` );
    userSkills( `Abdel`, `PHP`, `SQL` );
    userSkills( `Sophie`, `C++` )
//