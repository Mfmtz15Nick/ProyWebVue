<template>
  <div class="dash">
      <BarraAdmin />
      <div class="section menuizquierdo">
        <h5>Menú</h5>
        <ul>
            <li  @click="putActive" v-on:click="isActive1 = true"  v-bind:class="{ active: isActive1 }"><a v-bind:class="{ active: isActive1 }" > Usuarios </a></li>
            <li  @click="putActive" v-on:click="isActive2 = true"  v-bind:class="{ active: isActive2 }"><a v-bind:class="{ active: isActive2 }" > Camiones </a></li>
            <li  @click="putActive" v-on:click="isActive3 = true"  v-bind:class="{ active: isActive3 }"><a v-bind:class="{ active: isActive3 }" > Sedes </a></li>
            <li  @click="putActive" v-on:click="isActive4 = true"  v-bind:class="{ active: isActive4 }"><a v-bind:class="{ active: isActive4 }" > Reservaciones</a></li>
        </ul>
    </div>
    <div class="contenido ">
         <Usuarios v-if="isActive1"> </Usuarios>
         <Camiones v-if="isActive2"> </Camiones>
         <Sedes v-if="isActive3"> </Sedes>
         <Reservaciones v-if="isActive4"> </Reservaciones>
        
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import BarraAdmin from '@/components/BarraAdmin.vue'
import Sedes from '@/components/Sedes.vue'
import Usuarios from '@/components/Usuarios.vue'
import Camiones from '@/components/Camiones.vue'
import Reservaciones from '@/components/Reservaciones.vue'


export default {
  name: "home",
  components: {
    BarraAdmin,
    Sedes,
    Usuarios,
    Camiones,
    Reservaciones,
  },
  data: function () {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  },
  methods: {
      putActive(){
          this.isActive1 = false;
          this.isActive2 = false;
          this.isActive3 = false;
          this.isActive4 = false;
         
      }
  },
};
</script>
<style  scoped>

.section { width: 260px; background-color: #FFF; height: calc(100vh - 78px); position: relative; }
.section h5 { padding: 22px; padding-bottom: 3px; }
.section ul { padding: 0; margin: 0; }
.section ul li { height: 45px; cursor: pointer; list-style: none; padding: 0; margin: 0; padding-left: 25px; display: flex; align-items: center; border-top-right-radius: 7px;border-bottom-right-radius: 7px;}
.section ul li.active { background: #10316B; color: white;  }
.section ul li a.active { color: white; }
.section ul li a.active:hover { color: white; }
.section ul li a { text-decoration: none; color: black;  }
.section ul li a:hover { text-decoration: none; color: black; }
 
.dash{background: white; position: relative;}
.contenido{ position: absolute; left: 270px; height: calc(90vh - 78px); top:120px; width: 75%;  }


</style>
