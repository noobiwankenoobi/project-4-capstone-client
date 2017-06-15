'use strict'

const api = require('./api')
const ui = require('./ui.js')

const onGetGames = function (event) {
  event.preventDefault()
  api.getMovies()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// GO HOME | GO HOME | GO HOME | GO HOME | GO HOME |
const onGoHome = function (event) {
  event.preventDefault()
  $('#content').empty()
}

// EVENT HANDLERS |
const addHandlers = () => {
  $('#all-games-button').on('click', onGetGames)
  $('#go-home-button').on('click', onGoHome)
}

module.exports = {
  addHandlers
}
