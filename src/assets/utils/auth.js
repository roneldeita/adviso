// import axios from 'axios';
// import Router from 'vue-router'

const ACCESS_TOKEN_KEY = 'access_token'
const USER = 'user'

export function isLoggedIn () {
  const idToken = getIdToken()
  return !!idToken
}

export function getIdToken () {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function getProfile () {
  return localStorage.getItem(USER)
}

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.name }
    })
  } else {
    next()
  }
}
