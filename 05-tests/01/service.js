const { get } = require('axios')

const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPessoas(nome) {
  const url = `${URL}/${nome}`
  const result = await get(url)
  return result.data
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height
  }
}

// obterPessoas('pikachu')
//   .then(function(resultado) {
//     console.log('resultado', resultado);
//   })
//   .catch(function(error) {
//     console.log('Deu ruim', error);
//   })


module.exports = {
  obterPessoas
}