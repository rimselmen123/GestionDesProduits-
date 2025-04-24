package com.example.firstproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.firstproject.entity.Client;
import com.example.firstproject.repos.ClientReposetery;

import java.util.List;
import java.util.Optional;

@Service
public class serviceclientimpli implements serviceClient {

    @Autowired
    private ClientReposetery clientReposetery;

    @Override
    public Client saveClient(Client client) {
        return clientReposetery.save(client);
    }

    @Override
    public Client updateClient(Client client) {
        return clientReposetery.save(client);
    }

    @Override
    public void deleteClient(Client client) {
        clientReposetery.delete(client);
    }

    @Override
    public void deleteClientById(Long id) {
        clientReposetery.deleteById(id);
    }

    @Override
    public Client getClient(Long id) {
        Optional<Client> client = clientReposetery.findById(id);
        return client.orElse(null);
    }

    @Override
    public List<Client> getAllClients() {
        return clientReposetery.findAll();
    }
}