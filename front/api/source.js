'use strict'

import fetch from './fetch'

export function uploadFile (parmas) {
  return fetch({
    url: '/source/file',
    method: 'post',
    data: parmas
  })
}
