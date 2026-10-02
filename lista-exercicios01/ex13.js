const calcularFrete = valorCompra =>
    valorCompra > 150 ? "Frete Grátis" : "Cobrar Frete";

console.log(calcularFrete(200));