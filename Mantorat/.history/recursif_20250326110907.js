let answer = 100;

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

function isPalindrome(chaine){
  let chaineInverser = chaine.toLowerCase().split("").reverse().join("");
  if(chaine === chaineInverser){
    console.log(chaine + " est un palindrome")
  }else{
    console.log(chaine + " n'est pas un palindrome")
  } return;
}
isPalindrome("A man, a plan, a canal, Panama!");  // true
isPalindrome("hello");  // false
isPalindrome("madam"); //true
isPalindrome("radar");         // true
isPalindrome("hello");         // false
isPalindrome("Aba");           // true (insensible à la casse)
isPalindrome("No lemon, no melon!");  // true (en ignorant la ponctuation et les espaces)

function trouverIndice(tableau, cible){
  let indice =[];
  for(let i = 0; i < tableau.length; i++){
    for(let j = i+1; j < tableau.length; j++)
      if(tableau[i]+tableau[j] === cible){
        console.log(indice.push(i, j))
      }
    }

  }

const tableauInput =[2, 7, 11, 15];
const cible = 9;
trouverIndice(tableauInput, cible)