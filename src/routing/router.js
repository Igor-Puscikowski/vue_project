import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../components/views/Register-view.vue'
import LoginView from '../components/views/Login-view.vue'
import CreateLesson from '../components/views/CreateLesson-view.vue'
import Home from '../components/views/Home-view.vue'
import LessonListView from '../components/views/LessonList-view.vue'
import MyLessonsView from '../components/views/MyLessons-view.vue'
import AdminLessonListView from '../components/views/AdminLessonList-view.vue'
import EditLessonView from '../components/views/EditLesson-view.vue' // Import EditLessonView

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/create',
    name: 'CreateLesson',
    component: CreateLesson
  },
  {
    path: '/lessons',
    name: 'LessonList',
    component: LessonListView
  },
  {
    path: '/my-lessons',
    name: 'MyLessons',
    component: MyLessonsView
  },
  {
    path: '/admin-lessons',
    name: 'AdminLessons',
    component: AdminLessonListView
  },
  {
    path: '/edit-lesson/:id',
    name: 'EditLesson',
    component: EditLessonView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
