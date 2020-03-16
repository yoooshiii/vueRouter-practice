<template>
  <div>
    <button @click=increment(2) name="button">+1</button>
    <button @click=decrement(2) name="button">-1</button>
  </div>
</template>

<script>
// import {mapMutations} from "vuex";
import {mapActions} from "vuex";

export default {
  methods:{
    ...mapActions(["increment","decrement"])
    // increment(){
    //   this.$store.dispath('increment',2);
    // },
    // decrement(){
    //   this.$store.dispath('decrement',2);
    // }

    // ...mapMutations(["increment","decrement"])

    // increment(){
    //   this.$store.commit("increment",1);
    // },
    // decrement(){
    //   this.$store.commit("decrement",1);
    // }
  }
}
</script>
