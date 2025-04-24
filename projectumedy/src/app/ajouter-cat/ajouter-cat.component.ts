import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../modules/categorie.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-cat.component.html',
  styles: ``
})
export class UpdateCategorieComponent implements OnInit {

  @Input()
  categorie!: Categorie;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  @Input()
  ajout!: boolean;



  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ", this.categorie);
  }


  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }


}
