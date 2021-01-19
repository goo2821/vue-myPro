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
    <div style="display: flex; align-items: center; justify-content: center">
      <b-pagination-nav :pages="pages1" use-router style=""></b-pagination-nav>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ListProduct from '../components/ListProduct.vue';

export default {
  components: { carousel, ListProduct },
  data() {
    return {
      value: 50,
      max: 100,
      pages1: ["?page=1", "?page=2", "?page=3"],
      fields: [
        '모집금액',
        '목표수익률',
        '투자기간'
      ],
      items: [
        {
          '모집금액': "3000만원",
          '목표 수익률': "12.00%",
          "투자기간": "9개월",
        },
      ],
    };
  },
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