const bonnesCouleurs = ["bleu", "jaune", "rouge", "vert"];
function verifierProposition(proposition){
    for(let i = 0; i < proposition.length; i++){
        let couleurATester= proposition[i]
        
    }

}
function isCouleurValide(couleur){
    //verfier si une couleur est valide
    for(let i= 0; i< bonnesCouleurs.length; i++){
        if(couleur === bonnesCouleurs[i]){
            return true
        }
       
    }
    return false
}

console.log(isCouleurValide("rouge"))
console.log(isCouleurValide("blanc"))
const proposition = ["rouge","jaune"];
const proposition2 = ["noire","jaune"]
 console.log(verifierProposition(proposition))
console.log(verifierProposition(proposition2))