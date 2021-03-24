import axios from 'axios'

export default {
  state: {
    message: [],
    friends: []
  },
  mutations: {
    setListMessage(state, payload) {
      state.message = payload
      console.log(state)
    },
    pushMessages(state, payload) {
      state.message.push(payload)
    },
    friendsMessage(state, payload) {
      state.friends = payload
      console.log(state)
    }
  },
  actions: {
    getMessageByRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/user/byid/room/${payload.room_id}/${payload.sender_id}`
          )
          .then(response => {
            console.log(response)
            context.commit('setListMessage', response.data.data.messages)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getDataMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/user/byid/room/${payload.room_id}/${payload.sender_id}`
          )
          .then(response => {
            console.log(response)
            context.commit('friendsMessage', response.data.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    sendMessage(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/Chat`, payload)
          .then(response => {
            console.log(response)
            context.commit('pushMessages', response.data.data).catch(error => {
              reject(error.response.data.msg)
            })
          })
      })
    },
    sendFile(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/chat/sendFile`, payload)
          .then(response => {
            console.log(response)
            context.commit('pushMessages', response.data.data).catch(error => {
              reject(error.response.data.msg)
            })
          })
      })
    }
  },
  getters: {
    getMessage(state) {
      return state.message
    },
    getDataFriend(state) {
      return state.friends
    }
  }
}
