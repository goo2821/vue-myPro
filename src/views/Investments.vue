<template>
  <div>
    <carousel
      class="example-slide"
      :autoplay="true"
      :nav="false"
      :items="1"
      :loop="true"
      :stagePadding="3"
      :autoHeight="true"
    >
      <img src="https://placeimg.com/200/20/any?1" />
      <img src="https://placeimg.com/200/20/any?2" />
      <img src="https://placeimg.com/200/20/any?3" />
      <img src="https://placeimg.com/200/20/any?4" />
    </carousel>

    <table class="warraper">
      <list-product></list-product>
    </table>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ListProduct from '../components/ListProduct.vue';

export default {
  components: { carousel, ListProduct },
};
</script>

<style>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  justify-content: center;
  padding: 0;
}

.warraper {
  table-layout: fixed;
  height: 100%;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
}

.explaintBtn {
  max-height: 12rem;
  height: 2rem;
  margin: 5px;
  display: table;
}

.goal {
  margin-bottom: 15px;
}

.BtnForm {
  width: 100%;
  font-size: auto;
}
</style>