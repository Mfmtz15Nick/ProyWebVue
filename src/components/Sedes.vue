<template>
 <div>
     <div class="Usuarios">
        <h1
        style="text-align:left"
        >Sedes</h1>
                    <div class="container mt-4">
                    <div class="table table-striped">
                      <thead>
                        <tr>
                          <th class="col-sm-1" scope="col">Alias</th>
                          <th class="col-sm-2" scope="col">Ciudad</th>
                          <th class="col-sm-4" scope="col">Estado</th>
                          <th class="col-sm-2" scope="col">Sede padre</th>
                          <th class="col-sm-3 " scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="sede in sedes" :key="sede.id">
                          <th scope="row">{{sede.alias}}</th>
                          <td>{{sede.ciudad}}</td>
                          <td>{{sede.estado}}</td>
                          <td>{{sede.sedePadre? sede.sedePadre : '-'}}</td>
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
    return {sedes: []}
  },
  mounted: function(){
    axios.get('http://www.proyweb.com.mx/api/sede').then(response => {
      this.sedes = response.data
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },
  name: 'Sedes',
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
