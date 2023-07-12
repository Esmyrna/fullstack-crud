
import { H1 } from "./style";
import { Container } from "react-bootstrap";
import { Service } from "./interface/Service";
import { useState } from "react";
import Form from "./Components/Form";

const App: React.FC = () => {
  
  return (
    <>
      <Container>
        <H1>Cadastro de usuários</H1>
        <Form />
      </Container>
    </>
  );
}

export default App;
