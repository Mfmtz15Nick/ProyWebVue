<template>
  <div >
  <!--  <a href="" @click="logout">Logout</a>-->
     <nav style="background: #10316B;">
      <div class="container-fluid contenedor">
        <div class="row">
            <div class="col-md-2 columnaimagen">
                <img src="https://pelonchas-231194.000webhostapp.com/logoCamion.png" alt="">
            </div>
            <div class="col-md-2 offset-md-6 columnaboton">
                <button class="btn text-white bg-warning">Cerrar Sesión</button>
            </div>
        </div>
      </div>

    </nav>

  </div>
</template>

<script>
export default {
  name: 'BarraAdmin',
  data: function () {
    return {
      count: localStorage.getItem("nombre")
    }
  },
  props:{logIn: Boolean},
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({path:'/login'})
	},
	mandarLog(){
		this.$router.push({path:'/login'})
	},
	registrar(){
		this.$router.push({path:'/registro'})
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 nav img { width: 80px; padding: 5px; }
 nav .contenedor .row .columnaboton { display: flex; justify-content: center; align-items: center; }


.nito{font-weight: bold;}
</style>
