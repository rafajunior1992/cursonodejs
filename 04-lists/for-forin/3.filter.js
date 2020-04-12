const { obterPessoas } = require('./service')

/**
 * const item = {
 *  nome: 'Rafa',
 *  idade: 28,
 * }
 * 
 * const { nome, idade } = item
 * console.log(nome, idade)
 */


Array.prototype.meuFilter = function(callback) {
  const lista = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    //0, "", null, undefined === false
    if (!result) continue;
    lista.push(item)
  }
  return lista;
}


//por padrão precisa retornar um booleano
//para informar se deve manter ou remover da lista
//true > mantem
//não encontrou = -1
//encontrou = posição no array
// const pokemonFogo = results.filter(function(item) {
//   const result = item.name.toLowerCase().indexOf('pid') !== -1
//   return result
// })


 async function main() {
  try {
    const { results } = await obterPessoas('')

    const pokemonFogo = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length)
      return item.name.toLowerCase().indexOf('char') !== -1
    })

    const names = pokemonFogo.map((pokemon) => pokemon.name)
    console.log(names)

  } catch (error) {
    console.error('Deu ruim', error)
  }
 }

 main()