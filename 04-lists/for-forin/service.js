const axios = require('axios');
const URL = `https://dragon-ball-api.herokuapp.com/api/character`;

async function obterPessoas(nome) {
  const url = `${URL}/${nome}`;
  const response = await axios.get(url);
  return response.data;
}


module.exports = {
  obterPessoas
}

// obterPessoas('Gohan')
//   .then(function(resultado) {
//     console.log('resultado', resultado);
//   })
//   .catch(function(error) {
//     console.log('Deu ruim', error);
//   })