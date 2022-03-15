
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";



import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ]

    useEffect(()=>{
        console.log(dadosColetados)
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados);
            
        }
    })

    function chamarProximoForm() {
        setEtapaAtual(etapaAtual + 1)
    }

    function coletarDados(dados){
        setDadosColetados({...dadosColetados,...dados});

        chamarProximoForm();
    }
   

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro;