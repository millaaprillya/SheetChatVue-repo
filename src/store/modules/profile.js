import axios from 'axios'

export default {
  state: {
    profile: '',
    roomId: '',
    form: {
      user_name: '',
      profileImage: '',
      user_phone: '',
      user_email: '',
      user_bio: '',
      user_lat: '',
      user_lng: ''
    }
  },
  mutations: {
    patchUser(context, payload) {
      context.form.user_name = payload.user_name
      context.form.user_phone = payload.user_phone
      context.form.user_email = payload.user_email
      context.form.user_bio = payload.user_bio
      context.form.user_lat = payload.user_lat
      context.form.user_lng = payload.user_lng
    },
    setUserProfile(state, payload) {
      console.log(state)
      state.form = payload
    },
    setRoomId(state, payload) {
      state.roomId = payload
    }
  },
  actions: {
    getUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/user/${payload}`)
          .then(response => {
            context.commit('setUserProfile', response.data.data[0])

            resolve(response.data.data[0])
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    patchUserProfile(context, payload) {
      console.log(payload.updateData)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/${payload.id}`,
            payload.updateData
          )
          .then(response => {
            console.log(response.data.data)
            context.commit('setUserProfile', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    createRoom(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/create`, payload)
          .then(response => {
            context.commit('setRoom', response.data.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProfilePict(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/img/${payload.id}`,
            payload.image
          )
          .then(response => {
            context.commit('setUserProfile', response.data.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    deleteProfilePict(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/delete/image/${payload.user_id}`
          )
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    }
  },
  getters: {
    getProfile(state) {
      return state.profile
    },
    setProfile(state) {
      console.log(state)
      return state.form
    }
  }
}
