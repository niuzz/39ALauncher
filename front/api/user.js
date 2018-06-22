import fetch from './fetch'

export function login (parmas) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: parmas
  })
}

export function register (params) {
  return fetch({
    url: '/user/register',
    method: 'post',
    data: params
  })
}
