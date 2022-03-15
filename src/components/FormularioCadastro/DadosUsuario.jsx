import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({aoEnviar}){
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField id="email" label ="email" type="email"
            variant="outlined" required fullWidth margin="normal"
            value={email}
            onChange={(evt)=>{setEmail(evt.target.value)}}/>

            <TextField id="senha"  required label="senha" type="password"
             variant="outlined"  fullWidth margin="normal"
             value={senha}
             onChange={(evt)=>{setSenha(evt.target.value)}}/>
             
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;