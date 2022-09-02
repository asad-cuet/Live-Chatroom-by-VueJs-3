<template>
  <form class="left">
      <textarea placeholder="Type a message and press enter to send" 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      ></textarea>
  </form>
  <div class="container">
      <div class="error">{{error}}</div>
  </div>

</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import {timestamp} from '../firebase/config'
export default {
       setup()
       {
            const {user}=getUser()
            const message=ref('')
            const status=ref('')
            const {error,addDoc}=useCollection('message')   //Message is table name
            const handleSubmit=async()=>{
                  const chat={
                        email:user.value.email,
                        message:message.value,
                        createdAt:timestamp()
                  }
                  await addDoc(chat)
                  if(!error.value)
                  {
                        status.value="Message sent"
                        message.value=null
                        console.log(status.value)
                  }

            }
            return {
                  message,handleSubmit,error
            }
       }
}
</script>

<style scoped>
form {
      text-align:left;
}
</style>