<template>
  <div class="wrapper p-0">
      <swiper-component>
          <template v-for="(product, index) in products" :key="index">
            <swiper-slide>
              <slider-box :data="product" ></slider-box>
            </swiper-slide>
          </template>
      </swiper-component>
      <section-1></section-1>
  </div>
</template>

<script>
import "firebase/firestore";
import "firebase/storage";
import { SwiperSlide } from 'swiper/vue';
import firebase from "firebase/app";
import SliderBox from "@/components/SliderBox/SliderBox.vue";
import SwiperComponent from "@/components/Swiper/SwiperComponent.vue";
import Section1 from '../components/Section1/Section1.vue';

export default {
  components: {
    SliderBox,
    SwiperComponent,
    SwiperSlide,
    Section1,
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
