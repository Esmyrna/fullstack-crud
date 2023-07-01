import { ChangeEvent, FormEvent, useState } from 'react';
import { Field, FormContainer, FormInput, Input, Label } from './style';
import { useForm } from 'react-hook-form'
import { Service } from '../../interface/Service';
import {useQuery} from '../../hooks/useQueryPOST'
 

 

const Form: React.FC = () => {
  
  const {register, handleSubmit} = useForm();
  const [output, setOutput] = useState<Service | null>(null);
 
  const createRegistration = () => {
    const service: Service = {
      clientName: '', // Adicione um valor inicial aqui
      startDate: new Date(),
      finalDate: new Date(),
      serviceDescription: '',
      serviceValue: 0,
      paidValue: 0,
      paymentData: 0,
      status: '',
    };
  
    mutate(service);
    console.log(service);
    setOutput(service);
  };
    const {mutate,  isSuccess } = useQuery();
   // const clientName = watch('clientName')
  
  return (
    <FormInput onSubmit={handleSubmit(createRegistration)}>
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
          <Label>Valor do serviço</Label>
          <Input 
          type="text"
          {...register('serviceValue')} />
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
    {output?.clientName}
    </FormInput>

  );
};

export default Form;
