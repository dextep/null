<template>
  <template v-for="(item, index) in routes" :key="index">
    <router-link :to="item.path">{{ item.title }}</router-link>
  </template>
  <router-view></router-view>
</template>

<script>
import routes from "@/router";
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      routes: routes.routes,
    };
  },
};
</script>
