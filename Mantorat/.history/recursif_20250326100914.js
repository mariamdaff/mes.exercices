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
isPalindrome("A man, a plan, a canal, Panama!");  // true
isPalindrome("hello");  // false
isPalindrome("madam");