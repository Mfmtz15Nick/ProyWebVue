<template>
  <div style="background: #DAE9FF; height: 1000px;" >
  
    <Header logIn>
    </Header>
    <div class="home">

		<div class="seccion1 mt-5">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-12 columna1">
							<h1><strong>Somos tu solución en renta de transportes</strong></h1>
							<br><br>
							<h4>Reserva tu servicio de transporte sin compromiso</h4>
							<button @click="logout" class="btn bg-warning text-white btn-lg">Reservar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="seccion2 mt-5">
			<div class="formulario">
				<div class="container-fluid contenedor">
					<div class="row renglon1">
						<div class="col-md-6 columna1">
							<img  style="width: 100%" src="../../public/img/nubeCamion.png">
						</div>
						<div style="height: 100%" class="col-md-6 columna2">
							<div style="margin: auto; margin-left:-20%; margin-top:30%">
							<h1><strong>Nuestra misión</strong></h1>
							<h4>Brindarte el mejor servicio de mudanza de todo méxico</h4> 
							</div>
						</div>
					</div>
				<div class="seccion3 mt-5">
					<div class="formulario">
						<div class="container-fluid contenedor">
							<div class="row renglon1">
								<div class="col-md-12 columna1">
									<h1><strong>¿No sabes como?</strong></h1>
									<h4>No te preocupes, nosotros lo hacemos <strong>fácil</strong> para ti</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="seccion4 mt-4">
					<div class="formulario">
						<div class="container-fluid contenedor">
							<div class="row renglon1">
								<div class="col-md-12 columna1">
									<img  style="width: 70%" src="../../public/img/pasos.png">
								</div>
							</div>
						</div>
					</div>
				</div>
				<br><br>
				<div class="seccion5 mt-5">
					<div class="formulario">
						<div class="container-fluid contenedor">
							<div class="row renglon1">
								<div class="col-md-12 columna1">
									<h1><strong>¿Estás listo?</strong></h1>
									<h4>Reserva <strong>ahora</strong></h4>
									<button @click="logout" class="btn bg-warning text-white btn-lg">Reservar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer style="min-width:100%; max-width:100%; margin:0px; padding:0px;">
					<img  style="width: 100%" src="../../public/img/footer.png">
				</footer>
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
  methods: {
    logout(){
      this.$router.push({path:'/login'})
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* Bolas de nubes */
.home .nubes{ position: relative; height: 19vh; }
.home .nubes img{ width: 100%; }

/* SECCION1 - Formulario */
.home .seccion1 .formulario .contenedor .renglon1 .columna1 h1 { text-align: center; }
.home .seccion1 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242; margin-bottom: 0; margin-top: 0; }
.home .seccion1 .formulario .contenedor .renglon1 .columna1 button{ display: block; margin-left: auto; margin-right: auto; margin-top: 20px; }
.home .seccion2 { margin-top: 200px; }
.home .seccion2 .formulario .contenedor .renglon1 .columna1 h2 { text-align: center; }
.home .seccion2 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242;}

</style>
