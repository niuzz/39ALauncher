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

export function getMedia (parmas) {
  return fetch({
    url: '/media',
    method: 'get',
    data: parmas
  })
}

export function getAllInfo (parmas) {
  return fetch({
    url: '/media/allInfo',
    method: 'get',
    data: parmas
  })
}
