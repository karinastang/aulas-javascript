export function saudacao(nome = 'Visitante') {
  console.log(`Olá, ${nome}`);
}

export const dobro = n => n * 2;

//--------------------------------------------

export function formatarMoeda(valor) {
  console.log(`R$`, valor.toFixed(2).replace(".", ","));
}

//--------------------------------------------

export function validarEmail(email){
    console.log(email.includes('@', '.') ? 'true' : 'false');
}

//--------------------------------------------

export function obterDataFormatada(){
    console.log('DD/MM/AAAA'.Date);
}


