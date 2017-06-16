'use strict'

const api = require('./api')
const ui = require('./ui.js')

const getFormFields = require('../../../lib/get-form-fields')

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// GO HOME | GO HOME | GO HOME | GO HOME | GO HOME |
const onGoHome = function (event) {
  event.preventDefault()
  $('#content').empty()
}

const onShowNewGameModal = () => {
  $('#create-new-game-modal').modal('show')
}

// EVENT HANDLERS |
const addHandlers = () => {
  $('#go-home-button').on('click', onGoHome)
  $('#nav-lists-button').on('click', onGetGames)
  $('#nav-create-game-button').on('click', onShowNewGameModal)
  $('#create-new-game-form').on('submit', onNewGame)
}

module.exports = {
  addHandlers,
  onGetGames
}
