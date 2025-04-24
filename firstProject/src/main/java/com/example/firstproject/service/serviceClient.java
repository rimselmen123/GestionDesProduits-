package com.example.firstproject.service;

import java.util.List;

import com.example.firstproject.entity.Client;

public interface serviceClient  {
    Client saveClient(Client p);
    Client updateClient(Client p);
    void deleteClient(Client p);
    void deleteClientById(Long id_client);
    Client getClient(Long id_client);
    List<Client> getAllClients();
    
}
