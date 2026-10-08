const apiProdutos = [ 
  { id: 101, nome: 'monitor led', preco: 899.9 }, 
  { id: 102, nome: 'teclado mecanico', preco: 250.0 }, 
  { id: 103, nome: 'mouse gamer', preco: 125.45 } 
];

const produtosFormatados = apiProdutos.map(produto => ({
  ...produto,
  nome: produto.nome[0].toUpperCase() + produto.nome.slice(1),
  precoFormatado: `R$ ${produto.preco.toFixed(2)}`
}))

console.log(produtosFormatados)