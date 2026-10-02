const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];


const primeiroElemento = elementosFake[0];

for (let chave in primeiroElemento) {
  console.log(`${chave}:`, primeiroElemento[chave]);
}