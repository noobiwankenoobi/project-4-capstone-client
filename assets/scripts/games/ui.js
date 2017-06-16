'use strict'

const store = require('../store.js')
// const api = require('./api')

const getGamesSuccess = (data) => {
  store.games = data.games
  store.toPlay = store.games.filter((game) => {
    return game.progress === 0
  })

  template = templateFile({
    toPlay: store.toPlay
    startedplay: store.startedplay
    donePlay: store.donePlay
  })
}

const getGamesFailure = () => {
  console.log('getGamesFailure ran!')
}

const newGameSuccess = (data) => {
  console.log('onNewGame ran!')
  console.log(data)
}

const newGameFailure = () => {
  console.log('onNewGame failed to run!')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  newGameSuccess,
  newGameFailure
}
