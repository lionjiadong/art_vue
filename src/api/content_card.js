import request from '@/util/request'

const sentence_card_api = {
  sentence_types: '/sentences/content_types/',
  sentence_contents: '/sentences/contents/'
}

export function sentence_types() {
  return request({
    url: sentence_card_api.sentence_types,
    method: 'get'
  })
}

export function sentence_contents(selected_types) {
  console.log(selected_types);
  return request({
    url: sentence_card_api.sentence_contents,
    params: { type_list: selected_types },
    method: 'get'
  })
}
