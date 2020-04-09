const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for (let index = 0; index <= this.length -1; index++) {
    valorFinal = callback(valorFinal, this[index], index)
  }
  return valorFinal
}

async function main() {
  try {
    const { results } = await obterPessoas(``)
    const pesos = results.map(item => parseInt(item.height))
    
    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior+proximo
    // })

    console.log('pesos', pesos)

    const minhaLista = [
      ['Rafa', 'Ricardo'],
      ['NodeBR', 'Nerdzão']
    ]
    const total = minhaLista.meuReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')
    

    console.log('total', total)
  } catch (error) {
    console.error('Deu ruim', error)
  }
}

main()