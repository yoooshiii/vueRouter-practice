<template>
  <div>
    <button @click=Increment(2) name="button">+1</button>
    <button @click=Decrement(2) name="button">-1</button>
    <input type="text" v-model='messeage'>
    <p>{{ messeage }}</p>
  </div>
</template>

<script>
// import {mapMutations} from "vuex";
import {mapActions} from "vuex";

export default {
  computed:{
    ...mapActions(["Increment","Decrement"]),
    messeage:{
      get(){
        return this.$store.getters.mes;
      },
      set(value){
        this.$store.dispatch('UpdateMes',value);
      }
    }
    // ,"Decrement"
    // Increment(){
    //   this.$store.dispath('increment',2);
    // },
    // Decrement(){
    //   this.$store.dispath('decrement',2);
    // }

    // ...mapMutations(["Increment","Decrement"])

    // Increment(){
    //   this.$store.commit("increment",1);
    // },
    // Decrement(){
    //   this.$store.commit("decrement",1);
    // }
  }
}
</script>
