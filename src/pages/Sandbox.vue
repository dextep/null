<template>
  <div class="sandbox-container">
    <!-- <template v-for="(item, index) in routes"  :key="index">
      <router-link :to="item.path">{{ item.path }}</router-link>
    </template> -->
  </div>
  <router-view></router-view>
</template>

<script>

// import routes from '@/sandbox'

export default {
  name: 'Sandbox',
  components: {
  },
  // data: () => { 
  //   return {
  //     routes: routes,
  //     }
  // }
}
</script>
<style scoped>
.sandbox-container {
  display: flex;
  flex-direction: column;
    margin: 20px;
}
a {
    text-decoration: none;
    color: #afafaf;
    font-size: 2.4rem;
    line-height: 1;
    margin: -0.1em 0 0;
    font-variation-settings: "wght" 300;
    transition: font-variation-settings 0.2s;
}
a:hover {
    font-variation-settings: "wght" 600;
}
a + a {
    margin-top: 20px;
}
</style>
