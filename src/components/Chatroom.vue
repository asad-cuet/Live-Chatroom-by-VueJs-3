<template>
  <div class="container">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar' 
import NewChatForm from '../components/NewChatForm' 
import ChatWindow from '../components/ChatWindow' 
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
      Navbar,NewChatForm,ChatWindow
     }
}
</script>

<style>

</style>