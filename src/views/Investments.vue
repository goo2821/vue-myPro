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
        <router-link
          to="/"
          style="max-width: 25rem; float: left; width: 33%; margin: 15px;"
        >
          <b-card
            img-src="https://picsum.photos/60/30/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <h6>
              <b-badge variant="primary" class="badg">Primary</b-badge>
              <b-badge variant="primary" class="badg">Primary</b-badge>
            </h6>
            <b-card-text
              style="
                margin: 0;
                color: black;
                font-size: auto;
                max-font-size: 20pt;
              "
            >
              #685 오피스텔
            </b-card-text>
            <b-card-text style="color: gray; padding: 0">
              경기도 성남시 수정구
            </b-card-text>
            <div>
              <b-table hover :items="items"></b-table>
            </div>
            <b-progress :max="max" class="goal">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
            <b-button href="#" variant="primary" class="BtnForm">투자 신청(상세보기)</b-button>
          </b-card>
        </router-link>


                <router-link
          to="/"
          style="max-width: 25rem; float: left; width: 33%; margin: 15px;"
        >
          <b-card
            img-src="https://picsum.photos/60/30/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <h6>
              <b-badge variant="primary" class="badg">Primary</b-badge>
              <b-badge variant="primary" class="badg">Primary</b-badge>
            </h6>
            <b-card-text
              style="
                margin: 0;
                color: black;
                font-size: auto;
                max-font-size: 20pt;
              "
            >
              #685 오피스텔
            </b-card-text>
            <b-card-text style="color: gray; padding: 0">
              경기도 성남시 수정구
            </b-card-text>
            <div>
              <b-table hover :items="items"></b-table>
            </div>
            <b-progress :max="max" class="goal">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
            <b-button href="#" variant="primary" class="BtnForm">투자 신청(상세보기)</b-button>
          </b-card>
        </router-link>

        <router-link
          to="/"
          style="max-width: 25rem; float: left; width: 33%; margin: 15px;"
        >
          <b-card
            img-src="https://picsum.photos/60/30/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <h6>
              <b-badge variant="primary" class="badg">Primary</b-badge>
              <b-badge variant="primary" class="badg">Primary</b-badge>
            </h6>
            <b-card-text
              style="
                margin: 0;
                color: black;
                font-size: auto;
                max-font-size: 20pt;
              "
            >
              #685 오피스텔
            </b-card-text>
            <b-card-text style="color: gray; padding: 0">
              경기도 성남시 수정구
            </b-card-text>
            <div>
              <b-table hover :items="items"></b-table>
            </div>
            <b-progress :max="max" class="goal">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
            <b-button href="#" variant="primary" class="BtnForm">투자 신청(상세보기)</b-button>
          </b-card>
        </router-link>

        <router-link
          to="/"
          style="max-width: 25rem; float: left; width: 33%; margin: 15px;"
        >
          <b-card
            img-src="https://picsum.photos/60/30/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <h6>
              <b-badge variant="primary" class="badg">Primary</b-badge>
              <b-badge variant="primary" class="badg">Primary</b-badge>
            </h6>
            <b-card-text
              style="
                margin: 0;
                color: black;
                font-size: auto;
                max-font-size: 20pt;
              "
            >
              #685 오피스텔
            </b-card-text>
            <b-card-text style="color: gray; padding: 0">
              경기도 성남시 수정구
            </b-card-text>
            <div>
              <b-table hover :items="items"></b-table>
            </div>
            <b-progress :max="max" class="goal">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
            <b-button href="#" variant="primary" class="BtnForm">투자 신청(상세보기)</b-button>
          </b-card>
        </router-link>

        <router-link
          to="/"
          style="max-width: 25rem; float: left; width: 33%; margin: 15px;"
        >
          <b-card
            img-src="https://picsum.photos/60/30/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2"
          >
            <h6>
              <b-badge variant="primary" class="badg">Primary</b-badge>
              <b-badge variant="primary" class="badg">Primary</b-badge>
            </h6>
            <b-card-text
              style="
                margin: 0;
                color: black;
                font-size: auto;
                max-font-size: 20pt;
              "
            >
              #685 오피스텔
            </b-card-text>
            <b-card-text style="color: gray; padding: 0">
              경기도 성남시 수정구
            </b-card-text>
            <div>
              <b-table hover :items="items"></b-table>
            </div>
            <b-progress :max="max" class="goal">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
            <b-button href="#" variant="primary" class="BtnForm">투자 신청(상세보기)</b-button>
          </b-card>
        </router-link>


    </table>
    <div style="display:flex;align-items: center;justify-content: center;">
    <b-pagination-nav :pages="pages1" use-router style=""></b-pagination-nav>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  data() {
    return {
      value: 50,
      max: 100,
      pages1: ['?page=1', '?page=2', '?page=3'],
      items: [
        {"5000만 원": "모집 금액", "14.00%": "목표 수익률", "9개월": "투자기간"}
      ]
    }
  }
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
  display: table
}

.goal {
  margin-bottom: 15px;
}

.BtnForm {
  width: 100%;
  font-size: auto;
}

</style>