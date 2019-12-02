<template>
  <div class="listado" >
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Alias</th>
      <th scope="col">Ciudad</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="sede in sedes" :key="sede.id">
            <th scope="row">{{sede.alias}}</th>
            <td>{{sede.ciudad}}</td>
            <td>{{sede.estado}}</td>
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
  name: "Sedes",
  props: {
    msg: String
  },
  data() {
    return {
      sedes: []
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    getSedes: function() {
      axios
        .get("http://www.proyweb.com.mx/api/sede")
        .then(response => {
          this.sedes = response.data;
          this.c = response.data;
        })
        .catch(e => {
          this.c = e;
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.listado {
    height: 70vh;
  overflow-y: scroll;
}
</style>
