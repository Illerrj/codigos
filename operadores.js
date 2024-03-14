 /*const numero1 = 1;
const numero2 = 2;

// Operadores de atribuiçao 

numero1 ? alert('Retornou true') : alert('Retornou false');*/

//logico e condicionais

// && --> and
// || --> or
// ! --> not

/*const idade = 30
const tipo = 'admin'*/

/*if (idade > 29 && tipo == 'admin'){
    console.log('Ele tem mais de 29 anos e é um admin')
} and */

/*if (idade > 29 || tipo == 'admin'){
    console.log('Ele tem mais de 29 anos e é um admin')
}   ou  */


/*if (!(idade > 29) && !(tipo == 'admin')){
    console.log('Ele tem mais de 29 anos e é um admin')
}    negaçao  */


/*const idade = 23
const tipo = 'admin'

if (idade > 29 ){
    console.log('Ele tem mais de 29 anos e é um admin')
} else if(idade > 25){
    console.log('Ele tem mais de 25 anos e é um admin')
}else {
    console.log('Ele não tem idade minima')

}*/

/*const idade = 23

switch (idade){
    case 20:
        console.log('ele tem 20 anos');
        break

     case 21:
         console.log('ele tem 21 anos'); 
        break

    default:
        console.log('ELE NÃO TEM NENHUMA DAS IDADDE ANTERIORES')
        
}*/

// Etrutura de repetção 

/*for (let numero = 0; numero < 101; numero++){
    console.log(`Repetição de numero ${numero}`)
}*/


/*for (let numero = 0; numero < 101; numero++){
    console.log(numero)
    if(numero == 50){
        break
    }
}*/

/*const object = {
    name: 'Iller',
    idade: '42',
    cidade: 'Casimiro'
}

for (key in object){
    console.log(object[key])
}*/

/*const array = ['New fiesta','hb20']

for(item of array) {
    console.log(item)
}*/

/*let numero = 0;

while(numero < 5){
    console.log(numero);
    numero ++
}*/


/*const teste = (nome) =>   {
    console.log('arrow fuction', nome)

}

teste('Iller')*/

//constructor function

/*const pessoa = {
    nome: '',
    idade: 0
}
const pessoa1 = pessoa;
pessoa1.nome = 'Iller'
pessoa1.idade = 42  exemplo que nao criou nova funçao */

function Pessoa(nome, idade){
    //this.nome = '';
    this.nome = nome;// Atribui o nome aqui
    //this.idade = 0
    this.idade = idade// o mesmo com a idade 
}
const pessoa1 = new Pessoa('Iller', 42);
//pessoa1.nome = 'Iller'; passando o argumento que o nome em pessoa essa linha pode tirar 
//pessoa1.idade = 42 mesmo com a idade 

const pessoa2 = new Pessoa('Danillo', 12);
//pessoa2.nome = 'Danillo';
//pessoa2.idade = 12