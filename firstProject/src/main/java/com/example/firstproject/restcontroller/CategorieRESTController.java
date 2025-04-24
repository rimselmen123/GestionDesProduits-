package com.example.firstproject.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.firstproject.entity.Categorie;
import com.example.firstproject.service.CategorieService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/cat")
public class CategorieRESTController {

@Autowired
private CategorieService categorieService;
@GetMapping
public List<Categorie> getcats()
{
    return categorieService.getAllCategories();
}
@GetMapping("/{idd}")
public Categorie getCategorie(@PathVariable ("idd") Long id) {
    return categorieService.getCategorie(id);
}
@PostMapping
public Categorie saveCategorie(@RequestBody Categorie categorie) {
    
    return categorieService.saveCategorie(categorie) ;
}
@PutMapping
public Categorie updatecat(@RequestBody Categorie categorie) {
    
    return categorieService.updateCategorie(categorie);
}
@DeleteMapping("/{idd}")
public void delete(@PathVariable ("idd") Long id)
{
    categorieService.deleteCategorieById(id);
}
}
