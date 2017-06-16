'use strict'

const store = require('../store.js')
const api = require('./api')
const gamesListViewFile = require('../templates/gamesListView.handlebars')
const gameInfoView = require('../templates/gameInfoView.handlebars')

const refreshGamesData = () => {
  api.getGames()
    .then(getGamesSuccessQuiet)
    .catch(getGamesFailure)
}
// GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST |
// GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST |
// GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST | GET GAMES | POPULATE LIST |

// GET GAMES SUCCESS | GET GAMES SUCCESS | GET GAMES SUCCESS | GET GAMES SUCCESS |
const getGamesSuccess = (data) => {
  store.games = data.games
  store.wantToPlayGames = store.games.filter((game) => {
    return game.progress === 0
  })
  store.startedGames = store.games.filter((game) => {
    return game.progress === 1
  })
  store.completedGames = store.games.filter((game) => {
    return game.progress === 2
  })
  const gamesListHTML = gamesListViewFile({
    wantToPlayGames: store.wantToPlayGames,
    startedGames: store.startedGames,
    completedGames: store.completedGames
  })
  $('#games-list-content').empty()
  $('#games-list-content').append(gamesListHTML)
  $('.delete-game-button').click(onDeleteGame)
  $('.list-item-more-button').click(onShowGameInfo)
  $('.list-item-more-button').click(function () {
    $('html,body').animate({
      scrollTop: $('.game-info-div').offset().top},
        'slow')
  })
}

const getGamesSuccessQuiet = (data) => {
  store.games = data.games
  store.wantToPlayGames = store.games.filter((game) => {
    return game.progress === 0
  })
  store.startedGames = store.games.filter((game) => {
    return game.progress === 1
  })
  store.completedGames = store.games.filter((game) => {
    return game.progress === 2
  })
  const gamesListHTML = gamesListViewFile({
    wantToPlayGames: store.wantToPlayGames,
    startedGames: store.startedGames,
    completedGames: store.completedGames
  })
  $('#games-list-content').empty()
  $('#games-list-content').append(gamesListHTML)
  $('.delete-game-button').click(onDeleteGame)
  $('.list-item-more-button').click(onShowGameInfo)
  $('.list-item-more-button').click(function () {
    $('html,body').animate({
      scrollTop: $('.game-info-div').offset().top},
        'slow')
  })
}

// GET GAMES FAILURE | GET GAMES FAILURE | GET GAMES FAILURE | GET GAMES FAILURE |
const getGamesFailure = () => {
  console.log('getGamesFailure ran!')
}

const onDeleteGame = (event) => {
  const gameId = $(event.target).attr('data-id')
  api.deleteGame(gameId)
    .then(deleteGameSuccess)
    .catch(deleteGameFailure)
}

const deleteGameSuccess = () => {
  refreshGamesData()
  $('#game-info-content').empty()
}

const deleteGameFailure = () => {
  console.log('Failed to Delete Game')
}

const updateGameSuccess = () => {
  refreshGamesData()
  $('#game-info-content').empty()
}

const updateGameFailure = () => {
  console.log('Failed to Update Game!')
}

const onChangeToWant = (event) => {
  event.preventDefault()
  const currentSelectedGameId = $(event.target).attr('data-id')
  const data = {
    game: {
      progress: 0,
      id: currentSelectedGameId
    }
  }
  api.updateGame(data)
    .then(updateGameSuccess)
    .catch(updateGameFailure)
}

const onChangeToStart = (event) => {
  event.preventDefault()
  const currentSelectedGameId = $(event.target).attr('data-id')
  const data = {
    game: {
      progress: 1,
      id: currentSelectedGameId
    }
  }
  api.updateGame(data)
    .then(updateGameSuccess)
    .catch(updateGameFailure)
}

const onChangeToComplete = (event) => {
  event.preventDefault()
  const currentSelectedGameId = $(event.target).attr('data-id')
  const data = {
    game: {
      progress: 2,
      id: currentSelectedGameId
    }
  }
  api.updateGame(data)
    .then(updateGameSuccess)
    .catch(updateGameFailure)
}

// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
const onShowGameInfo = (event) => {
  const currentSelectedGameId = $(event.target).attr('data-id')
  console.log('event.target is ', event.target)
  console.log('currentSelectedGameId is ', currentSelectedGameId)
  renderGameInfo(currentSelectedGameId)
}

const renderGameInfo = (currentSelectedGameId) => {
  const currentGameArray = store.games.filter((game) => {
    return String(game.id) === currentSelectedGameId
  })
  console.log('currentGameArray is ', currentGameArray)
  const currentSelectedGame = currentGameArray[0]
  console.log('currentSelectedGame is ', currentSelectedGame)
  store.currentSelectedGame = currentSelectedGame
  console.log('currentSelectedGame is ', currentSelectedGame)
  store.currentSelectedGame.isWantToPlay = false
  store.currentSelectedGame.isStarted = false
  store.currentSelectedGame.isCompleted = false
  if (currentSelectedGame.progress === 0) {
    currentSelectedGame.isWantToPlay = true
  } else if (currentSelectedGame.progress === 1) {
    currentSelectedGame.isStarted = true
  } else if (currentSelectedGame.progress === 2) {
    currentSelectedGame.isCompleted = true
  } else {
    console.log('invalid progress')
  }
  const gameInfoHTML = gameInfoView({
    game: currentSelectedGame,
    isWantToPlay: store.currentSelectedGame.isWantToPlay,
    isStarted: store.currentSelectedGame.isStarted,
    isCompleted: store.currentSelectedGame.isCompleted
  })
  $('#game-info-content').empty()
  $('#game-info-content').append(gameInfoHTML)
  $('.delete-game-button').click(onDeleteGame)
  $('#want-to-play-button').click(onChangeToWant)
  $('#started-playing-button').click(onChangeToStart)
  $('#completed-button').click(onChangeToComplete)
}

// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |
// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |
// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |

// NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS |
const newGameSuccess = (data) => {
  $('#create-new-game-modal').modal('hide')
  refreshGamesData()
}

// NEW GAME FAILURE | NEW GAME FAILURE | NEW GAME FAILURE | NEW GAME FAILURE | NEW GAME FAILURE |
const newGameFailure = () => {
  console.log('onNewGame failed to run!')
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  newGameSuccess,
  newGameFailure
}
