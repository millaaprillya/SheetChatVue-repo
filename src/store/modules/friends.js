import axios from 'axios'

export default {
  state: {
    searchedUser: [],
    friends: [],
    listroom: [],
    listFriend: [],
    room: '',
    search: '',
    id: ''
  },
  mutations: {
    setSearchedUser(state, payload) {
      state.search = payload
    },
    setidUser(state, payload) {
      state.id = payload
    },
    setFriends(state, payload) {
      state.friends = payload
    },
    setListFriend(state, payload) {
      state.listFriend = payload
    },
    setListroom(state, payload) {
      state.listroom = payload
    }
  },
  actions: {
    addFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/addfriends`, payload)
          .then(response => {
            console.log(response)
            context.commit('setListFriend', response.data)
            resolve(response.data.data.msg)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getListFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/user/friends/find/?id=${payload.id}&find=${payload.find}`
          )
          .then(response => {
            console.log(response)
            context.commit('setListFriend', response.data.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response.message)
          })
      })
    },
    getListRoom(context, payload) {
      const searchUser = payload.searchUser
      const userId = payload.id
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/user/list/friends/?id=${userId}&searchUser=${searchUser}`
          )
          .then(response => {
            context.commit('setListroom', response.data.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response.message)
          })
      })
    },
    createRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/room/create`, payload)
          .then(response => {
            context.commit('setListroom', response.data.data)
            resolve(response.data.data.msg)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getAlluser(state) {
      return state.listFriend
    },
    getSearchedUser(state) {
      return state.searchedUser
    },
    getListFriends(state) {
      return state.friends
    },
    getUserId(state) {
      return state.useuserId
    },
    getlistroom(state) {
      return state.listroom
    }
  }
}
