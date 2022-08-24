
function mandar(){
    alert('Não , nós não ligamos para sua idade ! ')
    var n = document.getElementsByName('nome')[0]
    var resposta = document.getElementById('res')
    var sexo = document.getElementsByName("sex")
    // Checar   qual é o sexo 
    var genero = " " 
    if (n.value=="" || n.length == 0 ){
        window.alert('Verrifique seus dados ! ')
    }else{
        if (sexo[0]. checked){
            genero = 'Masculino'
        } else{
            genero = "Feminino "
        } 
        resposta.innerHTML = ` seu nome é ${n.value} seu sexo é  ${genero}`
    }
} 
