import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../modules/produit.model';
import { ProduitService } from '../servives/produit.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Categorie } from '../modules/categorie.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule,CommonModule],
  standalone : true,
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit
{

  produitt :Produit= new Produit();
  categories! : Categorie[];
  newid_cat! : number ;
  newcategorie!: Categorie;
  msg? : string;
  activatedRoute: any;
  constructor(private ProduitService: ProduitService , private router : Router){
  }
  ngOnInit(): void {
      this.ProduitService.listCategorie().subscribe(cat=>{
      console.log("hawino  zebi  kbir  yamarwen "+ cat);
      this.categories=cat;
    });
    this.ProduitService.consulterCategorie(this.newid_cat).subscribe(prod => { this.newcategorie = prod; });
    this.produitt.categorie = this.newcategorie;
  }
  addproduit( )
  {
      this.ProduitService.consulterCategorie(this.newid_cat).subscribe(cat => {
      this.newcategorie = cat;
      this.produitt.categorie = this.newcategorie;
      this.ProduitService.addeproduit(this.produitt).subscribe(prods =>{
      console.log(prods);
      this.produitt=prods;
      this.router.navigate(['produits']);
      });
    });

    //this.newcategorie=this.ProduitService.consulterCategorie(this.newid_cat); //ajouter un neveau categories
    //this.produitt.categorie=this.newcategorie; // affecter a la produit la nouvelle categorie qui vous  cree
    /*this.ProduitService.addeproduit(this.produitt);
    console.log(this.produitt);
    this.msg="le produit  " + this.produitt.produit_id  +  " ajouter avec succes !";
    this.route.navigate(['produits'])*/
  }
}
