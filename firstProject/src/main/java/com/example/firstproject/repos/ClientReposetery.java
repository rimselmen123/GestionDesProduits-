package com.example.firstproject.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.firstproject.entity.Client;
@Repository
@RepositoryRestResource(path = "clt")
@CrossOrigin("http://localhost:4200/")
public interface ClientReposetery extends JpaRepository<Client, Long>
{
}
/*
Pour découpler le code (séparer l'implémentation de la définition)
Pour faciliterles tests (possibilité de faire des mocks)
Pour permettre d'avoir plusieurs implémentations différentes d'un même comportement */