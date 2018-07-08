import fetch from './fetch'

export function login (params) {
  return fetch({
    url: '/admin/login',
    method: 'post',
    data: params
  })
}

export function create (params) {
  return fetch({
    url: '/admin/create',
    method: 'post',
    data: params
  })
}
