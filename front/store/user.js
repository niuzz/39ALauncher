export const state = () => ({
  name: '',
  id: '',
  token: '',
  categoryTypeList: [],
  categoryList: []
})

export const mutations = {
  setUser (state, user) {
    state.name = user.name
    state.id = user.id
  },

  setCategoryTypeList (state, list) {
    state.categoryTypeList = list
  },

  setCategoryList (state, list) {
    state.categoryList = list
  }
}
