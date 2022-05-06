



function clicou(){
document.getElementById("agradecimento").innerHTML =  "<b>obrigado por clicar</b>";
//console.log(document.getElementById("obg"))
}
function redirecionar () {
    //.open abre em outra aba
    window.open("https://google.com.br");
    //abre na mesma pagina
    //window.location.href = "https://google.com.br"
}
function trocar(elemento) {
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML= "Passe o Mouse Aqui";
    elemento.innerHTML = "Passe o Mouse Aqui";
    }
    function load(){
        alert("pagina carregada");
    }
function funcaochange(elemento){
    console.log(elemento.value);
}


    /*

//variaveis global e local
function soma(n1, n2) {
    return n1 + n2;
}
var validar
function validaIdade(idade){
     validar;
    if(idade >= 18) {
        validar= true
    }else{
        validar = false
    }
    return validar;
}
//var idade = prompt ("qual sua idade");
console.log(validaIdade(idade));
*/
/*
function soma(n1, n2)
{
    return n1+ n2;
}
function setreplace(frase, nome, novo_nome){
     return frase.replace(nome, novo_nome)
    };
    alert(setreplace("vai Japão", "Japão",  "Brasil" ));
alert(soma(2, 10));
*/
    /*
var d = new Date();
alert(d.getMilliseconds());
alert(d.getSeconds());
*/


/*
var count
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count<=5){
    console.log(count);
    alert(count)
    count++;
}
*/
/*
var idade= prompt("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");

}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça", "pêra", "manga"];
//lista.push("uva");
//lista.pop();
//console.log(lista.toString()[0]);
//console.log(lista.join("|Z "))
//o java identifica se é texto ou numero pela forma como é escrito"
//var nome = "Pablo Craveiro";
//var idade = 26;
//var idade2 = 10;
//var frase= "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão",  "brasil"));
