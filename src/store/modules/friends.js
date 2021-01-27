import axios from 'axios'

export default {
  state: {
    searchedUser: [],
    friends: [],
    listFriend: [],
    room: ''
  },
  mutations: {
    setSearchedUser(state, payload) {
      state.searchedUser = payload
    },
    setFriends(state, payload) {
      state.friends = payload
    },
    setListFriend(state, payload) {
      state.listFriend = payload
    }
  },
  actions: {
    searchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/users/search?email=${payload}`)
          .then(response => {
            context.commit('setSearchedUser', response.data.data[0])
            resolve(response.data.data[0])
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    addFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://localhost:3000/user/addfriends`, payload)
          .then(response => {
            context.commit('setFriends', response.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getListFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/user/friends/${payload}`)
          .then(response => {
            context.commit('setListFriend', response.data.data)
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
          .post(`http://localhost:3000/user/room/create`, payload)
          .then(response => {
            context.commit('setRoom', response.data.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getSearchedUser(state) {
      return state.searchedUser
    },
    getListFriends(state) {
      return state.friends
    },
    getUserId(state) {
      console.log(state)
      return state.userId
    }
  }
}
