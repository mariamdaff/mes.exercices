function afficherDossier(mesDossiers){
    console.log(mesDossiers.dossiernom);
    for(let i=0; i< mesDossiers.sousdossier[i].dossiernom.length;i++){
        console.log(afficherDossier(mesDossiers.sousdossier[i].dossiernom));
    }
}

var mesdocuments={
    dossiernom : "Mes Documents",
    sousdossier :[
        {
            dossiernom : "Projets"
        },
        {
            dossiernom : "Admin",
            sousdossier :[
                            {
                                dossiernom : "Facture",
                            },
                            {
                                dossiernom : "Contrat",
                            }
                        ]
        }
    ]
}
 console.log(afficherDossier(mesdocuments));