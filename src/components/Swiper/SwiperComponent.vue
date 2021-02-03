<template>
  <swiper
    :slides-per-view="1"
    :pagination="{ 
      clickable: true,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{
        delay: 1000,
    }"
    effect="fade"
  >
    <swiper-slide>
      <div class="slider-wrapper" style="background: red;"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slider-wrapper" style="background: green;"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slider-wrapper" style="background: white;"></div>
    </swiper-slide>
    
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';

  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
      }
    },
    props: {
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>