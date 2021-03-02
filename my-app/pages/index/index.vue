<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :videolist="list"></video-list>
		<tab></tab>

	</view>
</template>

<script>
	import tab from '../../components/tab/Tab.vue'
	import firstNav from "../../components/firstNav/firstNav.vue"
	import videoList from "../../components/video/videoList.vue"

	export default {
		components: {
			tab,
			firstNav,
			videoList
		},
		data() {
			return {
				list: []
			}
		},
		onReady() {
			// this.getVideos()
			uni.request({
				url: "http://localhost/json/videos.json",
				success: (res) => {
					// console.log(res);    
					this.list = res.data.list;  
					// console.log(this.list); 
				}
			})
		},
		methods: {
			// getVideos() {
			// 	// 模拟发生网络请求，取出视频信息
			// 	uni.request({
			// 		url: "http://localhost/json/videos.json",
			// 		success: (res) => {
			// 			// console.log(res);
			// 			this.list = res.data.list;
			// 			// console.log(this.list);
			// 		}
			// 	})
			// }
		},
		computed: {

		}
	}
</script>

<style>
	.content {
		height: 100%;
		width: 100%;
	}
</style>
