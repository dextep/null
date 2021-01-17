<template>
  <nav :class="[{ 'nav--pinned': pinned }, 'nav--desktop']">
    <a href="/"><div class="svg-logo"></div></a>
    <div class="nav__center">
      <template v-for="(item, index) in navRoutes.mainRoutes" :key="index">
        <router-link :to="item.path" class="link link--mid-nav">{{
          item.title
        }}</router-link>
      </template>
    </div>
    <div>
      <template v-for="(item, index) in navRoutes.subRoutes" :key="index">
        <router-link :to="item.path" class="link">{{ item.title }}</router-link>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  props: {
    navRoutes: {},
  },
  data() {
    return {
      navClass: ".nav--desktop",
      pinned: true,
      lastScrollTop: 0,
    };
  },
  methods: {
    srollSpy() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.pinned = false;
      } else {
        this.pinned = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
  mounted() {
    this.productCols = document.querySelector(this.navClass);
    document.addEventListener("scroll", this.srollSpy);
  },
};
</script>

<style lang="scss" scoped></style>
