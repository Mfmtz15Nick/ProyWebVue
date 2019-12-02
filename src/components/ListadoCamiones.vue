<template >
  <div class="listado">
    <table class="table table-striped">
      <thead class>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tipo Camión</th>
          <th scope="col">Tipo Combustible</th>
          <th scope="col">Placas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="camion in camiones" :key="camion.id">
          <th scope="row">{{camion.id}}</th>
          <td>{{camion.tipoCamion}}</td>
          <td>{{camion.tipoCombustible}}</td>
          <td>{{camion.placas}}</td>
          <!-- <td>
                            <button type="button" class="btn btn-primary">Editar</button>
                            <button style="margin-left: 10px" type="button" class="btn btn-danger">Eliminar</button>
                          </td>
          -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  beforeMount() {
    this.getCamiones();
  },
  name: "Camiones",
  props: {
    msg: String
  },
  data() {
    return {
      camiones: []
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    getCamiones: function() {
      axios
        .get("http://www.proyweb.com.mx/api/camion")
        .then(response => {
          this.camiones = response.data;
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
