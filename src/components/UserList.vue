<template>
  <div>
    <ul class="userList">
      <li v-for="user in users" :key="user.id">
        <a :href="`#/user/${user.id}`">
          <div class="userCard">
            {{user.name}}
          </div>  
       </a>
      </li>
    </ul>
    <div class="paginator">
      <button class="paginatorButton" type="button" v-on:click="goBack">Назад</button>
      <button  class="paginatorButton"  v-on:click="goForward" type="button">Вперёд</button>
    </div>
  </div> 
  
</template>

<script>
import {getRoles, getUsers} from "../api/api";

let pageNumber = 0;
let usersOnPage = 5;
let totalUsers = 20;
let pagesCount = (totalUsers/usersOnPage)-1;

export default {
  name: 'UserList',
  props: {
    msg: String,
    getRoles,
  },
  data(){
    return {
      roles: null,
      users: null
    }
  },
  async created() {
    this.roles = await getRoles()
    this.users = await getUsers(pageNumber,usersOnPage)
  },
  methods: { 
   async goBack (){
    if(pageNumber>0){
      pageNumber--;
      this.users = await getUsers(pageNumber,usersOnPage)
    }
   },
   async goForward (){
    if(pageNumber<pagesCount){
      pageNumber++;
      this.users = await getUsers(pageNumber,usersOnPage)
    }
   }
  },
}

</script>

<style scoped>

.userList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
}
.userCard{
  background-color: #41B883;
  width: 250px;
  padding: 30px;
  border-radius: 15px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
}
.paginatorButton{
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;
  border:none;
  background-color: #68cea0;
  color: white;
  font-size: large;
  width: 90px;
  
}

.paginatorButton:hover{
  background-color: #3d755c;
}
.paginatorButton:active{
  background-color: #5fc094;
}
</style>
