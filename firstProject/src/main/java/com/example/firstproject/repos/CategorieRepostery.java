package com.example.firstproject.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
//import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.firstproject.entity.Categorie;
@Repository
@RepositoryRestResource(path = "cate")
public interface CategorieRepostery extends JpaRepository<Categorie, Long > {
}
