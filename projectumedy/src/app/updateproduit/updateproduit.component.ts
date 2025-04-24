import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../servives/produit.service';
import { Produit } from '../modules/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../modules/categorie.model';

@Component({
  selector: 'app-updateproduit',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './updateproduit.component.html',
})
export class UpdateproduitComponent implements OnInit {
  curentp : Produit = new Produit();
  categories!: Categorie[];
  updateidcat! : Number ;
  //router c'est bilio qui  est  proteje les routes  et utilisation  des API
  constructor(private produitService: ProduitService , private activatedRoute : ActivatedRoute , private router : Router  ){

  }
  ngOnInit(): void {
    this.produitService.listCategorie().subscribe(cat=>{
      this.categories=cat;
      console.log("cat::" +cat);
    })
    this.produitService.consulterproduit(this.activatedRoute.snapshot.params['id']).subscribe(prod=>
    {this.curentp=prod;
      console.log("pazpaz"+prod);
      this.updateidcat=this.curentp.categorie.idCat;
    });
    //this.categories=this.produitService.listCategorie();
    //this.curentp = this.produitService.consulterproduit(this.activatedRoute.snapshot.params['id']);
    //this.updateidcat=this.curentp.categorie.id_cat;
    }
  updateproduit()
  {
    this.curentp.categorie=this.categories.find(cat=>cat.idCat == this.updateidcat)!;
    /*  this.produitService.consulterCategorie(this.updateidcat).subscribe(cat=>{
      this.curentp.categorie=cat;
      console.log("lec catkout est = "+ cat);
    }); */
    //this.curentp.categorie=this.produitService.consulterCategorie(this.updateidcat);
    //this.curentp.categorie = this.produitService.consulterCategorie(this.updateidcat).subscribe()
    this.produitService.modifi(this.curentp).subscribe(p=>{this.curentp=p;});
    this.router.navigate(['produits']);// si vous cliquer a ce buton  il  appelle  cette event qui  va allez a ce path de route et comme ca il va changer la page vers un autre compnents
  }
}
