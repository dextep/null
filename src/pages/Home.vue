<template>
  <div class="wrapper p-0">
      <swiper-component>
          <template v-for="(product, index) in products" :key="index">
            <swiper-slide>
              <slider-box :data="product" ></slider-box>
            </swiper-slide>
          </template>
      </swiper-component>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import SwiperComponent from "@/components/Swiper/SwiperComponent.vue";
import SliderBox from "@/components/SliderBox/SliderBox.vue";
  import { SwiperSlide } from 'swiper/vue';

export default {
  components: {
    SwiperComponent,
    SwiperSlide,
    SliderBox,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    async useEffect() {
      const productsRef = firebase.firestore().collection("main_slider");
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
