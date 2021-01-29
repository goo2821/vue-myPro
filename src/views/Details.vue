<template>
  <div class="detail">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col>
          <b-img
            src="https://picsum.photos/1000/700/?image=41"
            fluid
            alt="Responsive image"
            style="min-width: 300px"
          ></b-img>
        </b-col>
        <b-col>
          <div>
            <h5>
              <b-badge variant="primary" style="margin: 10px"
                >opportunistic</b-badge
              ><b-badge variant="primary">개발형</b-badge>
            </h5>
            <h5>#{{ this.product.id }} {{ this.product.productName }}</h5>
            <h6 style="color: gray">{{ this.product.productAddress }}</h6>
          </div>

          <b-table :fields="fields()" :items="items()" style="text-align: center"> </b-table>

          <b-progress :max="this.product.totalMoney" class="goal">
            <b-progress-bar
              :value="this.product.nowMoney"
              :label="`${(
                (this.product.nowMoney / this.product.totalMoney) *
                100
              ).toFixed(2)}%`"
            ></b-progress-bar>
          </b-progress>
          <div>
            <b-button block style="height: 40px" variant="primary"
              ><h5>투자 신청</h5></b-button
            >
          </div>
          <div>
            <b-button block style="margin-top: 20px" variant="warning"
              >카카오 톡 알림 받기</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
    <sub-detail></sub-detail>
  </div>
</template>

<script>
import subDetail from '../components/SubDetail.vue'

export default {
  components: {
    subDetail,
  },
  data() {
    return {
      product: [],
    };
  },
  created() {
    this.$store.dispatch("GET_PRODUCT_ONE", this.$route.params.productId);
  },
  computed: {
    DetailProduct() {
      return this.$store.state.product;
    },
  },
  methods: {
    fields() {
      this.product = this.$store.state.product;

      return [
        this.product.totalMoney + "만원",
        this.product.yield + "%",
        this.product.month + "개월",
      ];
    },
    items() {
      var f = this.fields();
      return [
        { [f[0]]: "모집 금액", [f[1]]: "예상 수익률", [f[2]]: "투자 기간" },
      ];
    },
  },
};
</script>

<style scoped>
.detail {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>