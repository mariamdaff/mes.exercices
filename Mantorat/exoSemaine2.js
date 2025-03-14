// function sommation(n){  // methode avec cette formule qui est plus rapide 
//     //return n * (n + 1) / 2;  
//     if (n == 1) return 1;  // methode recursive
//   return n + sommation(n - 1);   
// }
// console.log(sommation(4))
// console.log(sommation(10))
// console.log(sommation(2))

// function afficherNombrDecroissant(n) {
//     if (n <= 0) {
//         console.log("Fini !");
//         return;
//     }
//     console.log(n);
//     afficherNombrDecroissant(n - 1);
// }

// afficherNombrDecroissant(3);
// afficherNombrDecroissant(6);
// afficherNombrDecroissant(7);
// afficherNombrDecroissant(2);
// afficherNombrDecroissant(7);
// afficherNombrDecroissant(2);


function mystery(n) {
    if (n <= 1) {
        return n;
    };
    
    mystery(n-1) + mystery(n-2);

}

console.log(mystery(5));
//console.log(mystery(12));
