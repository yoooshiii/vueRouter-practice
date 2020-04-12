<template>
  <div class="container">
    <div class="myApp">
      <h2>Hello world</h2>
      <button @click=firestoreget >取得</button>
      <p>{{alldata}}</p>
    </div>
    <nav style="width=700px; margin= auto; padding-top:10px;">
      <router-link to="/" class="link" active-class="link-active" exact >HOME</router-link>
      <router-link :to="{name:'user-id-profile',params:{id:1}}" class="link" active-class="link-active" exact >USERS</router-link>
      <router-link to="/skill">Skill</router-link>
    </nav>
    <hr>
    <transition name='fade' mode= 'out-in'>
      <router-view></router-view>
    </transition>
    <hr>
    <router-view name="head"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data(){
    return{
      alldata:[]
    }
  },
  methods:{
    firestoreget: function(){
      const db = firebase.firestore();
      // db.collection('users').doc('UOhQ3sljiHIeTMyPcmS7').get().then(doc=>console.log(doc.data()));
      db.collection('users').where('age','==',23 ).limit(1).get().then(
        (snapshot=>{
          snapshot.forEach(doc=>{
            this.alldata.push(doc.data())
        });
      })
    )}
  }
}
</script>

<style scoped>
.container{
  text-align:center;
}
.link{
  padding-right: 10px;
}
.link-active{
  font-size: 20px;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
</style>
