'use strict'

// const store = require('../store.js')
// const api = require('./api')

const getGamesSuccess = (data) => {
  console.log('getGamesSuccess ran!')
  console.log(data)
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
