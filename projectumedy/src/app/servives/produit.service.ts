import { Injectable } from '@angular/core';
import { Produit } from '../modules/produit.model';
import { Categorie } from '../modules/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiURL = 'http://localhost:8081/produits/api';
  private apiURLcat = 'http://localhost:8081/produits/cat';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  produits: Produit[]= [];
  categories! : Categorie[];
  constructor(private http : HttpClient) {
  }
  listeProduit() : Observable<Produit[]>
  {
    return this.http.get<Produit[]>(this.apiURL+'/all');
  }
  addeproduit(p: Produit): Observable<Produit>{
    return this.http.post<Produit>(this.apiURL +'/addprod', p,this.httpOptions);
  }
  addCategorie(cat :Categorie) : Observable<Categorie>
  {
    return this.http.post<Categorie>(this.apiURLcat,cat,this.httpOptions);
  }
  supprimerproduit(id: Number)
  {
    const url = `${this.apiURL +'/delprod'}/${id}`;
    return this.http.delete(url,this.httpOptions);
  }
/*  supprimerproduit(prod : Produit)
  {
    const pos=this.produits.indexOf(prod,0);//chercher un elemnets
    if(pos>-1)
    {
      this.produits.splice(pos,1);// signe que dans ce position pos effacer un elemnts
    }
  } */
  consulterproduit(id: Number): Observable<Produit>
  {
    const url = `${this.apiURL +'/getbyid'}/${id}`;
    return this.http.get<Produit>(url);//chercher un  prouduit par lamethode find
  }
    modifi(p: Produit):Observable<Produit>
  {
      return this.http.put<Produit>(this.apiURL +'/updateprod',p,this.httpOptions);
    //c'est une methode de rechercher comme ch.find() in python
/*     const index=this.produits.indexOf(p,0);
    if(index>-1)
    {
      this.produits.splice(index,1);//supprimer l ancien elmen
      this.produits.splice(index,0,p);// ajouter ou insereer la nouvelle  elemnt
    } */
  }
  listCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiURLcat)
  }
  consulterCategorie(id: Number): Observable<Categorie>  {
    const url = `${this.apiURLcat}/${id}`;
    return this.http.get<Categorie>(url);
  }
  cherhcerprodbycatid(idCat: Number): Observable<Produit[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }
  rechercheparnom(nomCat: string): Observable<Produit[]>
  {
    const url = `${this.apiURL}/prodsByName/${nomCat}`;
    return this.http.get<Produit[]>(url);
  }
}
