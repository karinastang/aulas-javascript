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

elementosFake.forEach(function(elemento) {
  const qtdClasses = elemento.classList.length;
  const nomesClasses = elemento.classList.join(', ');
  
  console.log(`Tag: ${elemento.tagName} | Quantidade de classes: ${qtdClasses} | Classes: ${nomesClasses}`);
});