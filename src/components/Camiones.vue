<template>
  <div style="background:purple!important;" >
    <a href="" @click="logout">Logout</a>
    <h1>Holis paps, soy Camiones</h1>
  
  </div>
</template>

<script>
export default {
  name: 'Camiones',
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
