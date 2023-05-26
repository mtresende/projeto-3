$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, escreva sua mensagem'
        },
    })
})