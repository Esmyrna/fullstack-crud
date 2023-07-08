package com.servico.backend.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "servico")
@Data
public class Servico {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String clientName;
    @Temporal(TemporalType.DATE)
    private Date startDate = new Date();
    @Temporal(TemporalType.DATE)
    private Date finalDate;
    private String serviceDescription;
    private Double serviceValue;
    private Double paidValue;
    @Temporal(TemporalType.DATE)
    private Date paymentData;
    private String status; // "pendente", "realizado", "cancelado"

}
