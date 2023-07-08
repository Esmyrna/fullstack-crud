package com.servico.backend.services;

import com.servico.backend.models.Servico;
import com.servico.backend.repositories.ServicoRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ServicoService {
    @Autowired
    private ServicoRepository servicoRepository;
    public List<Servico> findAll() {
        return servicoRepository.findAll();
    }
    public List<Servico> pendentPayment() {
        return servicoRepository.findPendingPaymentService();
    }
    public List<Servico> findCanceledServices() {
        return servicoRepository.canceledServices();
    }
    public Servico insert(Servico service) {

        if(service.getPaidValue() == null || service.getPaidValue() == 0 || service.getPaymentData() == null){
            service.setStatus("Pendente");
        } else{
            service.setStatus("Realizado");
        }
        Servico serviceBank = servicoRepository.save(service);
        return serviceBank;
    }
    public Servico toAlter( Long id,  Servico service){
        if(service.getPaidValue() != null && service.getPaidValue() > 0 || service.getPaymentData() != null){
            service.setStatus("Realizado");
        }
        Optional<Servico> services = servicoRepository.findById(id);
         if(services.isPresent()){
             Servico serviceClient = services.get();
             serviceClient.setClientName(service.getClientName());
             serviceClient.setServiceValue(service.getServiceValue());
             serviceClient.setServiceDescription(service.getServiceDescription());
             serviceClient.setStartDate(service.getStartDate());
             serviceClient.setFinalDate(service.getFinalDate());
             serviceClient.setPaymentData(service.getPaymentData());
             serviceClient.setPaidValue(service.getPaidValue());
             serviceClient.setStatus(service.getStatus());

         }
         return servicoRepository.saveAndFlush(service);
    }
    public void cancelService(Long id){
        Servico servico = servicoRepository.findById(id).get();
        servico.setStatus("Cancelado");
        servicoRepository.save(servico);
    }
    public void delete(Long id){
        Servico service = servicoRepository.findById(id).get();
        servicoRepository.delete(service);
    }
}
