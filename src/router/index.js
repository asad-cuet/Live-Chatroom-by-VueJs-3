import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../components/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//Auth Gourd
const requireAuth=(to,from,next)=>{
  let user=projectAuth.currentUser
  console.log('Cureent User is '+user)
  if(!user)
  {
    next({name:'Welcome'})
  }
  else
  {
    next()
  }
}

const isAuth=(to,from,next)=>{
  let user=projectAuth.currentUser
  if(user)
  {
    next({name:'Chatroom'})
  }
  else
  {
    next()
  }

}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: isAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
