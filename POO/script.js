class Film {
    constructor(titre, dateDeSortie, realisateur, categorie) {
      this.titre = titre;
      this.dateDeSortie = dateDeSortie;
      this.realisateur = realisateur;
      this.categorie = categorie
    }
  }
  
  class Realisateur {
    constructor(nom, prenom, dateDeNaissance){
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance; 
        this.age = this.calculerAge() 
    }
        calculerAge(){
          const anneeActuelle = new Date().getFullYear();
          return anneeActuelle-this.dateDeNaissance
          
        }
  }

  class Categorie{
    constructor(name, type){
    this.name = name;
    this.type = type
    }
}

// @TODO ajouter les types d la categorie peut etre avoir une classe categorieType

class Client {
  constructor(clientNom, clientPrenom){
    this.clientNom = clientNom ;
    this.clientPrenom =clientPrenom ;
    this.filmLoues = []
  }
      louerfilm(film1){
        this.filmLoues.push(film1)
        console.log(`${this.clientPrenom} ${this.clientNom} a loué le film "${film1.titre}".`);
      }

      afficherFilmLoues(){
        if(this.filmLoues.length === 0){
          console.log(`${this.clientPrenom} ${this.clientNom} n'a pas loué de film`);
        }else{
          console.log(`${this.clientPrenom} ${this.clientNom} a loué les films suivants :`);
          this.filmLoues.forEach((film)=>{
          console.log(`- ${film.titre} (${film.dateDeSortie})`)
        })
            
          
        }
  }
}
      
// @TODO ajouter les types d la categorie peut etre avoire une classe categorieType

  const client1 = new Client ( "DAFF", "Mariam");
  const client2 = new Client ("BAH", "Fatoumata Binta");
  const client3 = new Client ("BAH", "Ibrahim");


  const realisateur1 = new Realisateur("Justine", "Triet", 1978);
  const categorie1 = new Categorie("Drame","Fictionnelle")
  const film1 = new Film("Anatomie d’une chute", 2023, realisateur1, categorie1);

  const realisateur2 = new Realisateur("Chloé", "Zhao", 1982);
  const categorie2 = new Categorie("Histoire", "Documentaire")
  const film2 = new Film("Nomadland", 2020, realisateur2, categorie2); 

  const realisateur3 = new Realisateur("Greta", "Gerwig", 1983);
  const categorie3 = new Categorie("Comedie","Fictionnelle")
  const film3 = new Film("Barbie", 2023, realisateur3, categorie3);

  const realisateur4 = new Realisateur("Sofia", "Coppola", 1971);
  const categorie4 = new Categorie("Comedie","Fictionnelle")
  const film4 = new Film("Lost in Translation", 2003, realisateur4, categorie4);


   

  function afficherFilm(film1) {
   return `Le film "${film1.titre}" est sorti en ${film1.dateDeSortie}, réalisé par ${film1.realisateur.prenom} ${film1.realisateur.nom} âgé de  ${film1.realisateur.age} ans. Il est de la catégorie "${film1.categorie.name}" de type ${film1.categorie.type}.`;
}

  console.log (afficherFilm(film1));
  console.log (afficherFilm(film2));
  console.log (afficherFilm(film3));
  console.log (afficherFilm(film4));

  client1.louerfilm(film1);
  client1.louerfilm(film3);
  client1.louerfilm(film4);

  client2.louerfilm(film2);
  client2.louerfilm(film4);

  client3.louerfilm(film1);
  client3.louerfilm(film4);

// Affichage des films loués
client1.afficherFilmLoues();
client2.afficherFilmLoues();
client3.afficherFilmLoues()



 
 
