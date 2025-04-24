import { Component, OnInit } from '@angular/core';
import { Produit } from '../modules/produit.model';
import { Categorie } from '../modules/categorie.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../servives/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  IdCategorie!: Number;
  categories!: Categorie[];
  constructor(private Produitservice : ProduitService){};
  ngOnInit(): void {
    this.Produitservice.listCategorie().subscribe(cat=>{
      this.categories=cat
    })
  }
  onChange(){
    this.Produitservice.cherhcerprodbycatid(this.IdCategorie).subscribe(p=>{
      this.produits=p;
      console.log(" hello world");
    });
  }
}
