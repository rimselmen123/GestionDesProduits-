import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { LoginComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { produitGuard } from './produit.guard';
//import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
export const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "rechercheParCategorie", component: RechercheParCategorieComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "add-produit", component: AddProduitComponent, canActivate: [produitGuard] },
  { path: "updateproduit/:id", component: UpdateproduitComponent },
  { path: "liste-categories", component: ListeCategoriesComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "user", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },

];
