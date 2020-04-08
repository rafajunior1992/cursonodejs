//Obter um usuário
//Preciso obter um numero de telefone de um usuario a partir de seu ID
//Obter o endereço do usuário pelo ID 
//importamos um módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  //quando der algum problema, chama o reject(ERRO)
  //quando der tudo certo, chama o resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000);
  })
};

function obterTelefone(idUsuario) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      })
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}


//1º passo adicoonar a palavra async e ela  retornará uma Promise
main();
async function main() {
  try {
    console.time('medida-promise');
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);
    const endereco = resultado[1];
    const telefone = resultado[0];

    console.log(`
      Nome: ${usuario.nome},
      Telefone: (${telefone.ddd}) ${telefone.telefone},
      Endereço: ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promise');
  } catch (error){
    console.log('Deu ruim!!', error);
  }
}

// const usuarioPromise = obterUsuario();

// //para manipulaer com sucesso usamos a função .then
// //para manipular erros, usamos .catch

// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id)
//       .then(function resolveTelefone(result) {
//         return {
//           usuario: {
//             nome: usuario.nome,
//             id: usuario.id,
//           },
//           telefone: result
//         }
//       })
//   })
//   .then(function(resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function(resultado) {
//     console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `);
//   })
//   .catch(function(error) {
//     console.error('Deu ruim', error);
//   })

// obterUsuario(function resolverUsuario(error, usuario) {
//   // null || "" || 0 === false
//   if (error) {
//     console.log('Deu Ruim no Usuario', error);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
//     if (erro1) {
//       console.log('Deu Ruim no Telefone', erro1);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//       if (erro2) {
//         console.log('Deu Ruim no Endereço', erro2);
//         return;
//       }

//       console.log(`
//         Nome: ${usuario.nome},
//         Endereco: ${endereco.rua},${endereco.numero},
//         Telefone: (${telefone.ddd})${telefone.telefone}
//       `)
//     })
//   })
// })

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);

// console.log('telefone', telefone);