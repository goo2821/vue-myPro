<template>
  <table class="footer">
    <td class="test">
      <b-card class="ex" style="background-color:dimgray; border: 0">
        <b-card-text
          style="margin: 0; color: black; font-size: auto; max-font-size: 20pt"
        >
          COMPANY
        </b-card-text>
        <b-card-text style="color: white; padding: 0">
          경기도 성남시 수정구 대표 구본성 이메일 test@test.com
        </b-card-text>
        <b-card-text style="color: white; padding: 0">
          경기도 성남시 중원구 대표 구본성 이메일 test@test.com
        </b-card-text>
      </b-card>
    </td>

    <td>
      <b-card class="ex" style="background-color: dimgray; border: 0">
        <b-card-text
          style="margin: 0; color: black; font-size: auto; max-font-size: 20pt"
        >
          NOTICE
        </b-card-text>
        <b-card-text style="color: white; padding: 0">
          대출금리 등등등
        </b-card-text>
        <b-card-text style="color: white; padding: 0"> 고객 센터 </b-card-text>
      </b-card>
    </td>

    <td>
      <b-card class="ex" style="background-color: dimgray; border: 0">
        <b-card-text
          style="margin: 0; color: black; font-size: auto; max-font-size: 20pt"
        >
          회사 이름
        </b-card-text>
        <b-card-text style="color: white; padding: 0">
          서비스 이용약관
        </b-card-text>

        <div class="h2 mb-0">
          <b-icon-instagram></b-icon-instagram>
          <b-icon-arrow-up></b-icon-arrow-up>
        </div>
      </b-card>
    </td>
  </table>
</template>

<script>
export default {};
</script>

<style>
.footer {
  table-layout: fixed;
  width: 100%;
  padding: 0;
  background-color: dimgray;
}

.ex {
  margin: 30px;
  max-width: 100%;
}
</style>