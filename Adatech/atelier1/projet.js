let variablesMessage = "Je sais faire des variables dans mon code "
document.querySelector('p').innerHTML ="je sais faire des variables dans mon code "
function addText(text){
    return text + " et les fonctions!"
}
const prenom =" Mariam "
const tonPrenom =" Ada "
addText(prenom)
addText(tonPrenom)


let nouveauMessage = addText(variablesMessage)
document.querySelector('p').innerHTML = nouveauMessage;

//L'addition

function add(a,b){
    return a + b
}

let number1 = Number(prompt("Entre un premier chiffre")) // Demande à l'utilisateur 
let number2 = Number(prompt("Entre un deuxième chiffre"))

let result = add(number1,number2)
//document.querySelector('h3').innerHTML = result
document.querySelector('h4').innerHTML = "Le resultat de " + number1 +" et "+ number2 + " est " + result


// La soustraction

function sub(a,b){
    return a - b
}
let nombre1 = Number(prompt("Entrez votre premier nombre"))
let nombre2 = Number(prompt("Entrez votre 2ème nombre"))

let resultat = sub(nombre1, nombre2)
document.querySelector('h3').innerHTML = "Le résultat de " + nombre1 + " et " + nombre2 + " est " + resultat 





