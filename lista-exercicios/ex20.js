const calcularGasto = (salarios) => {
    let gastoTotal = 0;

    for(const salario of salarios) {
        salario < 2000 ? 
        gastoTotal += salario * 1.1 : gastoTotal += salario;
    }
    return gastoTotal;
};
 
console.log(calcularGasto([1500,2000,1800,2500]));