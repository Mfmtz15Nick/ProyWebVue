<template>
  <div style="background:green!important;" >
    <a href="" @click="logout">Logout</a>
    <h1>Holis paps, soy Reservaciones</h1>
  
  </div>
</template>

<script>
export default {
  name: 'Reservaciones',
  props: {
    msg: String
  },
  data() {
    return {
      seen:false,
    };
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
