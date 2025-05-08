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
  let chaineInverser = chaine.split("").reverse().join("");
  if(chaine === chaineInverser){
    console.log(chaine + " est un palindrome")
  }else{
    console.log(chaine + " n'est pas un palindrome")
  }
}
//console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("madam"));