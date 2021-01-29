<template>
  <div>
    <b-list-group>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Morbi leo risus</b-list-group-item>
      <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>
    <h3 style="text-align: center">
      {{ this.time }}
    </h3>
    <h3 style="text-align: center">
      {{ this.oldTime }}
    </h3>
    <h3 style="text-align: center">
      {{ this.restTime }}
    </h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 0,
      pageCount: 0,
      time: '00:00:00',
      oldtime: '',
      restTime:'',
    }
  },
  created() {
    setInterval(() => {
      this.oldTime = this.$moment('2021-02-05 00:00:00', 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
      this.time = this.$moment().format('YYYY-MM-DD HH:mm:ss');
      var diff = this.$moment().diff(this.oldTime, 'seconds');
      diff = diff * -1;
      var day = Math.floor(diff/(24*3600));
      diff = diff%(24*3600);
      var hour = Math.floor(diff/3600);
      diff = diff%(3600);
      var min = Math.floor(diff/60);
      var sec = diff % 60;

      this.restTime = day + "일" + hour + "시간" + min + "분" + sec + "초 전"
    }, 1000)
  },
}
</script>
<style>
</style>