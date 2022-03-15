import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");


    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
        }}>
            <TextField id="cep" label="cep" type="number"
                variant="outlined" margin="normal"
                value={cep}
                onChange={(evt) => {
                    setCep(evt.target.value)
                }} />

            <TextField id="endereco" label="endereco" type="text"
                variant="outlined" fullWidth margin="normal"
                value={endereco}
                onChange={(evt) => {
                    setEndereco(evt.target.value)
                }} />

            <TextField id="numero" label="numero" type="number"
                variant="outlined" margin="normal"
                value={numero}
                onChange={(evt) => {
                    setNumero(evt.target.value)
                }} />


            <TextField id="estado" label="estado" type="text"
                variant="outlined" margin="normal"
                value={estado}
                onChange={(evt) => {
                    setEstado(evt.target.value)
                }} />

            <TextField id="cidade" label="cidade" type="text"
                variant="outlined" margin="normal"
                value={cidade}
                onChange={(evt) => {
                    setCidade(evt.target.value)
                }} />

            <Button variant="contained" color="primary" type="submit" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}
export default DadosEntrega;