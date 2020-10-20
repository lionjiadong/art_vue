import {sentence_types, sentence_contents} from '@/api/content_card'

const content = {
  state: {
    sentenceTypes: [],
    selectedTypes: [],
    sentenceContent: {
      content: '',
      from_by: '',
      from_who: '',
      creator: '',
      uuid: '',
      create_date: '',
      type: {}
    },
    loading: true
  },
  mutations: {
    GET_TYPES: (state, types) => {
      state.sentenceTypes = types
    },
    SET_TYPES: (state, {type_id, checked}) => {
      const selectedTypes = state.selectedTypes;
      state.selectedTypes = checked
        ? [...selectedTypes, type_id]
        : selectedTypes.filter(t => t !== type_id);
    },
    SET_CONTENT: (state, sentenceContent) => {
      state.sentenceContent = sentenceContent;
    },
    SET_LOADING: (state, bool) => {
      state.loading = bool;
    }

  },
  getters: {
    getSentenceContent(state) {
      return state.sentenceContent
    },
    getSentenceTypes(state) {
      return state.sentenceTypes
    },
    getSelectedTypes(state) {
      return state.selectedTypes
    }
  },
  actions: {
    get_content({commit}) {
      commit('SET_LOADING', true)
      sentence_contents([...this.getters.getSelectedTypes]).then(res => {
        commit('SET_CONTENT',res.data)
        commit('SET_LOADING', false)
      })
    },
    get_label({commit}) {
      sentence_types().then(res => {
        commit('GET_TYPES', res.data);
        this.dispatch('get_content');
      })
    },
    type_change({commit}, {type_id, checked}) {
      commit('SET_TYPES', {type_id, checked})
    }

  }
}
export default content
