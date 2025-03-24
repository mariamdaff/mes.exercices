//Ecris une fonction compter(n) qui contiens une boucle qui afficher les nombres de 1 à n
function compter(n){
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
  //@TODO J'arrive pas à utiliser return   
}
compter(5);

//Ecris fonction  pair(chaine) qui contiens une boucle qui afficher les nombres pair de 1 à n (n étant passé en paramètre)
function pair(n){
    for(let j = 1; j <= n; j++){
        if(j % 2 === 0){
            console.log(j +" est un nombre paire.")
        }
    }
}
pair(10);

// Ecris fonction  afficherTableau(array)  qui affiche tout le contenu d’un tableau passé en paramètre

function afficherTableau(array){
    for(let i= 0; i < array.length; i++){  //@ revoir cette histoire < et <=;
        console.log(array[i]);
    }
}
let fruits = ['Pomme', 'Banane', 'Cerise'];
afficherTableau(fruits );
let vehicules = ['Avion', 'Vélo', 'Train', 'Bateau'];
afficherTableau(vehicules );

//Ecris fonction  compterVoyelles(chaine)  qui compte les voyelles dans une chaîne
function compterVoyelles(chaine) {
    let nombreDeVoyelles = 0;
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    chaine.toLowerCase().split('').forEach(lettre => {
        if (voyelles.includes(lettre)) {
            nombreDeVoyelles++;
        }
    });
    
    return "Nombre de voyelles est de: " + nombreDeVoyelles;
}

console.log(compterVoyelles("Bonjour tout le monde"));

//Ecris fonction  plusGrand(array)  qui trouve le plus grand nombre dans un tableau
function plusGrand(array){
   let lePlusGrandNombre = Math.max(...array);
   return lePlusGrandNombre;
}
let numbers = [12, 45, 67, 89, 34];
console.log(plusGrand(numbers));
let numbers2 = [38, 103, 2, 29, 2, 57];
 console.log(plusGrand(numbers2));

 //Ecris fonction  plusGrand(array)  qui trouve le plus grand nombre dans un tableau avec une boucle
 function plusGrandAvecBoucle(array){
    let plusGrandNombre= array[0];
   for(let i = 0; i < array.length; i++){
    if(array[i] > plusGrandNombre){
        plusGrandNombre =array[i];     
    }
 }
   return plusGrandNombre;
}

 let numbers3 = [12, 45, 67, 89, 34];
console.log( "le plus grand nombre du tableau "+ plusGrandAvecBoucle(numbers3));
let numbers4 = [38, 103, 2, 29, 2, 57];
 console.log( "le plus grand nombre du tableau "+ plusGrandAvecBoucle(numbers4));

//Ecris fonction  tri(chaine)  qui trie un tableau passé en paramètre par en ordre croissant et le retourne.
//  Puis utilise la fonction afficherTableau(array)pour 

function tri(chaine){
    // chaine.sort((a, b) => a-b);
    // afficherTableau(chaine)
    // return "trier par ordre croissant "+chaine;
    let NombreDecroissant = chaine[0];
   for(let i = 0; i < chaine.length; i++){
    NombreDecroissant = chaine[i]
           
   } 
   console.log("Trier par ordre decroissante "+ NombreDecroissant ); 
}
let unsorted = [5, 3, 8, 1, 2]
tri(unsorted);

//Mthode avec boucle de la function tri
function triBoucle(chaine){
    chaine.sort((a, b) => a-b);
    afficherTableau(chaine)
    return "trier par ordre croissant "+chaine;

}
let unsorted2 = [5, 3, 8, 1, 2]
triBoucle(unsorted2);

//Ecris fonction  inverser(chaine)  qui inverse une chaine de charactère
function  inverser(chaine) {
    return chaine.split(""). reverse(). join("");
}
 console.log(inverser("JavaScript"));

//Ecris fonction  palindrome(chaine)  qui vérifie si un mot est un palindrome
function palindrome(chaine) {
//    return inverser(chaine) ===chaine;
let inverse = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        inverse += chaine[i];
    }
    return inverse;
}

function afficheSiPalindrome(chaine){
    if(palindrome(chaine)){
        return chaine + " est un palindrome";
    }else{
        return chaine + " n'est pas un palindrome";

    } 
}
console.log(afficheSiPalindrome('radar'));
console.log(afficheSiPalindrome('bonjour'));

//Ecris fonction  `supprimerDoublon(chaine)`  qui supprime les doublons d'un tableau
     //@TODO le faire avec des boucles
function supprimerDoublon(chaine){
    let tableauSansDoublon =  [...new Set(chaine)];
   return tableauSansDoublon
}
let array = [1, 2, 2, 3, 4, 4, 5];
console.log(supprimerDoublon(array));

//Ecris fonction  anagrammes(chaine1, chaine2)  qui vérifie si deux chaînes sont des anagrammes
function anagrammes(chaine1, chaine2) {

    let chaineConvertie1 = chaine1.toLowerCase().split("").sort().join("");
    let chaineConvertie2 = chaine2.toLowerCase().split("").sort().join("");
    
    if (chaineConvertie1 === chaineConvertie2) {
        return `"${chaine1}" et "${chaine2}" sont des anagrammes`;
    } else {
        return `"${chaine1}" et "${chaine2}" ne sont pas des anagrammes`;
    }
}

console.log(anagrammes('fleurs', 'nuages'));
console.log(anagrammes('listen', 'silent'));

//L’exercice ici vas être d’analyser un algorithme. Je te fournis du code, et je voudrais que tu essaye 
// de deviner ce qui vas être écris dans la console sans exécuter le code . 
let compteur = 2;
for (let i = 1; i <= 8; i++) {
    console.log(`Valeur actuelle : ${compteur}`);
    compteur *= 2;
}
/*Attendu dans la console 
Valeur actuelle : 2
Valeur actuelle : 4
Valeur actuelle : 8
Valeur actuelle : 16
Valeur actuelle : 32
Valeur actuelle : 64
Valeur actuelle : 128
Valeur actuelle : 256


*/
 //Exo 2

for (let i = 1; i <= 7; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne += j * i + " ";
    }
    console.log(ligne.trim());
}
/* Attendu dans la console
1
2 4
3 6 9
4 8 12 16
5 10 15 20 25
6 12 18 24 30 36
7 14 21 28 35 42 49

*/
 for(let i = 1; i <=3; i++){
    let ligne ="";
    for(let j = 1; j<=12; j++){
        ligne += `${i} x ${j} = ${i*j +" "}\n`;
        
    }
    console.log(`table de multiplication par ${i}`)
    console.log(ligne.trim())
    console.log("-".repeat(20))
 }

