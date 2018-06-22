export const state = () => ({
  usernmae: '',
  token: ''
})

export const mutations = {
  setUsername (state, username) {
    state.username = username
  }
}
