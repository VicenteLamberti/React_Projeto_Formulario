import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
    const validacoes = useContext(ValidacoesCadastro);
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [erros,validarCampos,possoEnviar] = useErros(validacoes);
    

    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});

            }
        }}>
            <TextField id="email" label ="email" type="email"
            variant="outlined" required fullWidth margin="normal" name="email"
            value={email}
            
            onChange={(evt)=>{setEmail(evt.target.value)}}
            />

            <TextField id="senha"   label="senha" type="password"
             variant="outlined"  fullWidth margin="normal" name="senha"
             value={senha}
             onChange={(evt)=>{setSenha(evt.target.value)}}
             onBlur={validarCampos}
             error={!erros.senha.valido}
             helperText={erros.senha.texto}/>
             
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;