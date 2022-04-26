/*
console.log ("Codigo de um arquivo separado");

let num1 = 20;
let num2 = 40;
let num3 = "a";

console.log(num1 + num3);

//console.log("Uma frase nova, mas... ); //falta um fechamento de aspas
console.log("Texto final");
*/

/*
console.log(materias);

console.log(materias[4]);
delete materias[1];
console.log(materias);


let livros = new Array(); //um array novo pelo construtor
let clientes = Array.of("Fulano", "Beltrano"); //array inicializado
let equipamentos = Array.from(iterable); //array de um objeto iterável */

let nomes = []; //um array vazio 
nomes.push("Unifei");
nomes.push("UFMG");
let lixo = nomes.pop();

console.log(nomes);
console.log(nomes.length);
console.log(lixo);

let discp = ["Português", "Lógica", "Matemática", 123]; //um array com strings

console.log(discp);

//iterar o array (percorrer)
discp.forEach(element => console.log(element));

let materias = ["Física", ...discp, "Química"]; //operador spread ...

for (let [indice, prod] of discp.entries()) {
    console.log("O produto", prod, "está no índice: ", indice);
}    

//--------------------------------------------------//

//Array.map()
let precos = [300.3, 249, 100.5];
let precosDescontados = precos.map((p) => {
    let desconto = p * 0.1; //tirou 10% de cada um
    return p - desconto;
});
console.log(precos);
console.log(precosDescontados);

//--------------------------------------------------//

//Tipo de dado Objeto
let Pessoa = {
    nome: "Fulano Ribeiro",
    idade: 20,
    telefone: "88 9 7777 5555",
};

console.log(Pessoa);
console.log(Pessoa.nome);
console.log(Pessoa["nome"]); //referencia ao indice pela chave
console.log(Pessoa["telefone"]);
console.log((Pessoa.email = "teste@teste.com"));
console.log(Pessoa);

//--------------------------------------------------//

//Destructuring
let aluno = {
    nome: "Rodrigo",
    sobrenome: "Andrade",
    idade: 31,
    endereco: {
    rua: "Alameda exemplo",
    numero: 213
    }
};
let {nome, sobrenome} = aluno;
    let nome2 = aluno.nome;
    let {endereco:{rua}} = aluno;
console.log(nome, sobrenome, nome2, rua); 

//--------------------------------------------------//

//Tipagem
let x = "123" + 10; //retorna “12310” obs: não retorna NaN pois faz uma sobrecarga no operador +
console.log(typeof(x)); //retorna ‘string’
let y;
y = "texto" * 1; //retorna NaN (Not a Number)
console.log(y);

//--------------------------------------------------//
//Condicionais  -  operador ternario

/*let result = (5>3) ? value1 : value2; */

//declaração variavel = condição, entao retorna valor 1, senao, retorna valor 2.

//--------------------------------------------------//
//Declaração de funções
let example = function soma(x, y) { //function expression
    let resp = x + y;
    return resp;
}
let calc = example(5,7);
console.log(calc);


let resp = soma(3,3); //chamando a função antes de definirkkkkkkkkkk - hoisting
console.log(resp);

function soma(x,y){
    let resp = x + y;
    return resp;
};

//--------------------------------------------------//
//Funções anônimas

function mensagens() {
    setTimeout(function () { //setTimeout pede uma função de callback e o tempo.
    console.log("Primeira mensagem");
    }, 1000);
    setTimeout( () => {
    console.log("Segunda mensagem");
    }, 3000);
    setTimeout(function () {
    console.log("Terceira mensagem");
    }, 5000);
}

//mensagens();

//--------------------------------------------------//

const textos = document.querySelectorAll("p"); //document é variavel de ambiente do browser

function selecionaParagrafos() {
    const textos = document.querySelectorAll("p");
    let listaImpressao = Array.from(textos);
    listaImpressao.map((p) => console.log(p.innerText));
}

console.log(document.getElementsByTagName("h2")); //vai no elemento do browser e pega pra mim o elemento que tem a tag h2

//selecionaParagrafos(); //não reconhece isso por causa do que ta explicado ali em cima.