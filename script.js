

function calculaConta(){
    let valor_conta = document.getElementById("conta").value;
    let qntd_convidados = document.getElementById("convidados").value;
    let avaliacao = document.getElementById("avaliacao").value;
    let modal = document.getElementById("modal");
    let modal_resultado = document.getElementById("resultado")
    let resultado
    // console.log(valor_conta, qntd_convidados, avaliacao)
    let div = valor_conta / qntd_convidados;

    if(avaliacao == 30){
        resultado = 30/100 * div
        modal.style.opacity = "1"
        modal_resultado.innerHTML = resultado.toFixed(2)
    }else if(avaliacao == 20){
        resultado = 20/100 * div
        modal.style.opacity = "1"
        modal_resultado.innerHTML = resultado.toFixed(2)
    }else if(avaliacao == 15){
        resultado = 15/100 * div
        modal.style.opacity = "1"
        modal_resultado.innerHTML = resultado.toFixed(2)
    }else if(avaliacao == 10){
        resultado = 10/100 * div
        modal.style.opacity = "1"
        modal_resultado.innerHTML = resultado.toFixed(2)
    }else{
        resultado = 5/100 * div
        modal.style.opacity = "1"
        modal_resultado.innerHTML = resultado.toFixed(2)
    }



}