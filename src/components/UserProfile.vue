<template>
  <div>
    <h1>
    {{this.user.name}}
    </h1>
    <div>
      <ul class="roleList">
        <li v-for="role in value" :key="role">
            <div class="role">
              {{showRoleName(role)}}
            </div>  
        </li>
    </ul>
    </div>
    <div>
      <select v-model="value" multiple class="dropdownSelect" @change="onChange()" >
        <option v-for="option in options" :value="option" v-bind:key="option">{{showRoleName(option)}}</option>
      </select>
    </div>
    <body>
  </body>
  </div>
</template>

<script>
import {getUser, setRole,removeRole} from "../api/api";

export default {
  
  name: 'UserProfile', 
  props:{
    userId: String, 
  },
  data(){
    return {
      user: null,
      value: null,
      options: [1, 2, 3, 4],
    }
  },
  methods:{
    showRoleName(role){
      switch(role){
       case 1:
         return 'Admin'
       case 2:
         return 'Manager'
       case 3:
         return 'User' 
       case 4:
         return 'Tester'
       default:
         return role
      }
    },
    onChange(){
      let deletedRoles = this.options.filter((addedRole)=> !this.value.includes(addedRole))
      this.value.map((role)=>{
        setRole(this.userId, role)
      })
      deletedRoles.map(role=>{
        removeRole(this.userId,role)
      })
    }
  },
  async created() { 
    console.log('aboba');
    this.user = await getUser(this.userId)
    console.log(this.user.roles);
    this.value = this.user.roles
  },
  mounted(){
    
  }
  

}

</script>

<style lang='scss'>
.roleList {
  background-color: white;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 24px;
  width: 550px;
  list-style: none;
}
.role{
  background-color: #41B883;
  list-style: none;
  width: 100px;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
}
.dropdownSelect{
  width: 350px;
}


</style>
