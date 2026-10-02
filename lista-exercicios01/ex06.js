const verificar_idade = function(numero) {
    return numero >= 18 ? "Permitido" : "Bloqueado";
};

console.log(verificar_idade(10));
console.log(verificar_idade(19));

