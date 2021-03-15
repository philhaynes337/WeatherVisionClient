import config from '../ApiConfig'

const TokenService = {
  saveAuthToken(token) {
    //window.localStorage.setItem(config.TOKEN_KEY, token)
    window.sessionStorage.setItem('TOKEN_KEY', token)
  },
  getAuthToken() {
    //return window.localStorage.getItem(config.TOKEN_KEY)
    //return window.sessionStorage.getItem(config.TOKEN_KEY)
    return window.sessionStorage.getItem('TOKEN_KEY')
  },
  clearAuthToken() {
    //window.localStorage.removeItem(config.TOKEN_KEY)
    window.sessionStorage.removeItem('TOKEN_KEY')
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService