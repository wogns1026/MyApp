<template>
  <div>
    <menu-bar />
    <router-view />
    <my-app-footer />
  </div>
</template>

<script>
import MenuBar from "@/views/MenuBar";
import MyAppFooter from "@/views/MyAppFooter";

export default {
  name: 'App',

  components: {
    MenuBar,
    MyAppFooter
  },

  data() {
    return {

    }
  }
}
</script>