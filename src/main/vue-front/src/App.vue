<template>
  <div>
    <menu-bar />
    <router-view />
    <nru-footer />
  </div>
</template>

<script>
import MenuBar from "@/views/MenuBar";
import NruFooter from "@/views/NruFooter";

export default {
  name: 'App',

  components: {
    MenuBar,
    NruFooter
  },

  data() {
    return {

    }
  }
}
</script>