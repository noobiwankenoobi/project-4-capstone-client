'use strict'

const store = require('../store.js')
// const api = require('./api')
const gamesListViewFile = require('../templates/gamesListView.handlebars')
const gameInfoView = require('../templates/gameInfoView.handlebars')


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
  $('.list-item-div').click(onShowGameInfo)
}

// GET GAMES FAILURE | GET GAMES FAILURE | GET GAMES FAILURE | GET GAMES FAILURE |
const getGamesFailure = () => {
  console.log('getGamesFailure ran!')
}

// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
// GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO | GAME CLICK | SHOW GAME INFO |
const onShowGameInfo = () => {
  const currentSelectedGameId = $(event.target).attr('data-id')
  renderGameInfo(currentSelectedGameId)
}

const renderGameInfo = (currentSelectedGameId) => {
  const currentGameArray = store.games.filter((game) => {
    return String(game.id) === currentSelectedGameId
  })
  const currentSelectedGame = currentGameArray[0]

  const gameInfoHTML = gameInfoView({game: currentSelectedGame})
  $('#game-info-content').empty()
  $('#game-info-content').append(gameInfoHTML)
}

// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |
// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |
// NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE | NEW GAME SUCCESS AND FAILURE |

// NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS | NEW GAME SUCCESS |
const newGameSuccess = (data) => {
  // console.logs
  console.log('onNewGame ran!')
  console.log('return data is ', data)
  console.log('store.games, before push, is ', store.games)
  // add the new game to the store.games array
  store.games.push(data)
  // const updatedStore = store.games.push(data)
  // store.games = updatedStore
  console.log('store.games, after push, is ', store.games)
  // running getGamesSuccess again here
  // .then(() => {
  //   store.wantToPlayGames = store.games.filter((game) => {
  //     return game.progress === 0
  //   })
  //   store.startedGames = store.games.filter((game) => {
  //     return game.progress === 1
  //   })
  //   store.completedGames = store.games.filter((game) => {
  //     return game.progress === 2
  //   })
  //   const gamesListHTML = gamesListViewFile({
  //     wantToPlayGames: store.wantToPlayGames,
  //     startedGames: store.startedGames,
  //     completedGames: store.completedGames
  //   })
  //   $('#create-new-game-modal').modal('hide')
  //   $('#games-list-content').empty()
  //   $('#games-list-content').append(gamesListHTML)
  // })
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
