
import { H1 } from "./style";
import Form from './Components/Form'
import { Container } from "react-bootstrap";
import Tables from "./Components/Tables";
import { Service } from "./interface/Service";
import { useState } from "react";
interface TablesProps {
  service: Service;
  setService: React.Dispatch<React.SetStateAction<Service>>;
}



const App: React.FC<TablesProps> = ({service, setService}) => {
  
  return (
    <>
      <Container>
        <H1>Cadastro de usuários</H1>
        <Form />
        <Tables service={service} setService={setService}/>
      </Container>
    </>
  );
}

export default App;
