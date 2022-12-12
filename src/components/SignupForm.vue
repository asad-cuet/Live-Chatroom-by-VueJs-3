<template>
  <div>
      <form @submit.prevent="handleSubmit">
            <label for="">Name</label>
            <input type="text" v-model="name" placeholder="Name"/>
            <label for="">Email</label>
            <input type="email" v-model="email" placeholder="Email"/>
            <label for="">Password</label>
            <input type="password" v-model="password" placeholder="Password"/>
            <input type="submit" class="button" value="Sign Up"/>
      </form>
      <div class="error">{{error}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup(props,context)
    {
      const { error,signup }=useSignup()
      const name=ref('')
      const email=ref('')
      const password=ref('')

      const handleSubmit=async()=> {
            await signup(email.value,password.value,name.value)
            if(!error.value)
            {
                  console.log('Sign up complete')
                  name.value=email.value=password.value=null
                  context.emit('signedUp')
            }
            
      }
      return {
            name,email,password,handleSubmit,error
      }
    }
}
</script>

<style>

</style>