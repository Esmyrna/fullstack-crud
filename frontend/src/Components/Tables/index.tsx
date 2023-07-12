import { Table } from "react-bootstrap";
import { useQueryGET } from "../../hooks/useQueryGET";
import { Service } from "../../interface/Service";

interface TablesProps {
  setService: React.Dispatch<React.SetStateAction<Service>>;
}

const Tables: React.FC<TablesProps> = ({ setService }) => {
  const { serviceData } = useQueryGET();

  const handleChange = (newValue: Service) => {
    setService(newValue);
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
          </tr>
        </thead>
        <tbody>
          {serviceData?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.clientName}</td>
              <td>{item.serviceDescription}</td>
              <td>{item.serviceValue}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleChange(item)}
                >
                  Alterar
                </button>
                &nbsp; &nbsp;
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
