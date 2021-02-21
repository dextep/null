<template>
  <navbar :navRoutes="routes" />
  <router-view></router-view>
  <footer-component/>
</template>

<script>
import FooterComponent from '@/components/Footer/Footer.vue';
import routes from "./router";
import Navbar from "./components/Navbar/src/Navbar.vue";
export default {
  name: "App",
  data: () => {
    return {
      routes: routes.routes,
    };
  },

  components: { Navbar, FooterComponent },
};
</script>
