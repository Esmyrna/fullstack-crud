import { useEffect, useState } from 'react';
import { Field, FormContainer, FormInput, Input, Label } from './style';
import axios from 'axios';
import { useQueryGET } from '../../hooks/useQueryGET';
import { Service } from '../../interface/Service';
import { AxiosResponse } from "axios";
import Tables from '../Tables/'
import { Table } from 'react-bootstrap';

const Form: React.FC = () => {
  const { serviceData } = useQueryGET();
  const [service, setService] = useState<Service>({
    clientName: '',
    startDate: '',
    finalDate:'',
    serviceDescription: '',
    serviceValue: 0,
    paidValue: 0,
    paymentData:'',
  });

  const [services, setServices] = useState<Service[]>();
  const [update, setUpdate] = useState<AxiosResponse<any> | undefined>();

  useEffect(() => {
    if (serviceData) {
      setServices(serviceData);
      console.log("dados", services);
    }
  }, [update]);

  const onSubmit = (e: React.FormEvent) => {
    axios
      .post("http://localhost:8080/api/servico/", service)
      .then((response: AxiosResponse<any>) => {
        setUpdate(response);
      });
    e.preventDefault();
  };
  const handleChange = (e: any) => {
    setService({...service, [e.target.name]: e.target.value})
  }
  

  return (
    <FormInput onSubmit={onSubmit}>
      <FormContainer>
        <Field>
          <Label>Nome do cliente</Label>
          <Input
            type="text"
            value={service.clientName}
            name="clientName"
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de início</Label>
          <Input
            type="date"
            name="startDate"
            value={service.startDate}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de Término</Label>
          <Input
            type="date"
            name="finalDate"
            value={service.finalDate}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Descrição do serviço</Label>
          <Input
            type="text"
            name="serviceDescription"
            value={service.serviceDescription}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Valor do serviço</Label>
          <Input
            type="number"
            name="serviceValue"
            value={service.serviceValue}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Valor pago</Label>
          <Input
            type="number"
            name="paidValue"
            value={service.paidValue}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de pagamento</Label>
          <Input
            type="date"
            name="paymentData"
            value={service.paymentData}
            onChange={handleChange}
          />
        </Field>
        <Input type="submit" value="Cadastrar" />
      </FormContainer>
      <Tables setService={setService} />
    </FormInput>
  );
};

export default Form;
