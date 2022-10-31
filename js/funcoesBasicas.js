formulario.addEventListener('submit', function(e) {
    var formulario = document.getElementById("formulario");
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    let cookie = document.cookie = "Nome :" + nome.value;
    let cookie2 = document.cookie = "Telefone :" + telefone.value;
    let cookie3 = document.cookie = "E-mail :" + email.value;
    let cookie4 = document.cookie = "Mensagem :" + mensagem.value;

        console.log(cookie +'<br>');
        console.log(cookie2+'<br>');
        console.log(cookie3+'<br>');
        console.log(cookie4+'<br>');


e.preventDefault();
});


function validaForm(){
    var email = document.getElementById('email').value;
    console.log(email);

    var validacao = validaEmail(email)

    if (validacao){	
        alert('E-mail Enviado com Sucesso');
        // No caso aqui faria o envio do e-mail de contato.
        window.location = "home.html"
    }else{
        document.getElementById('email').style.border = 42;
        document.getElementById('email').style.borderColor = "#FF0F0F";
        document.getElementById('email').style.borderRadius = 4;
        document.getElementById('email').placeholder = 'Email invalido';
        return false;
    }	
}

function validaEmail(email) {
const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
return emailRegex.test(String(email).toLowerCase())
}