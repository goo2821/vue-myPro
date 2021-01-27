<template>
  <div>
    <b-list-group>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Morbi leo risus</b-list-group-item>
      <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>
    <div style= "display:flex;align-items: center;justify-content: center;">
    {{currentPage}} / {{pageCount}}
    </div>
    <div style= "display:flex;align-items: center;justify-content: center;">
      <pdf
      src="test.pdf"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      style="max-width:250px;"
      ></pdf>
    </div>
    <input type="button" @click="showStorage" />
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf,
  },
  data() {
    return {
      currentPage: 0,
      pageCount: 0,
    }
  },
  methods: {
    showStorage() {
      console.log(sessionStorage.getItem("jwt-auth-token"));
    }
  }
  
}
</script>
<style>
</style>