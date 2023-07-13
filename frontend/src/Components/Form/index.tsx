import { useEffect, useState } from 'react';
import { Field, FormContainer, FormInput, Input, Label } from './style';
import axios from 'axios';
import { Service } from '../../interface/Service';
import { AxiosResponse } from "axios";
import Tables from '../Tables/'


const Form: React.FC = () => {
  const [service, setService] = useState<Service>({
    clientName: '',
    startDate: '',
    finalDate:'',
    serviceDescription: '',
    serviceValue: 0,
    paidValue: 0,
    paymentData:'',
    status: ''
  });

  const [services, setServices] = useState<Service[] | undefined>();
  const [update, setUpdate] = useState<AxiosResponse<any> | undefined>();
  const API_URL = 'http://localhost:8080';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        const response = await axios.get<Service[]>(API_URL + '/api/servico');
        setServices(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados do serviço:', error);
      }};
    fetchData();
  }, [update]);



  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(service.id === undefined || service.id === null) {
        axios
        .post("http://localhost:8080/api/servico/", service)
        .then((response: AxiosResponse<any>) => {
          setUpdate(response);
        });
    }else{
        axios
        .put(`http://localhost:8080/api/servico/${service.id}`, service)
        .then((response) => {
          setUpdate(response)
        })
    }
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
            value={service.clientName || ''}
            name="clientName"
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de início</Label>
          <Input
            type="date"
            name="startDate"
            value={service.startDate || ''}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de Término</Label>
          <Input
            type="date"
            name="finalDate"
            value={service.finalDate || ''}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Descrição do serviço</Label>
          <Input
            type="text"
            name="serviceDescription"
            value={service.serviceDescription || ''}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Valor do serviço</Label>
          <Input
            type="number"
            name="serviceValue"
            value={service.serviceValue || 0}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Valor pago</Label>
          <Input
            type="number"
            name="paidValue"
            value={service.paidValue || 0}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <Label>Data de pagamento</Label>
          <Input
            type="date"
            name="paymentData"
            value={service.paymentData || ''}
            onChange={handleChange}
          />
        </Field>
        <Input type="submit" value="Cadastrar" />
      </FormContainer>
      <Tables services={services} setService={setService} setUpdate={setUpdate} />
    </FormInput>
  );
};

export default Form;