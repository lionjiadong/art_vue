const user = {
  state: {
    name: '123'
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    set_name({commit}, content) {
      commit('SET_NAME',content)
    }
  }
}
export default user
