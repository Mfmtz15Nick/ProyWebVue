<template>
  <div>
    <div class="NuevoCamion">
      <div class="container-fluid">
        <div class="contenido-inp">
          <div class="row">
            <div class="col-md-3">
              <input
                v-model="alias"
                type="text"
                class="space40 form-control"
                placeholder="Alias"
                aria-label="Ali"
                aria-describedby="addon-wrapping"
              />
              <small>Alias de Sede</small>
            </div>
            <div class="col-md-3">
              <input
                v-model="ciudad"
                type="text"
                class="space40 form-control"
                placeholder="Ciudad"
                aria-label="Ciudad"
                aria-describedby="addon-wrapping"
              />
              <small>Ciudad</small>
            </div>
            <div class="col-md-3">
              <input
                v-model="estado"
                type="text"
                class="space40 form-control"
                placeholder="Estado"
                aria-label="Placas"
                aria-describedby="addon-wrapping"
              />
              <small>Estado</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <input
                v-model.number="latitud"
                type="text"
                class="space40 form-control"
                placeholder="Latitud"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Latitud</small>
            </div>
            <div class="col-md-3">
              <input
                v-model.number="longitud"
                type="text"
                class="space40 form-control"
                placeholder="Longitud"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Longitud.</small>
            </div>
            <div class="col-md-3">
              <input
                v-model="tipo"
                type="text"
                class="space40 form-control"
                placeholder="Tipo Sede"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Tipo Sede.</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <select class="form-control" v-model.number="pertenece">
                <option disabled value>Selecciona</option>
                <option
                  v-for="ciudad in ciudades"
                  v-bind:key="{ id: ciudad.alias, text: ciudad.ciudad }"
                >{{ ciudad.ciudad }}</option>
              </select>
              <small>Ciudad.</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <button @click="postsede" class="nito btn btn-block text-white bg-success">Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  beforeMount() {
    this.getCamiones();
  },
  name: "Reservaciones",
  props: {
    msg: String
  },
  
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    postsede: function() {
      axios
        .post("http://www.proyweb.com.mx/api/sede", {
          id: 0,
          alias: this.alias,
          ciudad: this.ciudad,
          estado: this.estado,
          latitud: this.latitud,
          longitud: this.longitud,
          tipo: this.tipo,
          pertenece: 1
        })
        .then(response => {
            this.respuesta = response.data;
            this.loading = false;
            this.alias = ''
            this.ciudad = ''
            this.estado = ''
            this.latitud = 0
            this.longitud = 0
            this.tipo = 0
        })
        .catch(e => {
          this.respuesta = e;
          this.loading = false;
        });
    },
    getCamiones: function() {
      axios
        .get("http://www.proyweb.com.mx/api/sede")
        .then(response => {
          this.ciudades = response.data;
          this.c = response.data;
        })
        .catch(e => {
          this.c = e;
        });
    }
  },
  data: function() {
    return {
      ciudades: [],
      alias: "",
      ciudad: "",
      estado: "",
      latitud: 0,
      longitu: 0,
      tipo: "",
      pertenece: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.row {
  margin-top: 10px;
}
</style>
