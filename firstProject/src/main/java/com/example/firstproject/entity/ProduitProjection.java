package com.example.firstproject.entity;
import org.springframework.data.rest.core.config.Projection;
@Projection(name = "nomProd", types = { Produit.class })
public interface ProduitProjection {
    public String getNomProduit();
}
