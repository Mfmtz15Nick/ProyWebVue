<template>
  <div style="background: #DAE9FF; height: 105vh">
    <Header regresarnl></Header>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="seccion-texto">
            <div class="titulo">
              <h1>Reservación de servicio</h1>
            </div>
            <div class="texto-pequeno">
              Primero verificaremos si existe disponibilidad para realizar el servicio
              <br />cuando y dónde tú lo necesites.
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-8 columna-input">
          <div class="col-md-6">
            <select class="form-control" v-model="sedeOrigen">
              <option disabled value>Selecciona sede origen</option>
              <option
                v-for="ciudad in ciudades"
                v-bind:key="{ id: ciudad.alias, text: ciudad.ciudad }"
              >{{ ciudad.ciudad }}</option>
            </select>
            <small>Ciudad origen.</small>
          </div>
          <div class="col-md-6">
             <select class="form-control" v-model="sedeDestino">
              <option disabled value>Selecciona sede destino</option>
              <option
                v-for="ciudad in ciudades"
                v-bind:key="{ id: ciudad.alias, text: ciudad.ciudad }"
              >{{ ciudad.ciudad }}</option>
            </select>

            <small>Ciudad destino.</small>
            <!--<span>Selected: {{ selected }}</span>-->
          </div>
        </div>
        <div class="mt-3 col-md-8 columna-input">
          <div class="col-md-12">
            <input type="date" class="form-control" />
            <small>Fecha reservación.</small>
          </div>
        </div>
        <div class="mt-3 col-md-8 columna-input">
          <div class="col-md-12">
            <select class="form-control" v-model="selected">
              <option disabled value>Selecciona tipo camión</option>
              <option>Chico</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
            <small>Tipo camión.</small>
            <div v-if="seen" class="mt-3 spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <button v-else @click="pago" class="btn bg-primary text-white mt-3">Ver disponibilidad</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
const axios = require("axios");
export default {
  beforeMount() {
    this.getCamiones();
  },
  name: "codigo",
  components: {
    Header
  },
  methods: {
    pago() {
      this.seen = true;
      this.$router.push({ path: "/dashboard/reserva/pago" });
      this.seen = false;
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
      seen: false,
      sedeOrigen: "",
      sedeDestino: "",
      ciudades: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.texto-pequeno {
  font-size: 20px;
}
.columna-input {
  display: flex;
  justify-content: center;
}
.row {
  justify-content: center;
}
small {
  display: block;
  text-align: left;
}
</style>
