<template>
  <navbar :navRoutes="routes" />
  <div class="wrapper">
    <router-view></router-view>
  </div>
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
