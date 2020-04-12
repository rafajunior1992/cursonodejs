const assert = require('assert')

const { obterPessoas } = require('./service')

//intalamos o pacote nock, para simular requisições
const nock = require('nock')


describe('Pokemon', function() {
  this.beforeAll(() => {
//     const response = {
//         base_experience: 112,
//         forms: [
//           {
//             name: 'pikachu',
//             url: 'https://pokeapi.co/api/v2/pokemon-form/25/'
//           }
//         ],
//         height: 4,
//         id: 25,
//         is_default: true,
//         location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
//         name: 'pikachu',
//         order: 35,
//         species: {
//           name: 'pikachu',
//           url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
//         },
//         sprites: {
//           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',     
//           back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
//           back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png', 
//           back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
//           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
//           front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',   
//           front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',     
//           front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png'
//         },
//         stats: {
//           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
//           front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',   
//           front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',     
//           front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
//         },
//         weight: 60
//       }
    

    nock('https://pokeapi.co/api/v2/')
      .get('pokemon/pikachu/')
      .reply(200, response)
  })

  it('deve buscar o pikachu com o formarto correto', async() => {
    const expected = [{
      nome: 'pikachu', 
      peso: '4' 
    }]
    
    const nomeBase = 'pikachu'
    const resultado = await obterPessoas(nomeBase)
    assert.deepEqual(resultado, expected)
  })
})