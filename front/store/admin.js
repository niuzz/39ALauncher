export const state = () => ({
  name: '',
  id: '',
  token: ''
})

export const mutations = {
  setAdmin (state, admin) {
    state.name = admin.name
    state.id = admin.id
  }
}
