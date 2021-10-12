<template>
  <div id="app">
    <h2>这里是App</h2>
    <!-- history -->
    <!-- <router-link to="/home" tag="button"  active-class="active">Home</router-link>
    <router-link to="/about" tag="button"  active-class="active">About</router-link> -->

    <!-- hash -->
    <!-- <button @click="linkHome">Home</button>
    <button @click="linkAbout">About</button> -->

    <!-- 动态路由 -->
  <router-link to="/home">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link :to="'/user/'+userId">User</router-link>
  <router-link :to="{path:'/profile', query:{name:'why', age:18, height:1.88}}">Profile</router-link>
  
  <button @click="profileClick">profileClick</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhang',
    }
  },
  methods: {
    linkHome() {
      this.$router.push('/home')
    },
    linkAbout() {
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'ke',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
