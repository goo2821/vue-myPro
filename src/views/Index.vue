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
      {{ this.now }}
    </h3>
    <h3 style="text-align: center">
      {{ this.endTime }}
    </h3>
    <h3 style="text-align: center">
      {{ this.remainingTime }}
    </h3>
    <a href="details/1-1.pdf" target="_blank" style="color:white;">
      <b-button style="margin:5px">
        1-1
      </b-button>
    </a>
    
    <a href="details/1-2.pdf" target="_blank" style="color:white;">
      <b-button style="margin:5px">
        1-2
      </b-button>
    </a>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      endTime: '',
      now: '',
      remainingTime: '',
    }
  },
  created() {
    setInterval(() => {
      this.endTime = this.$moment('2021-02-05 00:00:00', 'YYYY-MM-DD HH:mm:ss');
      this.now = this.$moment();
      this.timediff = this.$moment.duration(this.endTime.diff(this.now));
      this.timediff = {
        days: this.timediff.days() > 0 ? `${this.timediff.days()}일 `: '',
        hours: this.timediff.hours() > 0 ? `${this.timediff.hours()}시간 `: '',
        minutes: this.timediff.minutes() > 0 ? `${this.timediff.minutes()}분 `: '',
        seconds: this.timediff.seconds() > 0 ? `${this.timediff.seconds() + 1}초`: ''
      }

      this.endTime = this.endTime.format('YYYY-MM-DD HH:mm:ss');
      this.now = this.now.format('YYYY-MM-DD HH:mm:ss');
      this.remainingTime = this.timediff.days;
      this.remainingTime += this.timediff.hours;
      this.remainingTime += this.timediff.minutes;
      this.remainingTime += this.timediff.seconds;
    }, 1000)
  },
}
</script>
<style>
</style>