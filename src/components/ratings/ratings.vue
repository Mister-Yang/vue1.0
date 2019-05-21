<template>
  <div>
    <input type="text" placeholder="请输入内容" id="content" v-model="inpuTxt">
    <button @click="setAuthor">提交</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        inpuTxt: ''
      };
    },
    methods: {
      setAuthor: function () {
            this.$store.commit('newAuthor', this.inpuTxt); 
        // this.$store.state.author = this.inpuTxt;
        // let right = document.getElementById('content').value;
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
