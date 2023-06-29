import { ChangeEvent, FormEvent, useState } from 'react';
import { Field, FormContainer, FormInput, Input, Label } from './style';
import { useForm } from 'react-hook-form'
import { Service } from '../../interface/Service';
import {useQuery} from '../../hooks/useQuery'
 
interface Props {
    onSubmit: () => void
}
const Form: React.FC = () => {
  
  const {register, handleSubmit} = useForm();
  const [output, setOutput] = useState('');

 const createRegistration = (data: any) => {
   const service: Service = {
        clientName: data.clientName,
        startDate: data.startDate,
        finalDate: data.finalDate,
        serviceDescription: data.serviceDescription,
        serviceValue: 0, // Defina o valor correto se necessário
        paidValue: 0, // Defina o valor correto se necessário
        paymentData: 0, // Defina o valor correto se necessário
        status: ''
        
   }
        mutate(service)
        console.log(service)
   
 }
    const {mutate,  isSuccess } = useQuery();

  return (
    <FormInput  onSubmit={handleSubmit(createRegistration)}>
      <FormContainer>
        <Field>
          <Label>Nome do cliente</Label>
          <Input 
          type="text" 
          {...register('clientName')} />
        </Field>
        <Field>
          <Label>Data de início</Label>
          <Input
          type="date"
          {...register('startDate')} />
        </Field>
        <Field>
          <Label>Data de Término</Label>
          <Input 
          type="date" 
          {...register('finalDate')} />
        </Field>
        <Field>
          <Label>Descrição do serviço</Label>
          <Input 
          type="text"
          {...register('serviceDescription')} />
        </Field>
        <Field>
          <Label>Valor pago</Label>
          <Input 
           type="number" 
           {...register('paidValue')} />
        </Field>
        <Field>
          <Label>Data de pagamento</Label>
          <Input 
           type="date" 
           {...register('payDay')}  />
        </Field>
        <Input type="submit" value="Cadastrar" />
      </FormContainer>
      {output}
    </FormInput>

  );
};

export default Form;
