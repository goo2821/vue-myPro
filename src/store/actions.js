import { getData, fetchUserInfo, setUser, checkUser, findProductAll, findProductOne, findProductType, findDetail } from '../api/index.js'

export default {
  GET_DATA(context, url) {
    getData(url)
      .then(response => {
        context.commit('SET_DATA', response.data);
      })
      .catch(error => {
        console.log("실패 했습니다.", error);
      })
  },

  GET_USER_INFO({ commit }, user) {
    fetchUserInfo(user)
      .then(({ data }) => {
        commit('SET_USER_INFO', data);
      })
      .catch(error => {
        console.log("user info", error);
      })
  },

  GET_USER_RESULT({ commit }, user) {
    setUser(user)
      .then(({ result }) => {
        commit('SET_USER', result);
        console.log("회원 가입 성공")
      })
      .catch(error => {
        console.log("회원 가입 실패" + error);
      })
  },

  GET_LOGIN_RESULT({ commit }, user){
    checkUser(user)
    .then(({result}) => {
      commit('CHECK_USER', result);
      console.log("로그인 성공");
    })
    .catch(error => {
      console.log("로그인 실패" + error);
    })
  },

  GET_PRODUCT_ALL({commit}, page){
    findProductAll(page)
    .then(response => {
      commit('SET_PRODUCT_ALL', response.data);
    }).catch(error =>{
      console.log(error)
    })
  },

  GET_PRODUCT_TYPE({commit}, data){
    findProductType(data)
    .then(response => {
      console.log(data);
      commit('SET_PRODUCT_TYPE', response.data);
    }).catch(error => {
      console.log(error);
    })
  },

  GET_PRODUCT_ONE({commit}, productId) {
    findProductOne(productId)
    .then(response => {
      commit('SET_PRODUCT_ONE', response.data);
    }).catch(error => {
      console.log(error);
    })
  },

  GET_DETAIL({commit}, productId) {
    findDetail(productId)
    .then(response => {
      commit('SET_DETAIL', response.data);
    }).catch(error => {
      console.log(error);
    })
  }

}