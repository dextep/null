<template>
  <swiper
    :slides-per-view="1"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 5000,
    }"
    :speed="1000"
    effect="fade"
    :loop="true"
  >
    <slot></slot>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);

// Import Swiper styles
export default {
  components: {
    Swiper,
  },
};
</script>
