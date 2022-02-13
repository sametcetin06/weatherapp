const state = {
    detail: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['detail'] : null,
    authenticated: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['authenticated'] : false
  };
  
  const mutations = {
    set_user (state, user) {
      state.detail = user;
      state.authenticated = true;
      localStorage.setItem('user', JSON.stringify(state));
    },
    userLogout(state) {
      state.detail = null;
      state.authenticated = false;
      localStorage.removeItem('user')
    }
  };
  
  const getters = {
    user () {
        return state.detail
    },
    auth () {
      return state.authenticated
    }
  };
  
  const actions = {
  };
  
  export default {
    state,
    mutations,
    getters,
    actions
  };
  