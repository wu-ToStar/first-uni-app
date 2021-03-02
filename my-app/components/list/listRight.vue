<template>
	<view class="listright">
		<view class="author-img">
			<image class="img" src="../../static/img/1-1.jpeg" mode="" @click="click"></image>
			<view class="iconfont iconplus add " @click="hide" v-show="show">

			</view>
		</view>
		<view class="right-box iconfont iconxinaixin1" :style="color" @click="changecolor">

		</view>
		<view class="number">
			{{item.loveNumber}}
		</view>
		<view class="right-box iconfont icontubiao_jiemian_douyinpinglun" @click="openComment">

		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="right-box iconfont iconweixinfenxiangye">

		</view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image class="img" src="../../static/img/2-1.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['item'],
		data() {
			return {
				show: true,
				color: ""
			}
		},
		methods: {
			hide() {
				this.show = false
			},
			//改变爱心颜色
			changecolor() {
				this.color = this.color === '' ? "color:red;" : ""
			},
			//双击改变颜色
			change() {
				this.color = "color:red;"
			},
			click(){
				uni.navigateTo({
					url:"../../pages/user/user"
				})
			},
			openComment(){
				this.$emit('open')
			}
		}
	}
</script>

<style>
	.listright {
		width: 50px;
		margin: 0 auto;
	}

	.author-img {
		border: 2px solid #fff;
		height: 50px;
		width: 50px;
		border-radius: 50px;
		position: relative;
	}

	.img {
		height: 50px;
		width: 50px;
		border-radius: 50px;

	}

	.right-box {
		width: 50px;
		height: 40px;
		margin-top: 13px;
		text-align: center;
		font-size: 28px;
		color: #fff;
		line-height: 40px;
	}
	.iconxinaixin1{
		font-size: 24px;
		margin-left: 4px;
	}
	.iconweixinfenxiangye{
		color: #4CD964;
	}
	.number {
		font-size: 10px;
		text-align: center;
		color: #fff;
	}

	.around {
		height: 50px;
		width: 50px;
		margin-top: 12px;
		animation: rotate 1.5s infinite linear 0.2s;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.add {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		bottom: -9px;
		left: 20px;
		text-align: center;
		line-height: 12px;
		color: #fff;
		font-size: 10px;
	}
</style>
