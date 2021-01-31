<template>
  <a class="product-card">
    <div class="product-card__assets">
      <div class="product-card__asset-wrapper">
        <img
          :src="product.imgs[0].url"
          :alt="product.imgs[0].name"
          loading="lazy"
        />
      </div>
      
      <div class="product-card__asset-wrapper" v-if="product.imgs.length >= 2">
        <img
          :src="product.imgs[1].url"
          :alt="product.imgs[1].name"
          loading="lazy"
        />
      </div>
    </div>
    <div class="product-card__desc-box">
      <div class="product-card__desc-content">
        <div class="product-card__desc-title">{{product.title}}</div>
        <div class="product-card__desc-price">${{product.price}}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  components: {},
  props: {
    product: {},
  }
};
</script>

<style lang="scss" scoped></style>
