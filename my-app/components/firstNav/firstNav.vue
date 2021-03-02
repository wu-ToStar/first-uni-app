<template>
	<view class="firstNav">
		<view class="iconfont iconxingtaiduICON_sousuo--">
			<!-- <span class="iconfont">&#xe600;</span> -->
		</view>
		<view class="middle">
			<navigator class="text" open-type="switchTab" url="../../pages/index/index"> 
				推荐
			</navigator>
			<navigator class="text" open-type="navigate" url="../../pages/city/city">
				同城
			</navigator>
		</view>
		<view class="iconfont iconlive">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	/* @import url("../../static/css/icon/iconfont"); */
	.firstNav {
		width: 100%;
		position: fixed;
		top: 30px;
		left: 0;
		height: 35px;
		line-height: 35px;
		margin: 0 auto;
		color: white;
		display: flex;
		/* background-color: #000000; */
		justify-content: space-around;
		z-index: 21;
	}

	.iconfont {
		color: white;
		z-index: 99;
		width: 20px;
		height: 20px;
	}

	.middle {
		text-align: center;
	}

	.text {
		display: inline;
		margin: 0 19px;
	}
</style>
