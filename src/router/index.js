import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/admin',
    redirect: '/admin/login'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginUsuario.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/RegistroUsuario.vue')
  },
  {
    path: '/registro/codigo',
    name: 'codigo',
    component: () => import('../views/Codigo.vue')
  },
  {
    path: '/dashboard/reserva',
    name: 'reserva',
    component: () => import('../views/Reserva.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/reserva/pago/info',
    name: 'info',
    component: () => import('../views/Informacion.vue'),
    meta:{
      requiresAuth: true
    }
  },
  

  {
    path: '/dashboard/reserva/pago',
    name: 'pago',
    component: () => import('../views/Pago.vue'),
    meta:{
      requiresAuth: true
    },
    
  },
  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta:{
      requiresAuth: true
    }
  },
  // ADMIN
  {
    path: '/admin/gestor',
    name: 'gestor',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/login',
    name: 'adminlogin',
    component: () => import('../views/AdminLogin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {


  let isLogged = true;
  let autorizacion = to.matched.some(record => record.meta.requiresAuth);

  if(autorizacion && !isLogged){
    
  
    return next('/');
  }
  else if(!autorizacion && isLogged ){
    // Caso éxito
    

    if( to.path === '/dashboard/reserva'){
      
      return next('/dashboard/reserva');

    }
    else if(to.path === '/dashboard/reserva/pago'){
      

      return next('/dashboard/reserva/pago');
    }
    else if(to.path === '/dashboard/reserva/pago/info'){
      

      return next('/dashboard/reserva/pago/info');
    }
    else if(to.path === '/admin/gestor'){
      return next('/');
    }
    else{
      

      return next('/dashboard');
    }
  }
  else{
     next(); 
  }




})






export default router
