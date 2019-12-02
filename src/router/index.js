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
    path: '/cambiopass?*',
    redirect: '/cambiopass'
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
    path: '/cambiopass',
    name: 'cambiopass',
    component: () => import('../views/CambioPassword.vue')
  },
  {
    path: '/cambiopasscorreo',
    name: 'cambiopasscorreo',
    component: () => import('../views/CambioPasswordCorreo.vue')
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
  let isLogged =  localStorage.getItem("token");
  let autorizacion = to.matched.some(record => record.meta.requiresAuth);
/*
  if(to.path == '/cambiopass'){

  }
*/
  if(autorizacion && !isLogged){
    
  
    return next('/');
  }
  else if(!autorizacion && isLogged ){
    // Caso éxito
    switch(to.path){

      case '/dashboard/reserva':
          return next('/dashboard/reserva');

      case '/dashboard/reserva/pago':
          return next('/dashboard/reserva/pago');
      
      case '/dashboard/reserva/pago/info':
          return next('/dashboard/reserva/pago/info');

      default:
          return next('/dashboard');
    }
  }
  else{
     next(); 
  }

})






export default router
