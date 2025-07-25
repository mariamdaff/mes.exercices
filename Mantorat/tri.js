/*----------------------- @ Pseudo code algorithme de tri à BULLE---------------------------------
function bubbleSort(tableau){
const n = tableau.length;
parcourir le tableau
Pour i allant de 0 à n - 2
        Pour j allant de 0 à n - i - 2
            Si tableau[j] > tableau[j + 1] alors
                intermediaire ← tableau[j]
                tableau[j] ← tableau[j + 1]
                tableau[j + 1] ← intermediaire
                fin de la condition
             fin de la boucle interne
             fin de la boucle externe
    Afficher  das la console "Tableau trié par la méthode tri à bulle : ", tableau
    Retourner tableau
} Fin Fonction
appel de la function
------------------------------@ ETAPES----------------------------------------
faire une fonction qui prend un parametre un tableau
faire une premiere boucle for
une deuxieme boucle à l'interieur de la premiere
poser une condition de compraison
faire une comparaison et une permutation si necessaire

------------------------@@@@ PSEUDO CODE QUICK SORT-----------------------------------
Fonction quickSort(tableau)
    Si la taille du tableau est inférieure ou égale à 1
        Retourner tableau

    pivot ← premier élément du tableau
    sousTableauGauche ← tableau vide
    sousTableauDroite ← tableau vide

    Pour i allant de 1 à taille(tableau) - 1
        Si tableau[i] < pivot alors
            Ajouter tableau[i] à sousTableauGauche
        Sinon
            Ajouter tableau[i] à sousTableauDroite
        Fin Si
    Fin Pour

    Retourner quickSort(sousTableauGauche) concaténé avec pivot et quickSort(sousTableauDroite)
Fin Fonction
--------------------------------- ETAPES --------------------------------------------------
Déclarer une fonction qui prend un tableau en paramètre

Vérifier la condition de base (si tableau est de taille 0 ou 1)

Choisir un pivot (ici le premier élément)

Créer deux sous-tableaux (gauche et droite)

Parcourir les éléments restants pour les répartir selon le pivot

Appeler récursivement quickSort sur les deux sous-tableaux et les concaténer avec le pivot
*/
const petiteDonneesRandom = [8, -2, 2, 1, 0, 9, 6]
const petiteDonneesOrdonnees = [8, -2, 0, 1, 2, 6, 9] 
const grandesDonneesRandom = [429,74,311,420,212,102,293,487,10,410,395,308,347,130,407,120,122,378,251,458,278,388,326,65,163,231,299,432,48,364,286,181,456,126,271,75,249,78,25,196,81,304,373,7,147,284,216,116,110,164,19,54,70,5,4,259,267,117,489,90,390,442,439,414,151,68,194,156,455,255,18,385,123,157,56,37,419,368,27,468,58,387,335,350,462,15,67,258,322,62,412,29,401,319,158,246,449,128,55,170,314,93,265,300,185,173,343,225,433,411,182,297,204,79,105,352,313,189,478,312,399,497,193,101,203,176,83,192,285,413,274,302,190,188,318,345,49,179,217,139,209,8,333,107,20,66,207,195,281,288,23,261,167,440,341,35,150,415,169,162,206,287,337,400,328,375,144,406,363,237,485,236,262,316,100,392,340,103,447,127,366,423,202,53,381,129,277,353,60,435,135,124,148,438,256,146,47,26,240,226,220,242,197,132,111,403,424,199,16,243,493,428,372,235,40,77,89,405,72,114,149,365,113,228,280,386,362,471,168,434,268,477,396,219,248,417,97,264,131,377,376,92,422,466,479,346,213,11,494,245,140,342,221,119,481,354,143,28,59,63,32,153,499,254,34,361,301,210,445,165,137,13,486,200,244,233,416,315,279,339,208,215,446,463,76,426,252,296,380,184,298,371,142,332,283,329,232,80,152,44,273,310,46,389,223,382,334,484,496,57,134,125,229,172,250,14,266,118,171,96,99,39,22,290,6,159,480,136,393,87,160,52,84,437,218,421,323,12,230,238,257,359,331,263,294,276,465,383,305,370,166,483,178,198,384,82,430,50,38,357,145,108,95,21,309,397,247,470,459,295,24,444,306,452,404,448,86,402,472,253,454,282,492,441,474,205,418,73,41,2,348,358,476,241,469,317,71,227,106,260,211,398,69,338,330,460,457,133,222,191,355,3,495,36,269,270,473,94,461,425,161,498,30,183,239,303,1,31,138,224,121,272,174,344,45,51,9,475,325,491,327,17,488,324,289,88,104,64,367,43,321,356,349,467,379,369,234,443,187,436,112,307,482,490,175,109,275,154,453,91,98,464,180,451,320,186,360,141,450,351,431,409,291,394,155,336,500,177,374,85,214,391,115,42,427,33,61,292,201,408]
const grandesDonneesOrdonnees = [1,10,51,52,53,54,55,56,57,58,59,6,60,61,62,63,64,65,66,67,68,69,7,70,71,72,73,74,75,76,77,78,79,8,80,81,82,83,84,85,86,87,88,89,9,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,11,110,111,112,113,114,115,116,117,118,119,12,120,121,122,123,124,125,126,127,128,129,13,130,131,132,133,134,135,136,137,138,139,14,140,141,142,143,144,145,146,147,148,149,15,150,151,152,153,154,155,156,157,158,159,16,160,161,162,163,164,165,166,167,168,169,17,170,171,172,173,174,175,176,177,178,179,18,180,181,182,183,184,185,186,187,188,189,19,190,191,192,193,194,195,196,197,198,199,2,20,200,201,202,203,204,205,206,207,208,209,21,210,211,212,213,214,215,216,217,218,219,22,220,221,222,223,224,225,226,227,228,229,23,230,231,232,233,234,235,236,237,238,239,24,240,241,242,243,244,245,246,247,248,249,25,250,251,252,253,254,255,256,257,258,259,26,260,261,262,263,264,265,266,267,268,269,27,270,271,272,273,274,275,276,277,278,279,28,280,281,282,283,284,285,286,287,288,289,29,290,291,292,293,294,295,296,297,298,299,3,30,300,301,302,303,304,305,306,307,308,309,31,310,311,312,313,314,315,316,317,318,319,32,320,321,322,323,324,325,326,327,328,329,33,330,331,332,333,334,335,336,337,338,339,34,340,341,342,343,344,345,346,347,348,349,35,350,351,352,353,354,355,356,357,358,359,36,360,361,362,363,364,365,366,367,368,369,37,370,371,372,373,374,375,376,377,378,379,38,380,381,382,383,384,385,386,387,388,389,39,390,391,392,393,394,395,396,397,398,399,4,40,400,401,402,403,404,405,406,407,408,409,41,410,411,412,413,414,415,416,417,418,419,42,420,421,422,423,424,425,426,427,428,429,43,430,431,432,433,434,435,436,437,438,439,44,440,441,442,443,444,445,446,447,448,449,45,450,451,452,453,454,455,456,457,458,459,46,460,461,462,463,464,465,466,467,468,469,47,470,471,472,473,474,475,476,477,478,479,48,480,481,482,483,484,485,486,487,488,489,49,490,491,492,493,494,495,496,497,498,499,5,50,500]

function bubbleSort(tableau){
    const n = tableau.length;
    
    for(let i = 0; i < n -1; i++){
            for(let j = 0; j < n - i -1; j++){
                if(tableau[j] > tableau[j+1]){
                let intermediaire = tableau[j];
                tableau[j] = tableau[j+1];
                tableau[j+1] = intermediaire;
            }
        }
    } return tableau;
}
bubbleSort(petiteDonneesRandom)
bubbleSort(petiteDonneesOrdonnees)
bubbleSort(grandesDonneesRandom)
bubbleSort(grandesDonneesOrdonnees)


function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    const pivot = array[Math.floor(array.length / 2)];
    let sousTableauDeGauche = [];
    let sousTableauDeDroite = [];
    for(let i = 1; i < array.length; i++){
        array[i] < pivot ? sousTableauDeGauche.push(array[i]) : sousTableauDeDroite.push(array[i]);
    }
     
    return quickSort(sousTableauDeGauche).concat(pivot, quickSort(sousTableauDeDroite))
}

console.log(quickSort(petiteDonneesRandom))
console.log(quickSort(petiteDonneesOrdonnees))
console.log(quickSort(grandesDonneesRandom))
console.log(quickSort(grandesDonneesOrdonnees))



