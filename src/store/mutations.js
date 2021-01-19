export default {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_USER_INFO(state, user) {
    state.user = user;
  },
  SET_USER(state, result) {
    state.result = result;
  },
  CHECK_USER(state, result){
    state.result = result;
  },
  SET_PRODUCT_ALL(state, product){
    state.product = product;
  }
}