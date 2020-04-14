const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Herói")
    .option('-p, --poder [value]', "Poder do Herói")
    .option('-i, --id [value]', "ID do Herói")

    .option('-c, --cadastrar', "Cadastrar um Herói")
    .option('-l, --listar', "Listar Heróis")
    .option('-r, --remover [value]', "Remover um Herói por ID")
    .option('-a, --atualizar [value]', "Atualizar um Herói por ID")
    .parse(process.argv)

  const heroi = new Heroi(Commander)

  try {
    if(Commander.cadastrar) {
      delete heroi.id

      const resultado = await Database.cadastrar(heroi)
      if(!resultado) {
        console.error('Herói não foi cadastrado', error)
        return;
      }
      console.log('Heroi cadastrado com sucesso!!')
    }
    if(Commander.listar) {
      const resultado = await Database.listar()
      console.log(resultado)
      return;
    }
    if(Commander.remover) {
      const resultado = await Database.remover(heroi.id)
      if(!resultado) {
        console.error('Erro ao remover Heroi!')
        return;
      }
      console.log('Herói removido com sucesso!!')
    }
    if(Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar);
      const dado = JSON.stringify(heroi)
      const heroiAtualizar = JSON.parse(dado)
      const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
      if(!resultado) {
        console.error('Não foi possível atualizar o herói!!')
        return;
      }
      console.log('Herói foi atualizado com sucesso!!')
    }
  } catch (error) {
    console.error('Deu ruim', error)
  }
}

main()