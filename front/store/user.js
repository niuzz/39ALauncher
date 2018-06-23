export const state = () => ({
  username: '',
  id: '',
  token: ''
})

export const mutations = {
  setUser (state, user) {
    state.username = user.username
    state.id = user.id
  }
}
