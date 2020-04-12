<template>
  <div>
    <p>{{skills}}</p>
    <p>{{ysk}}</p>
    <div :text-content.prop="message"></div>
    <p>{{num}}</p>
    <button type="button" @click= "incre" name="button"></button>
  </div>
</template>

<script>
export default{
  data(){
    return{
        message:'このサイトはVueのプラクティスとFirebaseの実験を合わせたものです。',
        skills:'Vue.js',
        ysk:'CopyWrite YOSHIKI.K',
        num:0
    };
  },
  mounted: function(){
    this.scroll = 100
  },
  methods: {
    incre:function(){
      var vm = this
      vm.num ++
    }
  }
}
</script>
