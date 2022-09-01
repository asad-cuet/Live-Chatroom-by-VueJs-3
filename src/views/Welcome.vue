<template>
  <div class="welcome container">
    
    <div v-if="showLogin">
      <h4>Login</h4>
      <LoginForm @logedIn="enterChat"/>
      <p>No account yet? <span @click="showLogin=false">SignUp</span> instead</p>
    </div>
    <div v-else>
      <h4>Sign Up</h4>
      <SignupForm @signedUp="showLogin=true"/>
      <p>Already have an account? <span @click="showLogin=true">Login</span> here</p>
    </div>


  </div>
</template>

<script>
import SignupForm from '../components/SignupForm' 
import LoginForm from '../components/LoginForm' 
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: 'HomeView',
  setup()
  {
    const router=useRouter()
    const showLogin=ref(true)


    const enterChat=()=> {
         router.push({name:'Chatroom'})
    }

    return {
      showLogin,enterChat
    }
  },
  components: {
    SignupForm,LoginForm
  }
}
</script>
