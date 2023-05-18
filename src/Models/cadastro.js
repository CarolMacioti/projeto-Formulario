
function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:'O CPF deve conter 11 dígitos.'}
    }else{
      return {valido:true, texto:''}
    }
  }

  function validarSenha(senha){
    if(senha.length <4 || senha.length > 32){
      return {valido:false, texto:'A Senha deve conter entre 4 e 22 dígitos.'}
    }else{
      return {valido:true, texto:''}
    }
  }
  

export {validarCPF, validarSenha};