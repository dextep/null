<template>
  <navbar :navRoutes="routes" />
  <router-view></router-view>
</template>

<script>
import routes from "./router";
import Navbar from "./components/Navbar/src/Navbar.vue";
export default {
  name: "App",
  data: () => {
    return {
      routes: routes.routes,
    };
  },

  components: { Navbar },
};
</script>
