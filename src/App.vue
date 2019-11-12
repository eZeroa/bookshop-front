<template>
  <div id="app">
    <home></home>
	<Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
		<router-view></router-view>
	</Content>
	
	<Footer style="text-align: center" class="layout-footer-center">2019 &copy; Book Shop</Footer>
  </div>
</template>

<script>

import Home from "@/components/Home";
export default {
  name: 'app',
  components: {
	Home
  },
}
</script>
