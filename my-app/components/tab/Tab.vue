<template>
	<view class="tab">
		<navigator class="tab-box" open-type="switchTab" url="../../pages/index/index">
			首页
		</navigator> 
		<navigator class="tab-box" open-type="switchTab" url="../../pages/follow/follow">
			关注
		</navigator>
		<view class="tab-box">
			<view class="iconfont iconplus  icon-box">

			</view>
		</view> 

		<navigator class="tab-box" open-type="switchTab" url="../../pages/news/news">
			消息
		</navigator>
		<navigator class="tab-box" open-type="switchTab" url="../../pages/personal/personal">
			我
		</navigator>
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
	.tab {
		height: 50px;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 99;
	}

	.tab-box {
		flex: 1;
		text-align: center;
		line-height: 50px;
		color: #fff;
		background-color: #000;
	}
	.icon-box{
		width: 70%;
		height: 30px;
		background-color: #fff;
		color: #000;
		margin: 10px 20%;
		line-height: 30px;
		border-radius: 5px;
		font-size: 15px;
	}
</style>
