<template>
  <component :userId="this.userId" :is="currentView()"/>
  
</template>

<script>


import UserList from './components/UserList.vue'
import UserProfile from "./components/UserProfile.vue"

const routes = {
  '/': UserList,
  '/user/': UserProfile,
}

export default {
  name: 'App',
  components: {
    UserList,
    UserProfile,
  },
  data(){
    return{
      currentPath: window.location.hash,
      userId: window.location.hash.length > 0? window.location.hash.split('/')[2] : ""
    }
  },
  methods: {
    currentView(){
      let splitPath = (this.currentPath).split('/');
      splitPath.pop()
      splitPath.push(this.userId);
      let newPath = splitPath.join('/')
      routes[newPath] = routes['/user/'] 
      return routes[this.currentPath.slice(-1).length > 0? newPath: '/']  
    }
  },
  mounted() {
    window.addEventListener('hashchange', ()=>{
      this.currentPath = window.location.hash
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body {
  background-color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
