
<template>
    <div class="slider-box-2">
        <img
            v-if="data.img"
            :src="data.img.url"
            :alt="data.img.name"
            loading="lazy"
        />=
        <div class="slider-box-2__info-box">
            <div class="slider-box-2__title">
                {{data.title}}
            </div>
            <div class="slider-box-2__desc">
                {{data.description}}
            </div>
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
