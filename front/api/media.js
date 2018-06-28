import fetch from './fetch'

export function getCategoryType () {
  return fetch({
    url: '/media/categoryType',
    method: 'get'
  })
}

export function getCategory () {
  return fetch({
    url: '/media/category',
    method: 'get'
  })
}

export function getMedia (params) {
  return fetch({
    url: '/media',
    method: 'get',
    data: params
  })
}

export function addMedia (params) {
  return fetch({
    url: '/media',
    method: 'post',
    data: params
  })
}

export function updateMedia (params) {
  return fetch({
    url: '/media',
    method: 'put',
    data: params
  })
}

export function getAllMediaInfo (params) {
  return fetch({
    url: '/media/allInfo',
    method: 'get',
    data: params
  })
}
