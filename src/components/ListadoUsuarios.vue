<template>
  <div class="listado">
    <p> {{c}} </p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Dirección</th>
          <th scope="col">Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.nombre}} {{user.primerApellido}} {{user.segundoApellido}}</td>
          <td>{{user.direccion}}</td>
          <td>{{user.correoElectronico}}</td>
          <td>
            <button @click="aprobacionCliente(user.id,true)" type="button" class="btn btn-success">
              <i class="fas fa-check"></i>
            </button>
            <button @click="aprobacionCliente(user.id,false)" type="button" class="btn btn-danger">
              <i class="fas fa-ban"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  beforeMount() {
    this.getusers();
  },
  name: "Sedes",
  props: {
    msg: String
  },
  data() {
    return {
      users: [],
      c:''
    };
  },
  methods: {
    getusers: function() {
      axios
        .get("http://www.proyweb.com.mx/prospecto")
        .then(response => {
          this.users = response.data;
          this.c2 = response.data;
        })
        .catch(e => {
          this.c2 = e;
        });
    },
    aprobacionCliente: function(id, aceptado) {
      alert(id + " y aparte es" + aceptado);
      axios
        .post("http://proyweb.com.mx/cliente/registro", {
          prospectoId: id,
          aceptado: aceptado
        })
        .then(response => {
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
