<template>
  <div style="background: #DAE9FF; height: 100vh">
    <Header></Header>
    <div class="codigo">
      <div class="seccion1 mt-5">
        <div class="formulario">
          <div class="container-fluid contenedor">
            <div class="row renglon1">
              <div class="col-md-12 columna1">
                <h1>¡Gracias por elegirnos!</h1>
                <p>
                  Te llegará un correo electrónico donde te daremos instrucciones
                  <br />para que ingreses con tu cuenta.
                </p>
                <br />
                <br />
              </div>
              <div class="col-md-2 columna2">
                <input
                  v-model="codigoVerificacion"
                  type="text"
                  class="form-control"
                  placeholder="Codigo"
                  aria-label="Codigo"
                  aria-describedby="addon-wrapping"
                />
                <br />
                <div v-if="loading" class="mt-3 spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <button @click="mandar" v-else class="btn bg-success btn-block text-white nito">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import Header from "@/components/Header.vue";
export default {
  name: "codigo",
  components: {
    Header
  },
  data() {
    return {
      codigoVerificacion: "",
      loading: false
    };
  },
  methods: {
    mandar() {
      this.loading = true;
      axios
        .post("http://www.proyweb.com.mx/prospecto/verificar", {
            codigoVerificacion: this.codigoVerificacion
        })
        .then(response => {
          this.respuesta = response.data;
          this.loading = false;
          this.$router.push({ path: "/" });
        })
        .catch(e => {
          this.respuesta = e;
          this.loading = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* Bolas de nubes */
.inicio .nubes {
  position: relative;
  height: 19vh;
}
.inicio .nubes img {
  width: 100%;
}
.row {
  justify-content: center;
}

/* SECCION1 - Formulario */
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h1 {
  text-align: center;
}
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h4 {
  text-align: center;
  color: #424242;
  margin-bottom: 0;
  margin-top: 0;
}
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.inicio .seccion2 {
  margin-top: 200px;
}
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h2 {
  text-align: center;
}
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h4 {
  text-align: center;
  color: #424242;
}
</style>
