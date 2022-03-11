import React from "react"
import Button from "@material-ui/core/Button"
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";
function FormularioCadastro(){
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome]= useState("")
    return(
        <form
        onSubmit={(evt)=>{
            evt.preventDefault();
            console.log(nome,sobrenome);
        }}>
            <TextField variant="outlined" id = "nome" label="Nome" fullWidth margin="normal"
            value={nome}
            onChange={(e)=>{
                
                let nomeTmp = e.target.value;
                if(nomeTmp.length >= 3){
                    nomeTmp = nomeTmp.substring(0,3);
                }
                setNome(nomeTmp);
               
            }}/>
          
            <TextField variant="outlined" id = "sobrenome" label="Sobrenome" fullWidth margin="normal"
            value={sobrenome}
            onChange={(e)=>{
                setSobrenome(e.target.value);
                
            }}/>

            <TextField variant="outlined" id = "cpf" label="CPF" fullWidth margin="normal"/>

            <FormControlLabel
            label="Promoções"
            control={ <Switch color="primary" name="promocoes"  />}/>
           
            <FormControlLabel
            label="Novidades"
            control={  <Switch color="primary" name="novidades"  />}/>
          

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;