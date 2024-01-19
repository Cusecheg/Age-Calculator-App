
function changeButtom(){
    var element = document.getElementById("purple")
    element.src = "/Images/black.svg"
}


function calcularIdade() {
    var diaNascimento = document.getElementById("day").value;
    var mesNascimento = document.getElementById("month").value;
    var anoNascimento = document.getElementById("year").value;
    var dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
    var dataAtual = new Date();

    var diferenciaMilisegundos = dataAtual - dataNascimento;

    var diferenciaAnos = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365);
    var idade = Math.floor(diferenciaAnos);

    var diferenciaMeses = (diferenciaAnos - idade) * 12;
    var meses = Math.floor(diferenciaMeses);

    var diferenciaDias = (diferenciaMeses - meses) * (365.25 / 12);
    var dias = Math.floor(diferenciaDias);

    document.getElementById("years").innerHTML = idade;
    document.getElementById("months").innerHTML = meses;
    document.getElementById("days").innerHTML = dias;

}
function erro(){
    const element1 = document.querySelectorAll('.ErroBorderBlack');
    const arrayElement1 = Array.from(element1);
    for (var i = 0; i < arrayElement1.length; i++) {
        arrayElement1[i].classList.toggle("ErroBorderRed");
    }
    const element2 = document.querySelectorAll('.ErroFontBlack');
    const arrayElement2 = Array.from(element2);
    for (var i = 0; i < arrayElement2.length; i++) {
        arrayElement2[i].classList.toggle("ErroFontRed");
    }
}

    
function validarIdade(diaNascimento, mesNascimento) {
    var diaNascimento = document.getElementById("day").value;
    var mesNascimento = document.getElementById("month").value;
    var anoNascimento = document.getElementById("year").value;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
        if (diaNascimento == 0 || mesNascimento == 0 || anoNascimento == 0){
            // const element3 = document.querySelectorAll('.EmptyInputs');
            // const arrayElement3 = Array.from(element3);
            // for (var i = 0; i < 3; i++) {
            // arrayElement3[i].classList.toggle("EmptyInputsRed");
            // arrayElement3[i].innerHTML = "This field is required";
            erro();
        }
        else{
            if (diaNascimento >= 1 && diaNascimento <= 31 && mesNascimento >= 1 && mesNascimento <= 12 && anoNascimento < anoAtual)  {
                calcularIdade();
                changeButtom();
                }else{
                    erro();
                }
            }
}















        





