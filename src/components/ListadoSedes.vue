<template>
  <div  >
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tipo Camión</th>
      <th scope="col">Tipo Combustible</th>
      <th scope="col">Placas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
   beforeMount() {
    this.getSedes();
  },
  name: 'Sedes',
  props: {
    msg: String
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
    },
     getCamiones: function() {
      axios
        .get("http://www.proyweb.com.mx/api/camion")
        .then(response => {
          this.ciudades = response.data;
          this.c = response.data;
        })
        .catch(e => {
          this.c = e;
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
