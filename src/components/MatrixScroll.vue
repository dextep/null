<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      productColClass: ".products-col",
      productCols: {},
    };
  },
  methods: {
    matrixScroll() {
        const scrollDistance = window.pageYOffset / 40 * 10;
      for (let i = 0; i < this.productCols.length; i++) {
        if(i % 2 === 0) {
          this.productCols[i].style.transform = "translate3d(0px, "+scrollDistance+"px, 0px)";
        }
      }
    },
  },
  mounted() {
    this.productCols = document.querySelectorAll(this.productColClass);
    document.addEventListener("scroll", this.matrixScroll);
  },
};
</script>

<style lang="scss" scoped></style>
