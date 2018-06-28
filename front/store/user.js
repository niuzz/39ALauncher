export const state = () => ({
  username: '',
  id: '',
  token: '',
  categoryTypeList: [],
  categoryList: []
})

export const mutations = {
  setUser (state, user) {
    state.username = user.username
    state.id = user.id
  },

  setCategoryTypeList (state, list) {
    state.categoryTypeList = list
  },

  setCategoryList (state, list) {
    state.categoryList = list
  }
}
