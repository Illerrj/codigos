const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata', '']
const preco = [3.50, 5, 3.50, 2, 2.50, 0]
const pessoas = [{nome:'Iller', idade: 42}, {nome:'Simone', idade: 44}]

const resultado = estoque.find((valor, index, array) => {
    return valor;
})

/*const total = preco.reduce((acc,valor, index, array) => {
    return acc + valor
}, 0)*/

//pessoa.forEach((valor, index, array) => {
  //  console.log(valor.nome, index, array)
//})

/*const retornoMap =  estoque.map((valor, index, array) => {
    return `${valor} ${index}`
})*/

