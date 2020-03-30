<template>
  <div>
    <h1>Home</h1>
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <p>{{ triple }}</p>
    <p v-if='show'>ここが変更点です</p>
    <button @click= 'show=!show' name="button">消す</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
        show:true
    }
  },
  computed: {
    double(){
      return this.$store.getters.double;
    },
    triple(){
      return this.$store.getters.triple;
    },
    count(){
      return this.$store.getters.count;
    }
  }
};

</script>
<style scoped>
button{
  width: 200px;
  height: 50px;
}

.v-enter-active,.v-leave-active{
  transition: opacity 1s;
}
.v-enter, .v-leave-to{
  opacity: 0;
}
</style>
