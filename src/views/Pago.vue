<template>
  <div style="background: #DAE9FF; height: 100vh">
    <Header regresarnl></Header>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="seccion-texto">
                    <div class="titulo">
                        <h1>Reservación de servicio</h1>
                    </div>
                    <div class="texto-pequeno">
                        Primero verificaremos si existe disponibilidad para realizar el servicio <br>
                        cuando y dónde tú lo necesites.
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="mt-3 col-md-7 columna-input">
                <div class="col-md-12">
                    <input type="number" placeholder=" XXXX - XXXX - XXXX - XXXX" class="form-control">
                    <small>Número de tarjeta.</small>
                </div>
            </div>
            <div class="col-md-7 columna-input mt-3">
                <div class="col-md-6">
                    <input type="date" placeholder="Fecha de vencimiento" class="form-control">
                    
                    <small>Fecha de vencimiento.</small>
                    <!--<span>Selected: {{ selected }}</span>-->
                </div>
                <div class="col-md-6">
                    <input type="number" placeholder="CVV" class="form-control">
                    
                    <small>CVV</small>
                    <!--<span>Selected: {{ selected }}</span>-->
                </div>
            </div>
             <div class="mt-3 col-md-7 columna-input">
                <button  @click="info" class="btn bg-primary text-white mt-3">Pagar</button>
                    <div class="mt-3 spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
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
