<template>
  <div >
   <div class="container-fluid ">
     <div class="row pb-3 d-flex justify-content-end">
       <div style="text-align:left;" class="col-md-12">
         <h2>Reservaciones</h2>
       </div>
     </div>
     <div class="row">
       <div class="col-md-12">
      <ListaReservas v-if='listado' regresarnl />
      <CamionNuevo v-if='nuevo' regresarnl />

       </div>

     </div>
   </div>
  
  </div>
</template>

<script>
import ListaReservas  from '@/components/ListaReservas.vue'
import CamionNuevo  from '@/components/CamionNuevo.vue'

export default {
  name: 'Sedes',
  props: {
    msg: String
  },
  components: {
    ListaReservas,
    CamionNuevo
  },
   data: function () {
    return {
      listado:true,
      nuevo:false
      
      
      
    }
  },
  methods: {
    nuevoC(){
      this.listado = false;
      this.nuevo = true;
    },
    regresar(){
      this.listado = true;
      this.nuevo = false;
    },
    guardar(){
      // Mandar Guardar POST todo y regresar
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >



</style>
