'use strict'

const store = require('../store.js')
const gamesEvents = require('../games/events.js')
const gamesApi = require('../games/api.js')
const gamesUi = require('../games/ui.js')

// HELPERS
const userMessage = (message) => {
  $('#user-messages').text(message)
  $('#user-messages').show()
  setTimeout(function () {
    $('#user-messages').hide()
  }, 2000)
}

const signUpSuccess = (data) => {
  userMessage('Sign Up Succesful!')
  $('#sign-up-modal').modal('hide')
}

const signUpFailure = (error) => {
  userMessage('Sign Up Failed!')
  console.error(error)
}

const signInSuccess = (data) => {
  userMessage('Sign In Successful!')
  $('.signed-in-view').show()
  $('.signed-out-view').hide()
  $('.update-field').hide()
  store.user = data.user
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#sign-in-modal').modal('hide')
  gamesApi.getGames()
    .then(gamesUi.getGamesSuccess)
    .catch(gamesUi.getGamesFailure)
}

const signInFailure = (error) => {
  userMessage('Sign In Failed!')
  console.error(error)
}

const changePasswordSuccess = (data) => {
  userMessage('Password Changed!')
  $('#change-password')[0].reset()
  $('#change-password-modal').modal('hide')
}

const changePasswordFailure = (error) => {
  userMessage('Failed to Change Password!')
  console.error(error)
}

const signOutSuccess = () => {
  userMessage('Sign Out Successful!')
  store.user = null
  $('.signed-in-view').hide()
  $('.signed-out-view').show()
  $('#games-list-content').empty()
  $('#game-info-content').empty()
}

const signOutFailure = (error) => {
  userMessage('Sign Out Failed!')
  console.error('error on sign out is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  userMessage
}
