
import { H1 } from "./style";
import Form from './Components/Form'
import { Container } from "react-bootstrap";
import Tables from "./Components/Tables";

function App() {
  return (
      <>
      <Container>
        <H1>Cadastro de usuários</H1>
           <Form />
           <Tables />
      </Container>
    </>
  );
}

export default App;
