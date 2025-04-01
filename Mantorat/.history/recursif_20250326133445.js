// let answer = 100;

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// function isPalindrome(chaine){
//   let chaineInverser = chaine.toLowerCase().split("").reverse().join("");
//   if(chaine === chaineInverser){
//     console.log(chaine + " est un palindrome")
//   }else{
//     console.log(chaine + " n'est pas un palindrome")
//   } return;
// }
// isPalindrome("A man, a plan, a canal, Panama!");  // true
// isPalindrome("hello");  // false
// isPalindrome("madam"); //true
// isPalindrome("radar");         // true
// isPalindrome("hello");         // false
// isPalindrome("Aba");           // true (insensible à la casse)
// isPalindrome("No lemon, no melon!");  // true (en ignorant la ponctuation et les espaces)

// function trouverIndice(tableau, cible){
//   for(let i = 0; i < tableau.length; i++){
//     for(let j = i+1; j < tableau.length; j++)
//       if(tableau[i]+tableau[j] === cible){
//         console.log([i, j]);
//       }
//     } 

//   }

// const tableauInput =[2, 7, 11, 15];
// const cible = 9;
// trouverIndice(tableauInput, cible)

// function inverserChaine(chaine){
//   let chaineInverse = chaine.split("").reverse().join("");
//   console.log(chaineInverse)
// }
// inverserChaine("hello")

// function trouverSommeMaximale(tableau){
//   let sumMax = [0];
//   let sumCourant = 0;
//   for(let i = 0; i < tableau.length; i++){
//     sumCourant += tableau[i];
//     if (sumCourant > sumMax){
//        sumMax = sumCourant
//     }
//     if(sumCourant < 0){
//         sumCourant = 0;
//     }

//   }
//   return sumMax;
// }
// const tableauInput2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(trouverSommeMaximale(tableauInput2))

function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i: number = 1; i <= n; i++) {
    let output = '';  // Variable pour stocker le résultat de chaque itération

    if (i % 3 === 0) output += "Fizz";  // Ajouter "Fizz" si divisible par 3
    if (i % 5 === 0) output += "Buzz";  // Ajouter "Buzz" si divisible par 5

    // Si output est vide, cela signifie qu'on n'a pas ajouté "Fizz" ni "Buzz", donc on ajoute le nombre
    result.push(output || i.toString());
  }

  return result;
}

// Appel de la fonction et stockage du résultat
const tableauResultat: string[] = fizzBuzz(100);

// Affichage des résultats dans la console
console.log(tableauResultat);
