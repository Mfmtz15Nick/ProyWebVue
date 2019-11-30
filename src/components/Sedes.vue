<template>
  <div style="background:red!important;" >
    <a href="" @click="logout">Logout</a>
    <h1>Holis paps, soy SEDES</h1>
  
  </div>
</template>

<script>
export default {
  name: 'Sedes',
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

</style>
