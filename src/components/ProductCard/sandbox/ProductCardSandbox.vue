<template>
  <div>
    <matrix-scroll>
      <div class="products-wrapper">
        <div class="products-col">
          <template v-for="n in 10" :key="n">
            <product-card />
          </template>
        </div>
        <div class="products-col">
          <template v-for="n in 10" :key="n">
            <product-card />
          </template>
        </div>
        <div class="products-col">
          <template v-for="n in 10" :key="n">
            <product-card />
          </template>
        </div>
        <div class="products-col">
          <template v-for="n in 10" :key="n">
            <product-card />
          </template>
        </div>
      </div>
    </matrix-scroll>
  </div>
</template>

<script>
import MatrixScroll from '@/components/MatrixScroll.vue'
import ProductCard from "../src/ProductCard.vue";
export default {
  components: { ProductCard, MatrixScroll },
};
</script>

<style lang="scss" scoped></style>
