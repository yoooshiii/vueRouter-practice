import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false;

const config = {
    apiKey: "AIzaSyAfgAt-M9uK7RlDYlFiwSg0dGsN48epzbk",
    authDomain: "test-20200327.firebaseapp.com",
    databaseURL: "https://test-20200327.firebaseio.com",
    projectId: "test-20200327",
    storageBucket: "test-20200327.appspot.com",
    messagingSenderId: "785923253342",
    appId: "1:785923253342:web:c2c5253937bd986de780cf"
};
// Initialize Firebase
firebase.initializeApp(config);

router.beforeEach((to,from,next)=>{
  if(to.path === "/users/1"){
    next("/");
  }
    next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
