package com.example.firstproject.restcontroller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.firstproject.entity.Client;
import com.example.firstproject.service.serviceClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class ClientRestController {
    @Autowired
    private serviceClient serviceclient;
    @GetMapping
    public List<Client> getAllClients()
    {
        return serviceclient.getAllClients();
    }
    @GetMapping("/{idd}")
    public Client getClient(@PathVariable("idd") Long id_client)
    {
        return serviceclient.getClient(id_client);
    }
    @RequestMapping(method = RequestMethod.POST)
    public Client saveClient(@RequestBody Client p)
    {
        return serviceclient.saveClient(p);
    }
    @PutMapping
    public Client updateClient(@RequestBody Client p)
    {
        return serviceclient.updateClient(p);
    }
    @DeleteMapping("/{id}")
    public void deleteClientById(Long id_client)
    {
        serviceclient.deleteClientById(id_client);
    }
    @DeleteMapping
    public void deleteClient(Client p)
    {
        serviceclient.deleteClient(p);
    }
}