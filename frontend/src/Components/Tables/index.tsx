import { Table } from "react-bootstrap";
import { Service } from "../../interface/Service";
import { isTemplateSpan } from "typescript";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface TablesProps {
  setService: React.Dispatch<React.SetStateAction<Service>>;
  setUpdate: React.Dispatch<React.SetStateAction<AxiosResponse<any> | undefined>>;
  services: Service[] | undefined
}

const Tables: React.FC<TablesProps> = ({ setService, setUpdate, services }) => {
  const handleChange = (newValue: Service) => {
    setService(newValue);
  };

  const userDelete = (id: number | undefined) => {
    axios
      .delete(`http://localhost:8080/api/servico/${id}`)
      .then((result) => {
        setUpdate(result);
      })
      .catch((error) => {
        console.error('Erro ao excluir o serviço:', error);
      });
  };

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Opções</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services?.map((item: Service, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.clientName}</td>
              <td>{item.serviceDescription}</td>
              <td>{item.serviceValue}</td>
              <td>{item.status}</td>
              <td>
                {item.status !== 'cancelado' && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleChange(item)}
                  >
                    Alterar
                  </button>
                )}
                &nbsp; &nbsp;
                {item.status !== 'cancelado' && (
                  <button
                    className="btn btn-danger"
                    onClick={() => userDelete(item.id)}
                  >
                    Excluir
                  </button>
                )}
                &nbsp; &nbsp;
                <button className="btn btn-warning">Atualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
