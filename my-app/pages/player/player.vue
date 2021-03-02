<template>
	<view class="Player">
		<video-list :list="list"></video-list>
	</view>
</template>

<script>
	import videoList from "../../components/video/videoList.vue"
	export default {
		components:{
			videoList
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onLoad(res){
			uni.getStorage({
				key:'videoList',
				success:(res)=>{
					console.log(res);
					this.list=res.data
				}
			})
		}
	}
</script>

<style>
.Player{
	height: 100%;
	width: 100%;
	background-color: #000000;
}
</style>
