import Table, { TableProps } from 'react-bootstrap/Table';
import { useQueryGET } from '../../hooks/useQueryGET';
import { Form } from 'react-bootstrap';
import { Service } from '../../interface/Service';

interface TablesProps  {
  service: Service;
  setService: React.Dispatch<React.SetStateAction<Service>>;
};

const Tables: React.FC<TablesProps> = ({service, setService}) => {
  const { serviceData } = useQueryGET();

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
          </tr>
        </thead>
        <tbody>
          {serviceData?.map((item, index) => (
            <tr key={index}>
              <td>1</td>
              <td>{item.clientName}</td>
              <td>{item.serviceDescription}</td>
              <td>{item.serviceValue}</td>
              <td>
              <button onClick={() => setService(item)} className="btn btn-primary">Alterar</button>&nbsp; &nbsp;
              <button className="btn btn-danger">Excluir</button> &nbsp; &nbsp;
              <button className="btn btn-warning">Atualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
  
      </Table>
    </div>
  );
}

export default Tables;