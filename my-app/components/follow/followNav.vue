<template>
	<view class="">
		<view class="followNav">
			<view class="iconfont iconxiangji">
				随拍
			</view>
			<view class="middle">
				<navigator class="text" open-type="switchTab" url="../../pages/follow/follow" :style="follow">
					关注
				</navigator>
				<navigator class="text" open-type="switchTab" url="../../pages/friend/friend" :style="friend">
					好友
				</navigator>
			</view>
			<view class="iconfont iconlive">

			</view>

		</view>
		<view class="ground">

		</view>
	</view>
</template>

<script>
	export default {
		props: ['page'],
		data() {
			return {
				follow: "",
				friend: ""
			}
		},
		methods: {

		},
		mounted() {
			if (this.page === "friend") {
				this.friend = "border-bottom: 2px solid #F0AD4E;"
			} else {
				this.follow = "border-bottom: 2px solid #F0AD4E;"
			}
		}
	}
</script>

<style>
	.ground {
		width: 100%;
		height: 60px;
	}

	.followNav {
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
		width: 60px;
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
