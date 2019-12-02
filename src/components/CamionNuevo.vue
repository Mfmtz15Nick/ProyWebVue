<template>
  <div>
    <div class="NuevoCamion">
      <div class="container-fluid">
        <div class="contenido-inp">
          <div class="row">
            <div class="col-md-3">
              <select class="form-control" v-model="tipoCamion">
                
                <option>Chico</option>
                <option>Mediano</option>
                <option>Grande</option>
              </select>
              <small>Tamaño de camión</small>
            </div>
            <div class="col-md-3">

              <select class="form-control" v-model="tipoCombustible">
                <option>Diesel</option>
                <option>Gasolina</option>
                
              </select>
              <small>Tipo de combustible</small>
            </div>
            <div class="col-md-3">
              <input
              v-model="placas"
                type="text"
                class="space40 form-control"
                placeholder="Placas"
                aria-label="Placas"
                aria-describedby="addon-wrapping"
              />
              <small>Placas del vehículo</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <input
              v-model.number="capacidadPeso"
                type="text"
                class="space40 form-control"
                placeholder="Capacidad de carga"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Capacidad de carga (KG).</small>
            </div>
            <div class="col-md-3">
              <input
              v-model.number="volumen"
                type="text"
                class="space40 form-control"
                placeholder="Volumen"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Volumen.</small>
            </div>
            <div class="col-md-3">
              <input
              v-model.number="kilometraje"
                type="text"
                class="space40 form-control"
                placeholder="Kilometraje"
                aria-label="Capacidad de carga"
                aria-describedby="addon-wrapping"
              />
              <small>Kilometraje.</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <select class="form-control" v-model="sedeOrigen">
                <option disabled value>Selecciona sede origen</option>
                <option
                  v-for="ciudad in ciudades"
                  v-bind:key="{ id: ciudad.alias, text: ciudad.ciudad }"
                >{{ ciudad.ciudad }}</option>
              </select>
              <small>Ciudad origen.</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <button @click="postCamiones" class="btn btn-block text-white bg-success">
                Crear
              </button>
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
    },
    postCamiones: function() {
      axios
        .post("http://www.proyweb.com.mx/api/camion", {
            kilometraje: this.kilometraje,
            kilometrajeUltimoServicio: 0,
            capacidadPeso: this.capacidadPeso,
            tipoCamion: this.tipoCamion,
            tipoCombustible: this.tipoCombustible,
            volumen: this.volumen,
            placas: this.placas
        })
        .then(response => {
          this.respuesta = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.respuesta = e;
          this.loading = false;
        });
    }
  },
  data: function() {
    return {
      ciudades: [],
      kilometraje:0,
      kilometrajeUltimoServicio:0,
      capacidadPeso:0,
      tipoCamion:'',
      tipoCombustible:'',
      volumen:'',
      placas:'',
      selected:''
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
