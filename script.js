const form = document.getElementById('form-deposito');
const num1 = document.getElementById('number1')
const num2 = document.getElementById('number2')

function validVerdadeiro(n1,n2) {
    const calcvalid = parseInt(n1) < parseInt(n2);
    return calcvalid
}

form.addEventListener('submit',function(e){
    let validTrue = false
    e.preventDefault();
    const mensagemvalid = `O Formulário é válido`
    const mensageminvalid = `O Formulário é inválido`

    validTrue = validVerdadeiro(num1.value,num2.value)
    if(validTrue) {
        const mensagemsucesso = document.querySelector('.mensagem-sucess');
        mensagemsucesso.innerHTML = mensagemvalid;
        mensagemsucesso.style.display = 'block';
        num1.value = '';
        num2.value = '';
    } else{
        num1.value = '';
        num2.value = '';
        document.querySelector('.mensagem-sucess').innerHTML = mensageminvalid;
    }
})

num2.addEventListener('keyup',function(e){
    console.log(e.target.value)
    validTrue = false
    validTrue = validVerdadeiro(num1.value,num2.value)
    if(!validTrue) {
        num2.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else {
        num2.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
})
