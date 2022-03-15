import React from "react"



import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validar }) {


    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validar={validar} />
            <DadosUsuario/>
        </>
    )
}

export default FormularioCadastro;