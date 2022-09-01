<template>
  <div>
      <form @submit.prevent="handleSubmit">
            <label for="">Email</label>
            <input type="email" v-model="email" placeholder="Email"/>
            <label for="">Password</label>
            <input type="password" v-model="password" placeholder="Password"/>
            <input type="submit" class="button" value="Login"/>
      </form>
      <div class="error">{{error}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin'
export default {
    setup(props,context)
    {
      const { error,login }=useLogin()
      const email=ref('')
      const password=ref('')

      const handleSubmit=async()=> {
            await login(email.value,password.value)
            if(!error.value)
            {
                  email.value=password.value=null
                  context.emit('logedIn')
            }
            
      }
      return {
            email,password,handleSubmit,error
      }
    }
}
</script>

<style>

</style>