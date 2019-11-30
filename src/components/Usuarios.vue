<template>
  <div style="" >
    
  <H1>SOY USUARIO</H1>
  
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  props: {
    msg: String
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .renglon1{justify-content: flex-end;}
  .col1{display: flex; justify-content: flex-end; margin-bottom: 50px}
</style>
