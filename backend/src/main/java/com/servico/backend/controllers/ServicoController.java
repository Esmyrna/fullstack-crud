package com.servico.backend.controllers;

import com.servico.backend.models.Servico;
import com.servico.backend.services.ServicoService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/servico")

public class ServicoController {
    @Autowired
    private ServicoService servicoService;
    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping
    public List<Servico> findAll() {
        return servicoService.findAll();
    }
    @GetMapping("/pagamentosPendente")
    public List<Servico> pendentPayment() {
        return servicoService.pendentPayment();
    }
    @GetMapping("/cancelados")
    public List<Servico> findCanceledServices() {
        return servicoService.findCanceledServices();
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping("/")
    public Servico insert(@RequestBody  Servico servico){
        return servicoService.insert(servico);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Void> cancel(@PathVariable Long id){
        servicoService.cancelService(id);
        return ResponseEntity.ok().build();
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @PutMapping("/{id}")
    public Servico toAlter(@PathVariable Long id ,@RequestBody  Servico servico){
        return servicoService.toAlter(id, servico);
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removed(@PathVariable Long id) {
        servicoService.delete(id);
        return ResponseEntity.ok().build();
    }
}
