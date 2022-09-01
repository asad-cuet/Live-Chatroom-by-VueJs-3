<template>
  <div class="container ">
      <Navbar />
      <NewChatForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar' 
import NewChatForm from '../components/NewChatForm' 
import {watch} from 'vue'
import {useRouter} from 'vue-router'
import getUser from '@/composables/getUser'

export default {
     name:'Chatroom',
     setup()
     {
      const {user}=getUser()
      const router=useRouter()
      watch(user,()=>{
        if(!user.value)
        {
          router.push({name:'Welcome'})
        }
      })
     },
     components: {
      Navbar,NewChatForm
     }
}
</script>

<style>

</style>