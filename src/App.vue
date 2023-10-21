<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import HeaderComponet from './components/commons/HeaderComponent.vue';
/*import FooterComponet from './components/commons/FooterComponet.vue'; */
</script>

<template>
 
 <HeaderComponet/>
  <main>
    
    <h1 className="Roboto text-3xl font-bold bg-neutral">
      Primer pagina con VUE.JS
    </h1>
    <aside>
      
    <h1 className="Roboto text-3xl font-bold bg-neutral">
      Primer pagina con VUE.JS
    </h1>
    </aside>

  </main>
  <footer>
    <h1 className="Roboto text-3xl font-bold bg-neutral">
      Primer pagina con VUE.JS
    </h1>
  </footer>
</template>

<style scoped>

</style>
