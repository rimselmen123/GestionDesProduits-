
package com.example.firstProject;

//import java.util.ArrayList;
import java.util.Date;
//import java.util.List;
//import java.util.List;

//import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

//import com.example.firstproject.entity.Client;
import com.example.firstproject.entity.Produit;
import com.example.firstproject.repos.ClientReposetery;
//import com.example.firstproject.entity.categorie;
//import com.example.firstproject.entity.produit;
//import com.example.firstproject.repos.ClientReposetery;
//import com.example.firstproject.repos.categorieRepostery;
import com.example.firstproject.repos.ProduitRepositery;
import com.example.firstproject.repos.CategorieRepostery;
import com.example.firstproject.entity.Categorie;
import com.example.firstproject.entity.Client;
//import com.example.firstproject.entity.Produit;

//import jakarta.transaction.Transactional;

@SpringBootTest

class FirstProjectApplicationTests {

@Autowired
private ProduitRepositery produitRepositery;
@Autowired
private ClientReposetery  ClientReposetery;

@Autowired
private CategorieRepostery categorieRepostery;
/*@Test
public void createCat()
{
    for (int i = 0; i < 10; i++) {
        Categorie cat=new Categorie ();
        cat.setId_cat(null);
        cat.setName_cat("technologie");
        cat.setDescription_cat("ytdfyjdcycjyyd");
        categorieRepostery.save(cat);
        System.out.println("mle create de la categorie est "+ cat);


        
    }
}*/
@Test
public void createClient() {
    for (int i = 0; i < 10; i++) {
        Client clt = new Client();
        clt.setId_client(null);
        clt.setFirstName("selmen");
        clt.setLastName("rayen");
        clt.setEmail("rams.selmen@gmail.com");
        clt.setPhoneNumber("58244524");
        clt.setAdress("tunis");
        ClientReposetery.save(clt);
        System.out.println("Client saved: " + clt);
    }
    
}
/*
public void addCleint()
{
    Client clt =ClientReposetery.findById(  1L).get();
    clt.setEmail("rayenlboos@gmail.com");
    clientReposetery.save(clt);
    System.out.println("le update est ca dans votre client reposetery" + clt);
}*/

@Test
public void addproductandcategorie() {
    Categorie cat = new Categorie();
    cat.setIdCat(null);
    cat.setNomCat("technologie");
    cat.setDescriptionCat("haja nar sel3a tayara");
    categorieRepostery.save(cat);
    System.out.println("mle create de la categorie est " + cat);
    for (int i = 0; i < 10; i++) {
        Produit prods = new Produit();
        prods.setIdProduit(null);
        prods.setNomProduit("iphone 120 promax");
        prods.setPrixProduit(200.0);
        prods.setDateCreation(new Date());
        prods.setCategorie(cat);
        produitRepositery.save(prods);
        System.out.println("le produit de vos est comme ca" + prods);
    }
    
}
/*
 * @Test
 *
 * @Transactional
 * public void findByNomProduitContains()
 * {
 * List <Produit> prods=produitRepositery.findByNomProduitContains("pc");
 * for(Produit p : prods){
 * System.out.println("les elemnts sont "+ p);
 * }
 * }
 */
}

/*
@Test
public void testFindProduit()
{
produit prod = produitRepositery.findById(1L).get();
System.out.println("this is the test find function " + prod);
}

@Test
public void updateproduit()
{
produit prodd = produitRepositery.findAll().get(0);
prodd.setPrixProduit(2000000);
produitRepositery.save(prodd);
System.out.println("this is the update function " + prodd);
}

@Test
public void testdeleteproduit()
{

produit prod = produitRepositery.findById(1L).get();
produitRepositery.delete(prod);
System.out.println("this is the delete function " + prod);
}
}
*/

