package com.example.firstproject.service;
import java.util.List;

import com.example.firstproject.entity.Categorie;
import com.example.firstproject.entity.Produit;

public interface ServiceProduit {

    Produit saveProduit(Produit p);

    Produit updateProduit(Produit p);

    void deleteProduit(Produit p);

    void deleteProduitById(Long id);

    Produit getProduit(Long id);

    List<Produit> getAllProduits();

    List<Produit> findByNomProduit(String nom);

    List<Produit> findByNomProduitContains(String nom);

    List<Produit> findByNomPrix(String nom, Double prix);

    List<Produit> findByCategorie(Categorie categorie);

    List<Produit> findByCategorieIdCat(Long id);

    List<Produit> findByOrderByNomProduitAsc();

    List<Produit> trierProduitsNomsPrix();

}