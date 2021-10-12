<template>
  <div>
    <h2>{{$store.state.students}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- <h2>{{$store.getters.moreAgeStu(20)}}</h2> -->
  </div>
</template>

<script>
  export default {
    name: "HelloWorld"
  }
</script>

<style scoped>

</style>
