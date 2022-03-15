function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"Deve ter 11 dígitos"}
    }
    return {valido:true, texto:""}
  }

  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 10){
      return {valido:false, texto:"Deve ter entre 4 e 10 dígitos"}
    }
    return {valido:true, texto:""}
  }

  export {validarCPF,validarSenha};