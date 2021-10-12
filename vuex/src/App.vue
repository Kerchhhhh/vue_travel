<template>
  <div id="app">
    <!-- <h2>{{$store.getters.moreAgeStu(20)}}</h2> -->
    <button @click="addition"> 加一 </button>
    <button @click="addCount(5)">addCount</button>
    <button @click="increment">increment</button>
    <button @click="aUpdateInfo">aUpdateInfo</button>
    <hello-world/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        message: '我是App组件'
      }
    },
    // computed: {
    //   more20stu() {
    //     return this.$store.state.students.filter(s => s.age > 20)
    //   }
    // },
    methods: {
      // mutations
      addition() {
        // 通过commit提交
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // 普通提交的封装 不可行
        // this.$store.commit('incrementCount', count)

        // 特殊提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      // actions
      increment() {
        this.$store.dispatch('increment')
      },
      aUpdateInfo() {
        this.$store.dispatch('aUpdateInfo', {count:1111})
      }
    }
  }
</script>

<style>

</style>
