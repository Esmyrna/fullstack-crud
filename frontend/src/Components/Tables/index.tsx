import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
import { useQueryGET } from '../../hooks/useQueryGET';
import { Service } from '../../interface/Service';

interface Props {
  service: Service[];

}

const Tables: React.FC = () => {
  const { serviceData } = useQueryGET();

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor do serviço</th>
          </tr>
        </thead>
        <tbody>
          
          {serviceData?.map((item, index) => (
            <tr key={index}>
              <td>1</td>
              <td>{item.clientName}</td>
              <td></td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;