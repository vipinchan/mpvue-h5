<template>
  <div class="template-view">
	<button class=".btn">Get Method</button>
  </div>
</template>

<script>
export default {
  name: 'template',
  components: {
  },
  data () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>


<style lang="less" scoped>
@borderColor: #C7C7C7;
.btn {
	width: 100%;
	height: 100px;
	line-height: 100px;
	border: 1px solid @borderColor;
}
</style>