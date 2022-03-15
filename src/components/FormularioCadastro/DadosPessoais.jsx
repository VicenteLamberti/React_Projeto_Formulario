import React from "react"
import Button from "@material-ui/core/Button"

import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";

function DadosPessoais({ aoEnviar, validacoes }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    //Aqui deveria dar erro ver qual extensao
    // if(true){
    //     setNome("");
    // }

    function validarCampos(evt) {
        const {name,value} = evt.target;

        const novoEstado = {...erros};
        novoEstado[name]= validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
      
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }
    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                if(possoEnviar()){
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
                }
            }}>
            <TextField variant="outlined" id="nome" label="Nome" fullWidth margin="normal" required
                value={nome}
                onChange={(e) => {

                    let nomeTmp = e.target.value;
                    if (nomeTmp.length >= 3) {
                        nomeTmp = nomeTmp.substring(0, 3);
                    }
                    setNome(nomeTmp);

                }} />

            <TextField variant="outlined" id="sobrenome" label="Sobrenome" fullWidth margin="normal" required
                value={sobrenome}
                onChange={(e) => {
                    setSobrenome(e.target.value);

                }} />

            <TextField variant="outlined" id="cpf" label="CPF" fullWidth margin="normal"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}


                name="cpf"
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value);

                }} />

            <FormControlLabel
                label="Promoções"
                control={<Switch color="primary" name="promocoes" checked={promocoes}
                    onChange={(evt) => {
                        setPromocoes(evt.target.checked);
                    }} />} />

            <FormControlLabel
                label="Novidades"
                control={<Switch color="primary" name="novidades" checked={novidades}
                    onChange={(evt) => {
                        setNovidades(evt.target.checked);
                    }} />} />


            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;