const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

const descontos = [...produtos.map(produto => {
    produto.preco = (produto.preco * 1.1).toFixed(2)
    
    return produto
})]

console.log (descontos)