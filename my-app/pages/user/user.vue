<template>
	<view class="personal">
		<view class="iconfont iconfanhui" @click="click">

		</view>
		<personal-info :pages="pages" @change="change"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list></personal-list>
		</view>
		<view class="" v-show="show==='动态'">
			<follow-list :list="list"></follow-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list></personal-list>
		</view>
	</view>
</template>

<script>
	import personalInfo from "../../components/personal/personalInfo.vue"
	import personalList from "../../components/personal/personalList.vue"
	import followList from "../../components/follow/followList.vue"
	export default {
		components: {
			personalInfo,
			personalList,
			followList
		},
		data() {
			return {
				list: [],
				show: "作品",
				pages:"user"
			}
		},
		methods: {
			getVideos() {
				// 模拟发生网络请求，取出视频信息
				uni.request({
					url: "http://localhost/json/videos.json",
					success: (res) => {
						this.list = res.data.list;
					}
				})
			},
			change(res) {
				this.show = res
			},
			click(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		created() {
			this.getVideos()
		}
	}
</script>

<style>
	.personal {
		width: 100%;
		height: 100%;
		background-color: #000000;
		position: relative;
	}

	.iconfanhui{
		z-index: 21;
		color: #fff;
		font-size: 17px;
		position: absolute;
		top: 30px;
		left: 10px;
	}
</style>
