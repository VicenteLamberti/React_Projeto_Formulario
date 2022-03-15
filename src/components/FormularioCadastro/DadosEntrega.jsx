import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
    return (
        <form>
            <TextField id="cep" label="cep" type="number"
                variant="outlined"  margin="normal" />

            <TextField id="endereco" label="endereco" type="text"
                variant="outlined" fullWidth margin="normal" />

            <TextField id="numero" label="numero" type="number"
                variant="outlined"  margin="normal" />


            <TextField id="estado" label="estado" type="text"
                variant="outlined"  margin="normal" />

            <TextField id="cidade" label="cidade" type="text"
                variant="outlined"  margin="normal" />

        <Button variant="contained" color="primary" type="submit" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}
export default DadosEntrega;