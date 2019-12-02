<template>
   <div>
     <div class="Usuarios">
        <h1
        style="text-align:left"
        >Camiones</h1>
                    <div class="container mt-4">
                    <div class="table table-striped">
                      <thead>
                        <tr>
                          <th class="col-sm-1" scope="col">ID</th>
                          <th class="col-sm-2" scope="col">Tipo de camión</th>
                          <th class="col-sm-4" scope="col">Tipo de combustible</th>
                          <th class="col-sm-2" scope="col">Placas</th>
                          <th class="col-sm-3 " scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="camion in camiones" :key="camion.id">
                          <th scope="row">{{camion.id}}</th>
                          <td>{{camion.tipoCamion}}</td>
                          <td>{{camion.tipoCombustible}}</td>
                          <td>{{camion.placas}}</td>
                          <td>
                            <button type="button" class="btn btn-primary">Editar</button>
                            <button style="margin-left: 10px" type="button" class="btn btn-danger">Eliminar</button>
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
    return {camiones: []}
  },
  mounted: function(){
    axios.get('http://www.proyweb.com.mx/api/camion').then(response => {
      this.camiones = response.data
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },
  name: 'Camiones',
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
