<template>
  <div >
   <div class="container-fluid ">
     <div class="row pb-3 d-flex justify-content-end">
       <div class="col-md-12 d-flex justify-content-end">
       <button  @click="nuevoC" v-if='listado' class="btn text-white nito bg-success pl-4 pr-4 ">Nuevo</button>
        <div v-if='nuevo'>
           <button  @click="regresar"  class="btn text-white nito bg-danger pl-4 pr-4 mr-3 ">Regresar</button>
           <button  @click="guardar"  class="btn text-white nito bg-primary pl-4 pr-4 mr-3 ">Guardar</button>

        </div>

       </div>
     </div>
     <div class="row">
       <div class="col-md-12">
      <ListadoSedes v-if='listado' regresarnl />
      <CamionNuevo v-if='nuevo' regresarnl />

       </div>

     </div>
   </div>
  
  </div>
</template>

<script>
import ListadoSedes  from '@/components/ListadoSedes.vue'
import CamionNuevo  from '@/components/CamionNuevo.vue'

export default {
  name: 'Sedes',
  props: {
    msg: String
  },
  components: {
    ListadoSedes,
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
