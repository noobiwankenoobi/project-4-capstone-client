'use strict'

const config = require('../config')
const store = require('../store')

const newGame = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getGames = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGame = (gameId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/games/' + gameId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/' + data.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newGame,
  getGames,
  deleteGame,
  updateGame
}
