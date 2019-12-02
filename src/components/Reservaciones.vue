<template>
  <div>
     <div class="Usuarios">
        <h1
        style="text-align:left"
        >Reservaciones</h1>
                    <div class="container mt-4">
                    <div class="table table-striped">
                      <thead>
                        <tr>
                          <th class="col-sm-1" scope="col">Folio</th>
                          <th class="col-sm-2" scope="col">Tipo de camión</th>
                          <th class="col-sm-4" scope="col">Fecha de reservación</th>
                          <th class="col-sm-3 " scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="reservacion in reservaciones" :key="reservacion.id">
                          <th scope="row">{{reservacion.folio}}</th>
                          <td>{{reservacion.tipoCamion}}</td>
                          <td>{{reservacion.fechaReservacion}}</td>
                          <td>
                            <button type="button" class="btn btn-primary">Mostrar</button>
                          </td>
                        </tr>
                      </tbody>
                  </div>
                </div>
     </div>
     </div>
</template>

<script>
  /* eslint-disable */
import axios from 'axios';

export default {
  data: function(){
    return {reservaciones: []}
  },
  mounted: function(){
    axios.get('http://www.proyweb.com.mx/api/reservaciones').then(response => {
      this.reservaciones = response.data
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },
  name: 'Reservaciones',
  props: {
    msg: String
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
