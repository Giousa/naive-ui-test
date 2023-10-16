import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'

const myRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'buttonName',
        component: ButtonView
      },
      {
        path: '/avatar',
        name: 'avatarName',
        component: () => import('../views/AvatarView.vue')
      }
    ]
  })

  export default myRouter