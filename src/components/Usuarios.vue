<template>
  <div>
     <div class="Usuarios">
        <h1
        style="text-align:left"
        >Prospectos</h1>
                    <div class="container mt-4">
                    <div class="table table-striped">
                      <thead>
                        <tr>
                          <th class="col-sm-1" scope="col">#</th>
                          <th class="col-sm-2" scope="col">Nombre</th>
                          <th class="col-sm-4" scope="col">Dirección</th>
                          <th class="col-sm-2" scope="col">Correo Electrónico</th>
                          <th class="col-sm-3 " scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in users" :key="user.id">
                          <th scope="row">{{user.id}}</th>
                          <td>{{user.nombre}} {{user.primerApellido}} {{user.segundoApellido}}</td>
                          <td>{{user.direccion}}</td>
                          <td>{{user.correoElectronico}}</td>
                          <td>
                            <button type="button" class="btn btn-primary">Aceptar</button>
                            <button style="margin-left: 10px" type="button" class="btn btn-danger">Rechazar</button>
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
    return {users: []}
  },
  mounted: function(){
    axios.get('http://www.proyweb.com.mx/prospecto').then(response => {
      this.users = response.data
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },
  name: 'Usuarios',
  props: {
    msg: String
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .row{margin-top: 20px;}
  .contenido-inp{ margin-top: 5vh; margin-left: 10vh;}
  .renglon1{justify-content: flex-end;}
  .columnaboton { display: flex; justify-content: right; align-items: center; }
  .col1{display: flex; justify-content: flex-end; margin-bottom: 50px}
</style>
