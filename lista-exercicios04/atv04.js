const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(nomes) {
    const listaLimpa = [...new Set(nomes)]

    return listaLimpa
}
console.log(limparLista(nomesRepetidos))