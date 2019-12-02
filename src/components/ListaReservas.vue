<template >
  <div class="listado">
    <table class="table table-striped">
      <thead class>
        <tr>
          <th scope="col">Folio</th>
          <th scope="col">Tipo Camión</th>
          <th scope="col">Fecha Reserva</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservacion in reservaciones" :key="reservacion.id">
          <th scope="row">{{reservacion.folio}}</th>
          <td>{{reservacion.tipoCamion}}</td>
          <td>{{reservacion.fechaReservacion}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  beforeMount() {
    this.getreservacion();
  },
  name: "Reservaciones",
  props: {
    msg: String
  },
  data() {
    return {
      reservaciones: []
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    getreservaciones: function() {
      axios
        .get("http://www.proyweb.com.mx/api/reservaciones")
        .then(response => {
          this.reservaciones = response.data;
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
