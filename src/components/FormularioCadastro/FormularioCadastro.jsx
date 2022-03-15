import React from "react"
import DadosEntrega from "./DadosEntrega";



import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validar }) {


    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validar={validar} />
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    )
}

export default FormularioCadastro;