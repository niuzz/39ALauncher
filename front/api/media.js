import fetch from './fetch'

export function getMedia (parmas) {
  return fetch({
    url: '/media',
    method: 'get',
    data: parmas
  })
}
