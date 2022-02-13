import Vue from 'vue';
import { API_URL } from 'app-config';
import store from 'app-stores';
import router from '../router'

export default {
  login (creds) {
    
    return new Promise((resolve, reject) => {
      let LOGIN_URL = API_URL + 'auth/';
      Vue.$http.post(LOGIN_URL, creds).then(response => {
        if (response.data) {
          Vue.$http.post(API_URL + 'weather/me', {}, {
            headers: {
              'Authorization': `JWT ${response.data.access}`
            }
          }).then (user => {
              console.log('user', user);
              store.commit('set_user', user.data)
              setTimeout(() => {
                router.push({ name: 'dashboard'})
              }, 10);
          })
        } else {
          reject(false)
        }
      }, error => {
        reject(error);
      });
    });
  }
};
