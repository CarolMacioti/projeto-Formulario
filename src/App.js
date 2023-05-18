import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto/400.css";
import { validarCPF, validarSenha } from "./Models/cadastro";
import ValidacoesCadastro from "./Contexts/validacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastramento
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarFormulario} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

export default App;
