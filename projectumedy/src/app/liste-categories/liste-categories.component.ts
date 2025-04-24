import { Component, OnInit } from '@angular/core';
import { Categorie } from '../modules/categorie.model';
import { ProduitService } from '../servives/produit.service';
import { CommonModule } from '@angular/common';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [CommonModule, UpdateCategorieComponent],
  templateUrl: './liste-categories.component.html',
  styles: ``
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { "idCat": 0, "nomCat": "", "descriptionCat" : ""};

  ajout: boolean = true;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listCategorie().
      subscribe(cats => {
        this.categories = cats;
        console.log(cats);
      });
  }

  categorieUpdated(cat: Categorie) {
    console.log("Cat updated event", cat);
    this.produitService.addCategorie(cat).
      subscribe(() => this.chargerCategories());
  }

  chargerCategories() {
    this.produitService.listCategorie().
      subscribe(cats => {
        this.categories = cats;
        console.log(cats);
      });
  }

  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;

  }



}
