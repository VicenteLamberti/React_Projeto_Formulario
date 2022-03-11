import React from "react"
import Button from "@material-ui/core/Button"
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";
function FormularioCadastro(){
    const [nome,setNome] = useState("Vicente");
    return(
        <form>
            <TextField variant="outlined" id = "nome" label="Nome" fullWidth margin="normal"
            value={nome}
            onChange={(e)=>{
                setNome(e.target.value);
                if(nome.length >= 3){
                    setNome(nome.substring(0,3));
                }
            }}/>
          
            <TextField variant="outlined" id = "sobrenome" label="Sobrenome" fullWidth margin="normal"/>

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