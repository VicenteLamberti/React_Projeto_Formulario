import './App.css';
import React,{Component} from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
class App extends Component{
  render(){
    return (
      <Container component="article" maxWidth="sm">
       <Typography align="center" variant="h3" component="h1" >
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validar={validarCPF}/>
      </Container>
      
    );
  }
 
}
function aoEnviarForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"Deve ter 11 dígitos"}
  }
  return {valido:true, texto:""}
}
export default App;
