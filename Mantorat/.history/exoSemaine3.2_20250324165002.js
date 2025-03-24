const articles = [
    {
      nom: "Chaise en bois",
      prix: 50,
      promotion: true // Indicateur de promotion (true ou false)
    },
    {
      nom: "Lampe LED",
      prix: 15.50,
      promotion: false
    },
    {
      nom: "Table en verre",
      prix: 120.75,
      promotion: true
    },
    {
      nom: "Canapé en cuir",
      prix: 350.00,
      promotion: false
    }
  ];

  const clients = [
    {
      nom: "Lovelace",
      prenom: "Ada",
      points: 250
    },
    {
      nom: "Waston",
      prenom: "Emma",
      points: 150
    },
    {
      nom: "Kébé",
      prenom: "Fatoumata",
      points: 500
    },
    {
      nom: "Spence",
      prenom: "Frances",
      points: 0
    }
  ];

  const commandes = [
    {
      client: "Ada Lovelace",
      produit: "Chaise en bois",
      quantite: 2
    },
    {
      client: "Emma Waston",
      produit: "Lampe LED",
      quantite: 1
    },
    {
      client: "Fatoumata Kébé",
      produit: "Canapé en cuir",
      quantite: 3
    },
    {
      client: "Fatoumata Kébé",
      produit: "Lampe LED",
      quantite: 2
    }
  ];

function afficherProduitEnPromo(tableauDObjet){
    let produitEnPromo = []
   for(let i = 0; i < tableauDObjet.length;i++ ){
    if(tableauDObjet[i].promotion === true){
        produitEnPromo.push(tableauDObjet[i])
    } 
   } return produitEnPromo;
  }
 console.log( afficherProduitEnPromo(articles));

function afficherClientAyantPLusDeDeuxCentPoints(tableauDObjet){
  let clientPoints = []
  for(let i = 0; i < tableauDObjet.length; i++){
    if(tableauDObjet[i].points > 200){
      clientPoints.push(tableauDObjet[i])
    }
  } return clientPoints
 }
console.log(afficherClientAyantPLusDeDeuxCentPoints(clients))

function afficherPoints(nom, clients){
 
  for(let i = 0; i < clients.length; i++){
    if(nom === clients[i].prenom+ " "+clients[i].nom){
      console.log(nom + " a "+clients[i].points + " points .")
      return
   }
  
  }
  console.log(nom + " n'a pas été trouvé dans la liste des clients");
}
afficherPoints('Ada Lovelace', clients)
afficherPoints('Fatoumata Kébé', clients)
afficherPoints('Frances Spence', clients)
afficherPoints('Elizabeth Feinler', clients)

function afficherTotal(nom, clients){
  let total = 0;
  let commandeClt =[];
for(let i = 0; i < commandes.length; i++){
  if(commandes[i].client===nom){
    commandeClt.push({ produit: commandes[i].produit, quantite: commandes[i].quantite });
  }
}

for(let j = 0; j < commandeClt.length; j++){
  for(let k = 0; k < articles.length; k++ ){
    if(commandeClt[j].produit === articles[k].nom){
      total += articles[k].prix * commandeClt[j].quantite
    }
    
  }
}   return total;

}
console.log(afficherTotal("Fatoumata Kébé", commandes))

function afficherTotal2(nom, clients){
  let total = 0;
  let commandeClt =[];
for(let i = 0; i < commandes.length; i++){
  if(commandes[i].client===nom){
    commandeClt.push({ produit: commandes[i].produit, quantite: commandes[i].quantite });
  }
}

for(let j = 0; j < commandeClt.length; j++){
  for(let k = 0; k < articles.length; k++ ){
    if(commandeClt[j].produit === articles[k].nom){
      total += articles[k].prix * commandeClt[j].quantite
    }
    
  }
}   return total;

}
console.log(afficherTotal2(clients, commandes))

