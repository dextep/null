<template>
  <matrix-scroll>
    <div class="products-wrapper">
      <div class="products-col">
        <template v-for="(product, index) in products" :key="index">
          <template v-if="index % 4 == 0">
            <product-card :product="product" />
          </template>
        </template>
      </div>
      <div class="products-col">
        <template v-for="(product, index) in products" :key="index">
          <template v-if="index % 4 == 1">
            <product-card :product="product" />
          </template>
        </template>
      </div>
      <div class="products-col">
        <template v-for="(product, index) in products" :key="index">
          <template v-if="index % 4 == 2">
            <product-card :product="product" />
          </template>
        </template>
      </div>
      <div class="products-col">
        <template v-for="(product, index) in products" :key="index">
          <template v-if="index % 4 == 3">
            <product-card :product="product" />
          </template>
        </template>
      </div>
    </div>
  </matrix-scroll>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import MatrixScroll from "@/components/MatrixScroll.vue";
import ProductCard from "@/components/ProductCard/src/ProductCard.vue";

export default {
  components: {
    ProductCard,
    MatrixScroll,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    async useEffect() {
      const productsRef = firebase.firestore().collection("products");
      const snapshot = await productsRef.get();

      if (snapshot.empty) {
        console.log("No matching products.");
        return;
      }

      let list = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        list.push(doc.data());
      });
      this.products = list;
    },
  },
  mounted() {
    this.useEffect();
  },
};
</script>

<style lang="scss" scoped></style>
