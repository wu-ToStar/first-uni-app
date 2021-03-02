<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar({
				
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("static/css/icon/iconfont");
	html,body{
		width: 100%;
		height: 100%;
	}
	
</style>
