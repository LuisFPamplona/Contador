function Confirm() {

    var num1 = window.document.querySelector("#inicio").value
    var num2 = window.document.querySelector("#final").value
    //const PASSO = window.document.querySelector("#passo").value

    var result = window.document.querySelector("#result")
    

    result.innerHTML = ""
    result.style.border = 'none'

    if (num1 > num2) {
        alert("Número inicial não pode ser maior que o número final.")
    }
    else if (num1 == "" || num2 == "") {
        alert("Preencha todos os campos antes de continuar.")
    }
    else if (num1 <= num2) {

        for (var cont = num1; cont <= num2; cont++) {

            result.innerHTML += `&#10145 ${cont} `

        }
        result.innerHTML += "&#11088"
        result.style.border = 'dashed black'
    }



}
function Clear() {

    var result = window.document.querySelector("#result")

    result.innerHTML = ""
    result.style.border = 'none'

}
