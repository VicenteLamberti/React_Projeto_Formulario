import React from "react";

const ValidacoesCadastro = React.createContext({
    cpf:valorPadraoSeNaoUsarProvider,
    senha:valorPadraoSeNaoUsarProvider,
    nome:valorPadraoSeNaoUsarProvider
});

function valorPadraoSeNaoUsarProvider(dados){
    console.log(dados);
    return {valido: true, texto:""};
}

export default ValidacoesCadastro;