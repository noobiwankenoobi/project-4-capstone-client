'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui.js')

// Authentication Events
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => { onSignIn(event) })
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// [SHOW MODALS] SECTION | [SHOW MODALS] SECTION | [SHOW MODALS] SECTION
// [SHOW MODALS] SECTION | [SHOW MODALS] SECTION | [SHOW MODALS] SECTION
const onShowSignUpModal = function (event) {
  event.preventDefault()
  $('#sign-up-modal').modal('show')
}

const onShowSignInModal = function (event) {
  event.preventDefault()
  $('#sign-in-modal').modal('show')
}

const onShowChangePasswordModal = function (event) {
  event.preventDefault()
  $('#change-password-modal').modal('show')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)

  $('#sign-up-show-modal-button').on('click', onShowSignUpModal)
  $('#sign-in-show-modal-button').on('click', onShowSignInModal)
  $('#change-password-show-modal-button').on('click', onShowChangePasswordModal)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}