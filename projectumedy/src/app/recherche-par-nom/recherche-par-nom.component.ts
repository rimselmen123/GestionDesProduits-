import { Component, OnInit } from '@angular/core';
import { Produit } from '../modules/produit.model';
import { Categorie } from '../modules/categorie.model';
import { ProduitService } from '../servives/produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from "../search-filter.pipe";

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  produits!: Produit[];
  allproduits : Produit[]=[];
  nomProduit!: string;
  IdCategorie!: Number;
  categories!: Categorie[];
  searchTerm!: string;
  constructor(private Produitservice : ProduitService){};
  ngOnInit(): void {
    this.Produitservice.listeProduit().subscribe(pr=>{
      this.produits=pr;
    });
  }
/*   rechercherProds(){
    if(this.nomProduit)
    {
      this.Produitservice.rechercheparnom(this.nomProduit).subscribe(p => {
        this.produits = p;
      });
    }
    else
    {
      this.Produitservice.listeProduit().subscribe(prods => {
        this.produits = prods;});
    }
    console.log("rayentztaz");
  }
 */
  onKeyUp(filterText: string) {
    this.produits = this.allproduits.filter(item =>//filter d'un  array de all produits pour avoir des elemnts comme  on ecrit  dans l input i vas remplir leproduits par les ements qil  sont dans l iput
      item.nomProduit.toLowerCase().includes(filterText.toLowerCase())
    );
    console.log(this.produits);
  }
  //methode de filtration  par la methode #keyup

}
