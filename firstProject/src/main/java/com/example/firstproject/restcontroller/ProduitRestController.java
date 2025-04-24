package com.example.firstproject.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.firstproject.entity.Produit;
import com.example.firstproject.service.ServiceProduit;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRestController {
    @Autowired
    ServiceProduit produitService;

    @RequestMapping(path = "all",method = RequestMethod.GET)
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @RequestMapping(value = "/getbyid/{idd}", method = RequestMethod.GET)
    public Produit getProduitById(@PathVariable("idd") Long id) {
        return produitService.getProduit(id);
    }

    @RequestMapping(value = "/addprod",method = RequestMethod.POST)
    public Produit createProduit(@RequestBody Produit produit) {
        return produitService.saveProduit(produit);
    }

    @RequestMapping(value = "/updateprod",method = RequestMethod.PUT)
    public Produit updateProduit(@RequestBody Produit produit) {
        return produitService.updateProduit(produit);
    }

    @RequestMapping(value = "/delprod/{idd}", method = RequestMethod.DELETE)
    public void deleteProduit(@PathVariable("idd") Long id) {
        produitService.deleteProduitById(id);
    }

    @RequestMapping(value = "/prodscat/{idCatt}", method = RequestMethod.GET)
    public List<Produit> getProduitsByCatId(@PathVariable("idCatt") Long idCat)
    {
        return produitService.findByCategorieIdCat(idCat);
    }
    
    @RequestMapping(value = "/prodsByName/{nom}", method = RequestMethod.GET)
    public List<Produit> findByNomProduitContains(@PathVariable("nom") String nom) {
        return produitService.findByNomProduitContains(nom);
    }

}
