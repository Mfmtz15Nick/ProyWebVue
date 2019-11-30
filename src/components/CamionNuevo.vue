<template>
  <div >
    <div class="NuevoCamion">
        <div class="container-fluid">
            <div class="contenido-inp">
                <div class="row">
                <div class="col-md-3">
                    <select class="form-control">
                        <option>Seleccione</option>
                    </select>
                    <small>Seleccione el tipo de camión</small>
                </div>
                <div class="col-md-3">
                    <select class="form-control">
                            <option>Seleccione</option>
                        </select>
                        <small>Seleccione el tipo de combustible</small>
                </div>
                <div class="col-md-3">

                    <input type="text" class="space40 form-control" placeholder="Placas" aria-label="Placas" aria-describedby="addon-wrapping" />
                    <small>Escriba las placas del vehículo</small>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <input type="text" class="space40 form-control" placeholder="Capacidad de carga" aria-label="Capacidad de carga" aria-describedby="addon-wrapping" />
                    <small>Escriba la capacidad de carga (KG).</small>
                </div>
                <div class="col-md-3">
                    <input type="text" class="space40 form-control" placeholder="Capacidad de volumen" aria-label="Capacidad de volumen" aria-describedby="addon-wrapping" />
                    <small>Escriba su correo electrónico.</small>
                </div>
                <div class="col-md-3">
                    <select class="form-control">
                        <option>Seleccione</option>
                    </select>
                    <small>Seleccione el tipo de combustible</small>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                     <select class="form-control">
                        <option>Seleccione</option>
                    </select>
                    <small>Seleccione el tipo de combustible</small>
                </div>
            </div>
            </div>
        </div>
    </div>
  
  </div>
</template>

<script>
export default {
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
.row{margin-top: 20px;}
.contenido-inp{ margin-top: 10vh; margin-left: 10vh;}

</style>
