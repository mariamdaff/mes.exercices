//Développement de fonction
//exo 1
function bonjour(){
    console.log("hello Word");
}
bonjour();

//exo 2
function somme(a, b){
    if(!isNaN(a && b)){
    console.log(`La somme de ${a} et de ${b} est ${a+b}`);
    }else{
        console.log("Tous les paramètres doivent être des nombres")
    }
}
somme(1, 2);
somme(0, 3);
somme(234, 83);
somme(1, "bonjour");

//exo3
function estPair(n){
    const result = n % 2;
    if(result == 0){
        console.log(n + " est pair");
    }else{
        console.log(n + " est impair" );
    }
}
estPair(1);
estPair(6);
estPair(2345);

//exo 4
function max(a, b, c){
   // const comparatif = 100;
  
   // console.log("Le plus grand nombre est "+ plusGrandNombre);
    return Math.max(a, b, c);
//     if(plusGrandNombre <= comparatif){
//         console.log(true);
//     }else{
//         console.log(false);
//   }
}
max(1, 6, 3);
max(135432, 354, 2344);
max(0, 0, 0);
max(6, 6, 3);

//Analyse d’Algorithme
// //Exercice 1
function choix(nombre) {
    if (nombre < 10) {
        console.log(nombre +" Plus petit que 10");
    }
    if(nombre >= 10 && nombre <= 20){
        console.log(nombre+ "compris entre 10 et 20" );
    }
    if (nombre > 20) {
        console.log(nombre +" Plus grand que 20");
    }
}

choix(2);      // 2 Plus petit que 10
choix(23);     // 23 plus grand que 20
choix(8);      // 8 Plus petit que 10
choix(10);     // 
choix(12);     //
choix(34);     // 34 plus grand que 20
choix(14);     //
choix(0);      // 0 plus petit que 10
choix(20);     //

//Exercice 2
function choix2(n) {
    if (n < 10) {
        console.log(n +" Plus petit que 10")
    }
    if (n > 20) {
        console.log(n +" Plus grand que 20")
    }
    if(n <5){
        console.log(n +" Plus petit que 5")
    }
}

choix2(2)     // 2 Plus petit que 10 
choix2(23)    // 23 Plus grand que 20
choix2(8)     // 8 Plus petit que 10
choix2(10)    // 10 Plus petit que 5
choix2(12)    // 12 Plus petit que 5
choix2(34)    // 34 Plus grand que 20
choix2(14)    // 14 Plus petit que 5
choix2(0)     // 0 Plus petit que 10
choix2(20)    // 20 Plus petit que 10

// EXercice 3
function A() {
    console.log("Début A");
    B();
    console.log("Fin A");
}

function B() {
    console.log("Début B");
    C();
    console.log("Fin B");
}

function C() {
    console.log("Début C");
    console.log("Fin C");
}

A(); 
/* attendu dans la console
Début A
Début B
Début C
Fin C
Fin B
Fin A*/

// // Exercice 4
// function A(x) {
//     console.log("Début A avec x =", x);
//     if (x > 5) {
//         B(x - 2);
//     } else {
//         C(x + 3);
//     }
//     console.log("Fin A avec x =", x);
// }

// function B(y) {
//     console.log("Début B avec y =", y);
//     if (y % 2 == 0) {
//         C(y / 2);
//     } else {
//         A(y + 1);
//     }
//     console.log("Fin B avec y =", y);
// }

// function C(z) {
//     console.log("Début C avec z =", z);
//     if (z < 3) {
//         console.log("Cas spécial dans C");
//     } else {
//         A(z - 1);
//     }
//     console.log("Fin C avec z =", z);
// }
// //L'algorithme etant beaucoup plus compliqué, tu peux verifier le resultat de ces deux lignes séparément
// A(6);
// A(12);

//Exo de developpement pour aller plus loin
// fonction qui compte le nombre de voyelles dans une fonction 
function compterVoyelles(chaines){
    let tableauDeCaractere = chaines.toLowerCase().split('');
    let estVoyelle = 0;
    tableauDeCaractere.forEach(caractere =>{
        if(caractere == "a" ||caractere == "e" ||
            caractere == "i" ||caractere == "o" || 
            caractere == "u" ||caractere == "y"){
             estVoyelle ++
         }
        //  tableauDeCaractere.forEach(caractere => {
        //     if ("aeiouy".includes(caractere)) {
        //         estVoyelle++;
        //     }
    });
    console.log("Le nombre de voyelles dans " + chaines + " est " + estVoyelle);
       
}
compterVoyelles("bonjour");
compterVoyelles("hello");
compterVoyelles("Je m'appelle Ada Lovelace");

// fonction pour inverser une chaine de caracteres
function inverser(chaine){
    let chaineInverse =  chaine.split('').reverse().join('');
    console.log(chaineInverse);
}
inverser("bonjour");
inverser("hello");
inverser("Je m'appelle Ada Lovelace");

// Ecrire une fonction factorielle recursive
function factorielle(n){
    return (n != 1) ? n * factorielle(n - 1) : 1;  
}
console.log(factorielle(4));
console.log(factorielle(10));
console.log(factorielle(2));

/*Crée une fonction tableMultiplication(n) qui affiche la table de multiplication de n 
(ex: tableMultiplication(5) affiche 5x1, 5x2... jusqu’à 5x10)*/
function tableMultiplication(n){
    for(let multiple = 1; multiple < 11; multiple++){
        console.log(` ${n} x ${multiple} = ${n*multiple}`)
    }
}
tableMultiplication(5);
tableMultiplication(9);

/*Écris une fonction filtrerNombresPairs(tableau) qui prend un tableau de nombres et retourne un tableau contenant 
uniquement les nombres pairs*/
function filtrerNombresPairs(tableau) {
    
console.log("Les nombres pairs de mon tableau sont: " +tableau.filter(nombre => nombre % 2 === 0));
return tableau.filter(nombre => nombre % 2 === 0);
}
filtrerNombresPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);





/*Définis une fonction compose(f, g, x) qui applique successivement deux fonctions f et g à une valeur x
 (ex: compose(Math.sqrt, Math.abs, -16) doit retourner 4).*/











