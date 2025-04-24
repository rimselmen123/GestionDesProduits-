import { Categorie } from "./categorie.model";

export class Produit {
  idProduit! : Number;
  nomProduit! : string;
  prixProduit!: Number;
  dateCreation! : Date;
  categorie!: Categorie ;
  constructor()
  {
    this.dateCreation = new Date();
  }
}

