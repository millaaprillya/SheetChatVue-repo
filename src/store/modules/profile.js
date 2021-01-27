import axios from 'axios'

export default {
  state: {
    profile: '',
    form: {
      user_name: '',
      user_phone: '',
      user_email: '',
      user_bio: '',
      user_lat: '',
      user_lng: ''
    }
  },
  mutations: {
    patchUser(context, payload) {
      console.log(payload)
      context.form.user_name = payload.user_name
      context.form.user_phone = payload.user_phone
      context.form.user_email = payload.user_email
      context.form.user_bio = payload.user_bio
      context.form.user_lat = payload.user_lat
      context.form.user_lng = payload.user_lng
    },
    setUserProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/user/${payload}`)
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
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:3000/user/${payload}`, context.state.form)
          .then(response => {
            console.log(response.data.data)
            // context.commit('setUserProfile', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    // patchLocation(context, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .patch(
    //         `http://localhost:3000/user/update/profile/user/update/location/${payload.user_id}`,
    //         payload.user_data
    //       )
    //       .then(response => {
    //         resolve(response.data.data)
    //       })
    //       .catch(error => {
    //         reject(error.response)
    //       })
    //   })
    // },
    patchProfilePict(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/user/update/image/${payload.user_id}`,
            payload.user_data
          )
          .then(response => {
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
          .patch(`http://localhost:3000/user/delete/image/${payload.user_id}`)
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
      return state.profile
    }
  }
}
