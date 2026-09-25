const buscarNome = (nomes, nomeBuscado) => {
    for(const nome of nomes) {
        if (nome === nomeBuscado){
            return true;
        }
    }
    return false;
};

console.log(buscarNome(["Ana", "joão", "Maria"], "joão"));