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
    messeage:{
      get(){
        return this.$store.getters.mes;
      },
      set(value){
        this.$store.dispatch('UpdateMes',value);
      }
    }
  },
  methods:{
    ...mapActions(["Increment","Decrement"])
  }
}
</script>
