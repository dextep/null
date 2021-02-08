
<template>
    <div class="slider-box">
        <div class="slider-box__left-item">
            <div class="slider-box__title">
                {{data.title}}
            </div>
            <div class="slider-box__description">
                {{data.description}}
            </div>
        </div>
        <div class="slider-box__right-item">
            <img
                v-if="data.img"
                :src="data.img.url"
                :alt="data.img.name"
                loading="lazy"
            />
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {},
  }
};
</script>

<style lang="scss" scoped></style>
