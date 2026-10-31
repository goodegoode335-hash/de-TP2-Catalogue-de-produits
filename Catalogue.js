
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires",  prix: 120, stock: 5 },
  { id: 2, nom: "Souris",  categorie: "Accessoires",  prix: 80,  stock: 8 },
  { id: 3, nom: "Écran",   categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque",  categorie: "Accessoires",  prix: 240, stock: 3 }
];
function affichercatalogue (catalogue){
    catalogue.forEach(produits =>{
        console.log(`ID : ${produits.id}, Nom : ${produits.nom},Categorie : ${produits.categorie}, Prix : ${produits.prix}, Stock : ${produits.stock}`);
    })
}
affichercatalogue(produits);
const produitsdisponibles = produits.filter(produits => produits.stock > 0);
console.log(`Nomdre de produits disponible : ${produitsdisponibles.length}`);
console.log("Produits disponibles :" , produitsdisponibles);


const valeurtotalestock = produits.reduce((total, produit) => {
  return total + (produit.prix * produit.stock);
}, 0);
console.log(`Valeur totale du stock : ${valeurtotalestock} MAD`);

  let produitmoinsCher;
if (produitsdisponibles.length > 0) {
produitmoinsCher = produitsdisponibles.reduce((min, produit) => {
    return produit.prix < min.prix ? produit : min;
  });
  
  console.log(`Produit disponible le moins cher : ${produitmoinsCher.nom} (${produitmoinsCher.prix} MAD)`);
} else {
  console.log("Aucun produit n'est disponible.");
}

const resumeproduits = produits.map(produit => {
    return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unites`;
});
console.log(resumeproduits);

const estValide = (produit) => {
  return (
    typeof produit.prix === 'number' && Number.isFinite(produit.prix) && produit.prix >= 0 &&
    typeof produit.stock === 'number' && Number.isFinite(produit.stock) && produit.stock >= 0
  );
};
const {id, nom, prix, stock } = produitmoinsCher;
console.log(`Produit le moins cher : ${nom}, Prix : ${prix} MAD, Stock : ${stock}`);
