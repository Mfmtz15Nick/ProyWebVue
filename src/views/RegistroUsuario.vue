<template>
  <div class="registro">
    <Header regresarnl />
    <div class="inicio">
      <div class="container-fluid contenedor">
        <div class="row">
          <div class="col-md-12 columna1">
            <h1>Regístrate con nosostros</h1>
            <p>
              Es un muy sencillo. Solo ingresa los datos que se te piden y
              <br />en breve quedarás registrado.
            </p>
          </div>
        </div>
        <div class="row renglon2">
          <div class="col-md-6 columna2">
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="addon-wrapping"
            />
            <small>Escriba su nombre.</small>
            <br />
            <div class="row">
              <div class="col-md-6">
                <input
                  v-model="primerApellido"
                  type="text"
                  class="space40 form-control"
                  placeholder="Primer Apellido"
                  aria-label="Primer Apellido"
                  aria-describedby="addon-wrapping"
                />
                <small>Escriba su primer Apellido.</small>
              </div>
              <div class="col-md-6">
                <input
                  v-model="segundoApellido"
                  type="text"
                  class="space40 form-control"
                  placeholder="Segundo Apellido"
                  aria-label="Segundo Apellido"
                  aria-describedby="addon-wrapping"
                />
                <small>Escriba su segundo Apellido.</small>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-6">
                <input
                  v-model="correoElectronico"
                  type="text"
                  class="space40 form-control"
                  placeholder="Correo"
                  aria-label="Correo"
                  aria-describedby="addon-wrapping"
                />
                <small>Escriba su correo electrónico.</small>
              </div>
              <div class="col-md-6">
                <input
                v-model="telefono"
                  type="text"
                  class="space40 form-control"
                  placeholder="Telefono"
                  aria-label="Telefono"
                  aria-describedby="addon-wrapping"
                />
                <small>Escriba su telefono.</small>
              </div>
            </div>
            <br />
            <input
              v-model="direccion"
              type="text"
              class="form-control"
              placeholder="Direccion"
              aria-label="Direccion"
              aria-describedby="addon-wrapping"
            />
            <small>Escriba su direccion.</small>

            <br />
            <br />
            <div v-if="loading" class="mt-3 spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <button v-else @click="codigo" class="btn space40 btn-block">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "registro",
  components: {
    Header
  },
  data() {
    return {
      loading:false,
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      correoElectronico: "",
      telefono: "",
      direccion: ""
    };
  },

  methods: {
    codigo() {
      this.loading = true;
      axios
        .post("http://proyweb.com.mx/prospecto/registro", {
          nombre: this.nombre,
          primerApellido: this.primerApellido,
          segundoApellido: this.segundoApellido,
          correoElectronico: this.correoElectronico,     
          telefono: this.telefono,
          direccion: this.direccion,
        })
        .then(response => {
          this.respuesta = response.data;
          this.loading = false;
          this.$router.push({ path: "/registro/codigo" });

        })
        .catch(e => {
          this.respuesta = e;
          this.loading = false;
          
        });
     
    }
  }
};
</script>
<style scoped>
.inicio {
  height: 110vh;
}
.inicio .contenedor .row .columna1 h1 {
  text-align: center;
  margin-top: 20px;
}
.inicio .contenedor .row .columna1 p {
  text-align: center;
}
.inicio .contenedor .renglon2 {
  margin-top: 50px;
  justify-content: center;
  display: flex;
}
small {
  display: block;
  text-align: left;
  color: black;
}
.btn {
  background: #10316b;
  color: white;
  font-weight: bold;
}
</style>