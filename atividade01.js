// ETAPA 1 — Ficha do Item (variáveis, tipos e template strings)

const nomeItem = "Espada das Sombras";
let precoItem = 250;
let raridadeItem = "Raro";
const quantidadeEstoque = 12;

console.log(`=== FICHA DO ITEM ===
Nome: ${nomeItem}
Preço: R$ ${precoItem}
Raridade: ${raridadeItem}
Estoque: ${quantidadeEstoque} unidades
`);

// ETAPA 2 — Regras de Negócio (operadores e condicionais)

if (precoItem >= 0) {
  console.log("Preço válido!");
} else {
  console.log("Erro: o preço do item não pode ser negativo.");
}

if (precoItem < 100) {
  raridadeItem = "Comum";
} else if (precoItem >= 100 && precoItem < 500) {
  raridadeItem = "Raro";
} else {
  raridadeItem = "Lendário";
}
console.log(`Classificação automática pelo preço: ${raridadeItem}`);

const emDestaque = precoItem > 500 ? true : false;
console.log(`Item em destaque? ${emDestaque}`);

const disponivelParaCompra = quantidadeEstoque > 0 && precoItem > 0;
console.log(`Disponível para compra? ${disponivelParaCompra}`);

console.log("");

// ETAPA 3 — Cadastro em Lote (laço for)

console.log("=== CADASTRO EM LOTE ===");
for (let i = 0; i < 5; i++) {
  console.log(`Item ${i + 1} cadastrado com sucesso!`);

  if (i % 2 === 0) {
    console.log("Item em promoção da semana!");
  }
}

console.log("");

// ETAPA 4 — Controle de Estoque (laço while)

console.log("=== CONTROLE DE ESTOQUE ===");
let estoqueAtual = 12;

while (estoqueAtual > 0) {
  estoqueAtual -= 2;

  if (estoqueAtual > 0) {
    console.log(`Venda realizada! Estoque restante: ${estoqueAtual}`);
  } else {
    console.log("Item esgotado!");
  }
}

console.log("");

// ETAPA 5 — Catálogo de Itens (laço for...of)

console.log("=== CATÁLOGO DE ITENS (VITRINE DA LOJA) ===");
const catalogo = [
  "Espada das Sombras",
  "Asas Douradas",
  "Capacete Neon",
  "Pet Dragão",
  "Skin Cyberpunk",
];

for (const item of catalogo) {
  console.log(`🛒 ${item}`);
}

