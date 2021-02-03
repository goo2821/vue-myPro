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
                background-color: rgb(255, 255, 255);
              "
            >
              <h4 style="padding: 0; margin: 0">투자 개요</h4>
              <h6 style="color: gray; padding: 0; margin: 0">
                INVESTMENT OVERVIEW
              </h6>
            </div>
            <b-table
              striped
              style="max-width: 770px; margin: auto; margin-bottom: 10px"
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
            <!----------------- 개요 내용 --------------------->
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
                background-color: rgb(255, 255, 255);
              "
            >
              <h4 style="padding: 0; margin: 0">프로젝트 개요</h4>
              <h6 style="color: gray; padding: 0; margin: 0">
                PROJECT OVERVIEW
              </h6>
            </div>
            <b-table
              striped
              style="
                max-width: 770px;
                margin: auto;
                margin-bottom: 10px;
                font-family: '맑은 고딕', 'Noto Sans Korean';
              "
              align="center"
              :items="items()"
            ></b-table>
          </div>

          <!------------------ 현장 실사 ------------------>
        </b-tab>
        <b-tab title="현장 실사">
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
                background-color: rgb(255, 255, 255);
              "
            >
              <h4 style="padding: 0; margin: 0">현장 실사</h4>
              <h6 style="color: gray; padding: 0; margin: 0">DUE DILIGENCE</h6>
            </div>
            <!------------------- 화살표 --------------------->
            <div
              style="
                width: 0;
                height: 0;
                margin-bottom: -10px;
                margin-left: 10px;
                margin-top: 10px;
              "
            >
              <div
                style="
                  border-bottom: 15px solid rgb(0, 206, 209);
                  border-left: 15px solid transparent;
                  transform: rotate(225deg);
                "
              ></div>
            </div>

            <!-------------------- 현장 실사 내용 --------------------->
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
                background-color: rgb(255, 255, 255);
              "
            >
              <b-jumbotron style="background-color: rgb(250, 250, 250); padding-bottom:0">
                <h6 style="display: table;margin-left: -60px;">
                  <b-badge
                    pill
                    disabled
                    style="
                      background-color: rgb(0, 206, 209);
                      z-index: 3;
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      display: table-cell;
                      position: relative;
                      font-size: 1.5vmin;
                      width: 10vmin;
                      max-width: 200px;
                      height: 1vmin;
                    "
                  >
                    2020년 12월 18일
                  </b-badge>
                  <b-badge
                    style="
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      margin-left: -20px;
                      background-color: rgb(255, 255, 255);
                      color: rgb(0, 206, 209);
                      width: 90vmin;
                      max-width: 650px;
                      font-size: 1.5vmin;
                      z-index: 1;
                      position: relative;
                    "
                  >
                    10층 슬래브 철근 배근 및 콘트리트 타설
                  </b-badge>
                </h6>
                <b-container fluid>
                  <b-row>
                    <b-col>
                      <b-img thumbnail fluid src="https://picsum.photos/500/500/?image=54" alt="Image 1"></b-img>
                    </b-col>
                    <b-col>
                      <b-img thumbnail fluid src="https://picsum.photos/500/500/?image=58" alt="Image 2"></b-img>
                    </b-col>
                  </b-row>
                </b-container>
              </b-jumbotron>
              <b-jumbotron style="background-color: rgb(250, 250, 250);padding-bottom:0; padding-top: 0;">
                <h3 style="display: table;margin-left: -60px;">
                  <b-badge
                    pill
                    disabled
                    style="
                      background-color: rgb(0, 206, 209);
                      z-index: 3;
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      display: table-cell;
                      position: relative;
                    "
                  >
                    2020년 06월 26일
                  </b-badge>
                  <b-badge
                    style="
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      margin-left: -20px;
                      background-color: rgb(255, 255, 255);
                      color: rgb(0, 206, 209);
                      width: 600px;
                      z-index: 1;
                      position: relative;
                    "
                  >
                    기존 건축물 철거작업 진행중
                  </b-badge>
                </h3>
                <b-container fluid>
                  <b-row>
                    <b-col>
                      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
                    </b-col>
                    <b-col>
                      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
                    </b-col>
                    <b-col>
                      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
                    </b-col>
                  </b-row>
                </b-container>
              </b-jumbotron>
              <b-jumbotron style="background-color: rgb(250, 250, 250); padding-bottom:0; padding-top: 0;">
                <h3 style="display: table;margin-left: -60px;">
                  <b-badge
                    pill
                    disabled
                    style="
                      background-color: rgb(0, 206, 209);
                      z-index: 3;
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      display: table-cell;
                      position: relative;
                    "
                  >
                    2022년 04월 05일
                  </b-badge>
                  <b-badge
                    style="
                      border: solid;
                      border-color: rgb(0, 206, 209);
                      margin-left: -20px;
                      background-color: rgb(255, 255, 255);
                      color: rgb(0, 206, 209);
                      width: 600px;
                      z-index: 1;
                      position: relative;
                    "
                  >
                    건축 허가
                  </b-badge>
                </h3>
              </b-jumbotron>
            </div>
          </div>
        </b-tab>

        <!----------------------------관련 서류------------------------------->
        <b-tab title="관련 서류" style="text-align: center">
          <div>{{ currentPage }} / {{ pageCount }}</div>
          <b-button @click="change"></b-button>
          <div>
            <pdf
              :src="`${this.$route.params.productId}-${this.docs}.pdf`"
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
      docs: 1,
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
    
    change() {
      if(this.docs === 1){
        this.docs = 2;
      }else{
        this.docs = 1;
      }
    }
  },
};
</script>

<style>
</style>