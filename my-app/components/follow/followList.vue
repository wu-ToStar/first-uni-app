<template>
	<view class="folowList">
		<scroll-view scroll-y="true" @scroll="scroll" style="height: 100%;">
			<view class="item" v-for="(item,index) in list" :key="item.id">
				<view class="top">
					<view class="img-box">
						<image class="img" src="../../static/img/1-1.jpeg" mode=""></image>
					</view>
					<view class="autor-name">
						@{{item.author}}
					</view>
					<view class="iconfont icongengduo">

					</view>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="video-box">
					<!-- 包含整个容器 -->

					<folllow-play :list="list" ref="player" :item="item" :index="index"></folllow-play>

					<view class="music-box">
						<view class="music">
							快乐的一支小青蛙！！！
						</view>
					</view>
				</view>
				<view class="box">
					<view class="left">
						3.20
					</view>
					<view class="right">
						<view class="iconfont iconxinaixin1">
							<text>分享</text>
						</view>
						<view class="iconfont icontubiao_jiemian_douyinpinglun">
							<text>评论</text>
						</view>
						<view class="iconfont iconweixinfenxiangye ">
							<text>赞</text>
						</view>
					</view>
				</view>
				<view class="comment">
					<view class="Number">
						4.2w评论过
					</view>
					<view class="comment-box ">
						<view class="iconfont iconplus">

						</view>
						<input class="input-box" type="text" placeholder="添加评论..." />
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import folllowPlay from "./followPlay.vue"
	export default {
		props: ['list'],
		components: {
			folllowPlay
		},
		data() {
			return {

			}
		},
		methods: {
			scroll(res) {
				const index = Math.floor((res.detail.scrollTop +150) / 550)
				// console.log(index);
				if (index >= 0 && index <= this.list.length) {
					this.$refs.player[index].player()
				}
				if ((index - 1) >= 0 && (index - 1) <= this.list.length) {
					this.$refs.player[index - 1].pause()
				}
				if ((index + 1) >= 0 && (index + 1) <= this.list.length) {
					this.$refs.player[index + 1].pause()
				}


			}
		}
	}
</script>

<style>
	.folowList {
		width: 100%;
		height: 100%;
		background-color: #000000;
		padding-bottom: 50px;
		margin-top: 15px;
	}

	.item {
		padding: 0 15px;
		height: 550px;
	}

	.top {
		height: 40px;
	}

	.img-box {
		float: left;
	}

	.img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}

	.autor-name {
		float: left;
		font-size: 16px;
		height: 35px;
		line-height: 35px;
		margin-left: 10px;
		color: #fff;
	}

	.icongengduo {
		float: right;
		font-size: 15px;
		height: 35px;
		line-height: 35px;
		color: #fff;
	}

	.title {
		width: 100%;
		font-size: 12px;
		height: 25px;
		line-height: 25px;
		margin-bottom: 5px;
		color: #fff;
	}

	.video-box {
		width: 100%;
		height: 280px;
		position: relative;
	}

	.video {
		width: 68%;
		height: 100%;
		z-index: 19;

	}

	.music-box {
		z-index: 20;
		position: absolute;
		bottom: 0;
		left: 20px;
		width: 100px;
		overflow: hidden;
	}

	.music {
		color: #fff;
		font-size: 12px;
		width: 150px;
		animation: music 4s linear infinite 0.2s;
	}

	@keyframes music {
		0% {
			transform: translate3d(80%, 0, 0);
		}

		100% {
			transform: translate3d(-80%, 0, 0);
		}
	}

	.box {
		height: 25px;
		margin-top: 20px;
		color: #fff;
	}

	.left {
		float: left;
		font-size: 12px;
		height: 25px;
		line-height: 25px;
	}

	.right {
		float: right;
	}

	.iconfont {
		float: right;
		font-size: 18px;
	}

	.iconfont text {
		font-size: 10px;
		margin: -5px 8px;
	}

	.comment {
		width: 100%;
		margin-bottom: 30px;
		/* clear: both; */
	}

	.Number {
		width: 100%;
		height: 25px;
		font-size: 15px;
		line-height: 15px;
		color: #aaa;
	}

	.comment-box {
		position: relative;

	}

	.iconplus {
		height: 30px;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
	}

	.input-box {
		margin: 0 20px;
	}
</style>
