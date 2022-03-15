
import React from "react"
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";



import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validar }) {

    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularios = [
        <DadosUsuario aoEnviar={chamarProximoForm} />,
        <DadosPessoais aoEnviar={chamarProximoForm} validar={validar}/>,
        <DadosEntrega aoEnviar={aoEnviar} />
    ]

    function chamarProximoForm() {
        setEtapaAtual(etapaAtual + 1)
    }
   

    return (
        <>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro;