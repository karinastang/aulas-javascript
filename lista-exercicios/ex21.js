const missoes = [
    { nome: "Derrotar chefe", pontos: 500 },
    { nome: "Encontrar tesouro", pontos: 200 },
    { nome: "Salvar personagem", pontos: 800 },
    { nome: "Explorar mapa", pontos: 100 }
];

function analisarMissoes(missoes) {
    for (const missao of missoes) {
        let classificacao;

        if (missao.pontos >= 500) {
            classificacao = "Missão difícil";
        } else if (missao.pontos >= 200) {
            classificacao = "Missão média";
        } else {
            classificacao = "Missão fácil";
        }
        console.log(`${missao.nome} - ${classificacao}`);
    };
};

