package com.example.firstproject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.firstproject.entity.Categorie;

@Service
public interface CategorieService {
    Categorie saveCategorie(Categorie categorie);
    Categorie updateCategorie(Categorie categorie);
    void deleteCategorie(Categorie categorie);
    void deleteCategorieById(Long id);
    Categorie getCategorie(Long id);
    List<Categorie> getAllCategories();
    
}
