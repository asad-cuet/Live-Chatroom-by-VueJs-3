<template>
<div>
      <nav v-if="user">
       <div>
        <p>Hei {{user.name}}</p>
        <p class="email">Currently logged in as {{user.email}}</p>
      </div>
        <button @click="handleClick" class="button-danger">Logout</button>
        
      </nav>
    
 
  
</div>

  
</template>
<script>
  import useLogout from '../composables/useLogout'
  import getUser from '../composables/getUser'
  import {useRouter} from 'vue-router'
  export default {
      setup(props,context)
      {
        const { error,logout }=useLogout()
        const router=useRouter()
        const { user }=getUser()
 
  
        const handleClick=async()=> {
              await logout()
              if(!error.value)
              {
                    console.log('Logged Out')
                    router.push({name:'Welcome'})
              }
              
        }
        return {
              handleClick,error,user
        }
      }
  }
  </script>

<style>
  nav {
    padding: 20px;
    border-bottom:1px solid #eee;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  nav p {
    margin:2px auto;
    font-size:16px;
    color:#444;
  }

  nav p.email {
    font-size:14px;
    color:#999;
  }
</style>
    