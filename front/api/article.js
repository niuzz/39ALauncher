import fetch from './fetch'

export function addArticle (params) {
  return fetch({
    url: '/article',
    method: 'post',
    data: params
  })
}

export function getArticle (params) {
  return fetch({
    url: '/article',
    method: 'get',
    params: params
  })
}
