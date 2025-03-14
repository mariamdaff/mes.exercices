// Exercice 4
function A(x) {
    console.log("Début A avec x =", x);
    if (x > 5) {
        B(x - 2);
    } else {
        C(x + 3);
    }
    console.log("Fin A avec x =", x);
}

function B(y) {
    console.log("Début B avec y =", y);
    if (y % 2 == 0) {
        C(y / 2);
    } else {
        A(y + 1);
    }
    console.log("Fin B avec y =", y);
}

function C(z) {
    console.log("Début C avec z =", z);
    if (z < 3) {
        console.log("Cas spécial dans C");
    } else {
        A(z - 1);
    }
    console.log("Fin C avec z =", z);
}
//L'algorithme etant beaucoup plus compliqué, tu peux verifier le resultat de ces deux lignes séparément
//A(6);
A(12);
