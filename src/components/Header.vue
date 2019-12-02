<template>
  <div>
  
    <!--<a href="" @click="logout">Logout</a>-->
      <div class="barra">
		<nav class="">
			<div class="contenido container-fluid">
				<div class="row">
					<div class="col-md-2 col1 ">
              <a style="cursor:pointer;" @click="regresar">
						<img  src="https://pelonchas-231194.000webhostapp.com/logoNav.png" alt="">

              </a>
					</div>
					<div class="derecha col-md-10 ">
						<div  v-if="regresarnl" class="col-md-2 col2 ">
							<button @click="regresar" class="btn nito"> Regresar </button>
						</div>
                        <div  v-if="logIn " class="col-md-1 col2 ">
							<button @click="mandarLog"  class="nito btn bg-light"> Ingresar</button>
							
						</div>
            <div  v-if="logIn " class="col-md-2 col2 ">
							<button  @click="registrar" class="btn bg-primary text-white nito"> Regístrate</button>
						</div>
                        <div  v-if="logOut " class="col-md-2 col2 ">
                            <button  @click="logout"  class="btn nito"> Cerrar Sesión</button>						</div>
                        <div  v-if="logOut " class="col-md-2 col2 ">
							<h6 class="nito" > {{nombreUsuario}}  </h6>
						</div>
					</div>
				</div>

			</div>
		</nav>
	</div>
    <div class="inicio">
		<div class="nubes">
			<img src="https://pelonchas-231194.000webhostapp.com/Nubes.png" alt="">
		</div>

	</div>


  

  </div>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    return {
        
    }
  },
  methods: {
    regresar(){
      this.$router.push({path:'/'})
    },
    mandarLog(){
      this.$router.push({path:'/login'})
    },
    registrar(){
      this.$router.push({path:'/registro'})
    },
    logout(){
      localStorage.clear();
      this.$router.push({path:'/'})
    }

  },
  props:{
      logIn: Boolean,
      regresarnl: Boolean,
      logOut: Boolean,
      nombreUsuario: String
      },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* Bolas de nubes */
.inicio .nubes{ position: relative; height: 19vh; }
.inicio .nubes img{ width: 100%; }

/* SECCION1 - Formulario */
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h1 { text-align: center; }
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242; margin-bottom: 0; margin-top: 0; }
.inicio .seccion1 .formulario .contenedor .renglon1 .columna1 button{ display: block; margin-left: auto; margin-right: auto; margin-top: 20px; }
.inicio .seccion2 { margin-top: 200px; }
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h2 { text-align: center; }
.inicio .seccion2 .formulario .contenedor .renglon1 .columna1 h4 { text-align: center; color: #424242;}

/* Barra fixed */
.barra nav { position: fixed; z-index: 1; width: 100%; background: rgba(255, 255, 255, 0.6); }
.barra nav .contenido .row .col1 img { padding: 8px; }
.barra nav .contenido .row .derecha { justify-content: flex-end; display: flex; }
.barra nav .contenido .row .derecha .col2 { justify-content: center; align-items: center; display: flex; }
.barra nav .contenido .row .derecha .col3 { justify-content: center; align-items: center; display: flex; }
.nito{font-weight: bold;}

</style>
