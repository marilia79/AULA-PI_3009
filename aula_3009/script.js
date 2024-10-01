//programação assíncrona
console.log ("Início do programa");

let a =1;
function minhaFuncao(){
    a=2;
    console.log("chamou")
}

setTimeout(minhaFuncao, 2000);
console.log(a);

//Promise
fetch("https://viacep.com.br/ws/88495000/json")
.then(dados => dados.json())
.then (dados => console.log (`Localidade: ${dados.localidade}`))
.catch(erro => console.error("Deu ruim"))

