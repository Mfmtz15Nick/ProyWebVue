<template>
  <div style="background: #DAE9FF; height: 1000px;" >
  
    <!--<a href="" @click="logout">Logout</a>-->
    <Header logOut v-bind:nombreUsuario="nombre">
    </Header>
    <div class="dashboard">

		<div class="seccion1 mt-5">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-12 columna1">
							<h1>Sómos tu solución en renta</h1>
							<h1>de transportes</h1> <br><br>
							<h4>Reserva tu servicio de transporte sin</h4>
							<h4>compromiso</h4>
							<!--<button class="btn bg-warning text-white">Reservar</button>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="seccion2">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-12 columna1">
							<h2>Manejamos tres tamaños de camión</h2>
							<h4>Utiliza el tamaño que más se acomode a tus</h4>
							<h4>necesidades</h4>
						</div>
					</div>
					<div class="row renglon2">
						<div class="col-md-12 columna2">
							<!-- <div> AQUI VAN LOS CAMIONES </div> -->
              <button  @click="reserva" class="btn btn-success text-white">Reserva</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


  

  </div>
</template>

<script>
import Header  from '@/components/Header.vue'
export default {
  name: 'home',
  components: {
      Header
  },
  data() {
    return {
      nombre: localStorage.getItem("nombre")
    };
  },
  methods: {
    reserva(){
      this.$router.push({path:'/dashboard/reserva'})   
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* Bolas de nubes */
.dashboard .nubes{ position: relative; height: 19vh; }
.dashboard .nubes img{ width: 100%; }

/* SECCION1 - Formulario */
.dashboard .seccion1 .formulario .contenedor .renglon1 .columna1 h1 { text-align: center; }
.dashboard .seccion1 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242; margin-bottom: 0; margin-top: 0; }
.dashboard .seccion1 .formulario .contenedor .renglon1 .columna1 button{ display: block; margin-left: auto; margin-right: auto; margin-top: 20px; }
.dashboard .seccion2 { margin-top: 200px; }
.dashboard .seccion2 .formulario .contenedor .renglon1 .columna1 h2 { text-align: center; }
.dashboard .seccion2 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242;}

</style>
