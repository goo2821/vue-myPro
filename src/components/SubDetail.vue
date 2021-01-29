<template>
  <div>
    <div>
      <b-tabs content-class="mt-3" align="center" style="margin-top: 50px">
        <b-tab title="투자 상세">


          <!-- 프로젝트 개요 -->
          <div
            style="
              border: solid;
              max-width: 800px;
              margin: 0 auto;
              border-width: 1px;
            "
          >
            <div
              style="
                padding: 0px 10px 1px;
                margin: 15px;
                border-left-width: 5px;
                border-left-style: solid;
                border-left-color: rgb(0, 206, 209);
                color: rgb(51, 51, 51);
                font-family: '맑은 고딕', 'Noto Sans Korean';
                border-bottom-color: rgb(211, 211, 211);
                border-bottom-width: 1px;
                border-bottom-style: solid;
                letter-spacing: -0.07em;
                line-height: 35px;
                background-color: rgb(250, 250, 250);
              "
            >
              <h4 style="padding: 0; margin: 0">투자 개요</h4>
              <h6 style="color: gray; padding: 0; margin: 0">
                INVESTMENT OVERVIEW
              </h6>
            </div>
            <b-table
              striped
              style="max-width: 770px; margin: auto; margin-bottom: 10px;"
              align="center"
              :items="items()"
            ></b-table>
          </div>


          <!------------------------------------ 프로젝트 개요 ----------------------------------->
          <div
            style="
              border: solid;
              max-width: 800px;
              margin: 0 auto;
              border-width: 1px;
              margin-top: 25px;
            "
          >
            <div
              style="
                padding: 0px 10px 1px;
                margin: 15px;
                border-left-width: 5px;
                border-left-style: solid;
                border-left-color: rgb(0, 206, 209);
                color: rgb(51, 51, 51);
                font-family: '맑은 고딕', 'Noto Sans Korean';
                border-bottom-color: rgb(211, 211, 211);
                border-bottom-width: 1px;
                border-bottom-style: solid;
                letter-spacing: -0.07em;
                line-height: 35px;
                background-color: rgb(250, 250, 250);
              "
            >
              <h4 style="padding: 0; margin: 0">프로젝트 개요</h4>
              <h6 style="color: gray; padding: 0; margin: 0">
                PROJECT OVERVIEW
              </h6>
            </div>
            <b-table
              striped
              style="max-width: 770px; margin: auto;margin-bottom: 10px;"
              align="center"
              :items="items()"
            ></b-table>
          </div>


          <!-- 시장 환경 -->
        </b-tab>
        <b-tab title="현장 실사" style="text-align: center"
          ><p>I'm the second tab</p></b-tab
        >
        <b-tab title="관련 서류" style="text-align: center">
          <div>{{ currentPage }} / {{ pageCount }}</div>
          <div>
            <pdf
              :src="`${this.$route.params.productId}.pdf`"
              @num-pages="pageCount = $event"
              @page-loaded="currentPage = $event"
              style="width: auto; max-width: 800px; margin: 0 auto"
            ></pdf>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      currentPage: 0,
      pageCount: 0,
    };
  },
  created() {
    this.$store.dispatch("GET_DETAIL", this.$route.params.productId);
  },
  methods: {
    items() {
      return [
        {
          "프로젝트 명": "투자형태",
          [this.$store.state.detail.projectName]: this.$store.state.detail.type,
        },
        {
          "프로젝트 명": "원리금 상환",
          [this.$store.state.detail.projectName]: this.$store.state.detail
            .kinfOf,
        },
        {
          "프로젝트 명": "출구 전략",
          [this.$store.state.detail.projectName]: this.$store.state.detail
            .strategy,
        },
        {
          "프로젝트 명": "원리금 보호 장치",
          [this.$store.state.detail.projectName]: this.$store.state.detail
            .safety,
        },
        {
          "프로젝트 명": "투자 기간",
          [this.$store.state.detail.projectName]: this.$store.state.detail
            .period,
        },
      ];
    },
  },
};
</script>

<style>
</style>