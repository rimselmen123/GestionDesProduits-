import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../modules/produit.model';
import { ProduitService } from '../servives/produit.service'
import { Router, RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../servives/auth.service';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  standalone:true,
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  produits!  : Produit[];

constructor(private produitService: ProduitService, private cdr: ChangeDetectorRef ,private router : Router, public authService: AuthService)  { }
//IL FAUT que les champs dans le data et dans le class model produit sont les meme nom pour l afficher correctements
  // si il non pas le meme nom de champs dans le  data base il  lui n'affiche rien REMARQUEEE!!!!!!
ngOnInit(): void {
  this.chargerprod();
}


chargerprod()
{
  this.produitService.listeProduit().subscribe(
    prods => {
      console.log("Produits reçus : ", prods);
      this.produits = prods;
      console.log("Produits mis à jour : ", this.produits);
      this.cdr.detectChanges();
    },
    error => {
      console.error("Erreur lors de la récupération des produits : ", error);
    }
  );
}
  supprimer(prod:Produit){
    let c = confirm("etre vous sure de effacer ce produits de l id_produit = " + prod.idProduit);
    if(c)
    {
      this.produitService.supprimerproduit(prod.idProduit).subscribe(()=>{
        console.log("le produit a suprimer avec id " + prod.idProduit + "est fait");
        this.chargerprod();
        //this.router.navigate(['produits']);
      })
    }
  }
}
