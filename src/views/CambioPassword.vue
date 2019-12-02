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
                <p class="nito">
                  Ahora es momento de camibar tu contra
                  <br />para que ingreses con tu cuenta.
                </p>
                <br />
                <br />
              </div>
              <div class="col-md-3 columna2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contraseña"
                  aria-label="Codigo"
                  aria-describedby="addon-wrapping"
                />

                <br />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirmar la contraseña"
                  aria-label="Codigo"
                  aria-describedby="addon-wrapping"
                />
                <br />
                <div v-if="loading" class="mt-3 spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <button
                  v-else
                  @click="parametro"
                  class="btn bg-success btn-block text-white nito"
                >Confirmar</button>
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
      loading: false,
      tokenn: "",
      pass: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    parametro() {
      //alert(window.location.href)
      this.loading = true;
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "token") {
          this.token = pair[1];
        }
      }
      axios
        .post("http://proyweb.com.mx/usuario/cambiarpassword", {
          password: this.pass,
          token: this.tokenn
        })
        .then(response => {
          this.respuesta = response.data;
          this.$router.push({ path: "/" });
          this.loading = false;
        })
        .catch(e => {
          this.respuesta = e;
          //this.$router.push({ path: "/" });
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
