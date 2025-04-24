package com.example.firstproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.firstproject.entity.Categorie;
import com.example.firstproject.repos.CategorieRepostery;

@Service
public class ServiceCategorieImpli implements CategorieService {

    @Autowired
    private CategorieRepostery categorieRepostery;
    @Override
    public Categorie saveCategorie(Categorie Categorie) {
        return categorieRepostery.save(Categorie);
    }

    @Override
    public Categorie updateCategorie(Categorie Categorie) {
        return categorieRepostery.save(Categorie);
    }

    @Override
    public void deleteCategorie(Categorie Categorie) {
        categorieRepostery.delete(Categorie);
    }

    @Override
    public void deleteCategorieById(Long id) {
        categorieRepostery.deleteById(id);
    }

    @Override
    public Categorie getCategorie(Long id) {
        Optional<Categorie> Categorie = categorieRepostery.findById(id);
        return Categorie.orElse(null);
    }

    @Override
    public List<Categorie> getAllCategories() {
        return categorieRepostery.findAll();
    }

}
