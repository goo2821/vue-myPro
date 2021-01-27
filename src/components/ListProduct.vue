<template>
  <div>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
      "
    >
      <b-button squared variant="outline-secondary" @click="showAll"
        >전체</b-button
      >
      <b-button squared variant="outline-secondary" @click="showDev"
        >개발형</b-button
      >
      <b-button squared variant="outline-secondary" @click="showReal"
        >실물형</b-button
      >
    </div>
    <b-container class="bv-example-row mb-3">
      <b-row>
        <div v-for="(pro, id) in this.$store.state.product.content" :key="id">
          <b-col>
            <router-link :to="`/details/${pro.id}`" style="margin: 15px; text-decoration: none">
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
                  #{{ pro.id }} {{ pro.productName }}
                </b-card-text>
                <b-card-text style="color: gray; padding: 0">
                  <small>{{ pro.productAddress }}</small>
                </b-card-text>

                <!-- 투자 금액, 예상 수익률, 모집 금액 테이블 -->
                <div>
                  <b-table :fields="fields(pro)" :items="items(pro)"> </b-table>
                </div>
                <b-progress :max="pro.totalMoney" class="goal">
                  <b-progress-bar
                    :value="pro.nowMoney"
                    :label="`${((pro.nowMoney / pro.totalMoney) * 100).toFixed(2)}%`"
                  ></b-progress-bar>
                </b-progress>
                <b-button href="#" variant="primary" class="BtnForm">
                  투자 신청(상세보기)
                </b-button>
              </b-card>
            </router-link>
          </b-col>
        </div>
      </b-row>
    </b-container>
    <div
      class="overflow-auto"
      style="display: flex; align-items: center; justify-content: center"
    >
      <div class="mt-3">
        <b-pagination-nav
          :number-of-pages="this.$store.state.product.totalPages"
          base-url="/investments/"
          align="center"
        ></b-pagination-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "all",
    };
  },
  created() {
    this.$store.dispatch("GET_PRODUCT_ALL", this.$route.params.page - 1);
  },
  computed: {
    listProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    fields(result) {
      var month = result.month + "개월";
      var real = result.yield + ".00%";
      var money = result.totalMoney + "만원";

      return [money, real, month];
    },
    items(result) {
      var f = this.fields(result);
      return [
        { [f[0]]: "모집 금액", [f[1]]: "예상 수익률", [f[2]]: "투자 기간" },
      ];
    },
    showAll() {
      this.test = "all";
    },
    showDev() {
      this.test = "dev";
    },
    showReal() {
      this.test = "real";
    },
  },
};
</script>

<style>
</style>