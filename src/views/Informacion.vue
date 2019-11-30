<template>
  <div style="background: #DAE9FF; height: 100vh">
    <Header regresarnl></Header>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="seccion-texto">
                    <div class="titulo">
                        <h1>¡Gracias por elegirnos!</h1>
                    </div>
                    <div class="texto-pequeno">
                        Te llegará un correo electrónico con la información de tu reserva.
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "codigo",
  components: {
    Header
  },
  methods: {
    info() {
      localStorage.clear();
      this.$router.push({ path: "/dashboard/reserva/pago/info" });
    }
  },
  data: function () {
    return {
        selected:''
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .texto-pequeno{font-size: 20px;}
    .columna-input{display: flex;justify-content: center;}
    .row{justify-content: center;}
    small{display: block; text-align: left;}
</style>
