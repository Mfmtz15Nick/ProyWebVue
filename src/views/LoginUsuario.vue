<template>

 <div class="login">
   <Header regresarnl />
    <div class="container">
    <div class="row">
      <div class="col-md-12 columna">
        <h1>Bienvenido de nuevo</h1>
      <br><br><br>
      </div>
    </div>
    <div class="row">
      <div class="columna2 col-md-6 ">
        <form action @submit.prevent="login">
          <input
            v-model="usuario"
            type="text"
            class="form-control"
            placeholder="Correo Electrónico"
            aria-label="Correo Electronico"
            aria-describedby="addon-wrapping"
          />
          <small>Escriba su correo Electrónico.</small>

          <input
            v-model="contrasena"
            type="password"
            class="space40 form-control"
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="addon-wrapping"
          />
          <small>Escriba su contraseña.</small>

          <input class="btn space40 btn-block btn-primary" type="submit" value="Acceder" />
          <div  v-if="seen" class="mt-3 spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h6 class="text-primary">{{respuesta}}</h6>
        </form>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import Header  from '@/components/Header.vue'
const axios = require("axios");
export default {
  data() {
    return {
      usuario: "",
      contrasena: "",
      respuesta: "",
      seen:false,
    };
  },
   components: {
    Header 
  },
  methods: {
    login() {
      this.seen = true;
      axios
        .post("http://167.99.157.165/chofer/login", {
          correoElectronico: this.usuario,
          password: this.contrasena          

        })
        .then(response => {
          this.respuesta = response.data;

          localStorage.setItem('token', response.data.token);
          localStorage.setItem('nombre', response.data.nombre);

          this.$router.push({path:'/dashboard'})
          this.seen = false;

        })
        .catch(e => {
          this.respuesta = e;
          this.seen = false;
          
        });
    }
  }
};
</script>
<style  scoped>
.container .row {
  justify-content: center;
}
.container .row .columna {
  margin-top: 60px;
}
.container .row .columna2 {
  color: white;
}
.space40 {
  margin-top: 20px;
}
small{ display: block!important; text-align: left; color: black; }
</style>