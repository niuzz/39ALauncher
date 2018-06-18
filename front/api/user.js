import fetch from './fetch'

export function login (parmas) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: parmas
  })
}
