package com.servico.backend.repositories;

import com.servico.backend.models.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicoRepository extends JpaRepository<Servico, Long> {
    // Busca de servicos com pagamento pendente
    @Query("select s from Servico s where s.paidValue is null or s.paidValue = 0" )
    List<Servico> findPendingPaymentService();

    @Query("select s from Servico s where s.status = 'Cancelado'")
    List<Servico> canceledServices();
}
