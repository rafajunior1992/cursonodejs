const axios = require('axios');
const URL = `https://pokeapi.co`;

async function obterPessoas(nome) {
  const url = `${URL}/api/v2/pokemon/${nome}/`;
  const response = await axios.get(url);
  return response.data;
};


module.exports = {
  obterPessoas
};

// obterPessoas('pikachu')
//   .then(function(resultado) {
//     console.log('resultado', resultado);
//   })
//   .catch(function(error) {
//     console.log('Deu ruim');
//   })