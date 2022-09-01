<template>
  <form>
      <textarea placeholder="Type a message and press enter to send" 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      ></textarea>
  </form>
</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import {timestamp} from '../firebase/config'
export default {
       setup()
       {
            const {user}=getUser()
            const message=ref('')
            console.log(user)
            const handleSubmit=async()=>{
                  const chat={
                        name:user.value.name,
                        email:user.value.email,
                        message:message.value,
                        createdAt:timestamp()
                  }
                  console.log(chat)

            }
            return {
                  message,handleSubmit
            }
       }
}
</script>

<style>

</style>