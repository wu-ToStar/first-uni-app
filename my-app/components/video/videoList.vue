<template>
	<view class="videoList">
		<view class="swiper-box">
			<!-- 使用swiper组件进行滑动操作 -->
			<swiper class="swiper" :vertical="true" @change="change" @touchstart="touchstart" @touchend="touchend">
				<swiper-item v-for="(item,index) in videos" :key="index">
					<view class="swiper-item">
						<video-player @changeClick="changeClick" ref="player" :video="item" :index="index"></video-player>
					</view>
					<view class="left-box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right-box">
						<list-right ref="right" :item="item" @open="openComment"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="comment-box" v-show="show">
			<comment @close="close"></comment>
		</view>
	</view>
</template>

<script>
	import listLeft from "../list/listLeft.vue"
	import listRight from "../list/listRight.vue"
	import videoPlayer from "./videoPlayer.vue"
	import comment from "../comment/comment.vue"
	let time
	export default {
		props: ['videolist'],
		components: {
			videoPlayer,
			listLeft,
			listRight,
			comment
		},
		data() {
			return {
				videos: [],
				pageStarY: 0,
				pageEndY: 0,
				page: 0,
				show:false
			};
		},
		watch: {
			videolist() {
				this.videos = this.videolist
			}
		},
		methods: {
			changeClick() {
				//双击点赞
				// console.log("i");
				this.$refs.right[this.page].change()
			},
			//滑动组件进行变化
			change(res) {
				clearTimeout(time)
				//获取的是swiper的current作为视频的编号
				this.page = res.detail.current
				//使用定时器的原因是change在触摸开始结束之间，要触摸结束发生改变
				time = setTimeout(() => {
					if (this.pageStarY < this.pageEndY) {
						console.log("视频播放上一个");
						this.$refs.player[this.page].player()
						//向上滑下一条视频暂停
						this.$refs.player[this.page + 1].pause()
						//防止触摸过块
						this.pageStarY = 0
						this.pageEndY = 0
					} else {
						console.log("视频播放下一个");
						this.$refs.player[this.page].player()
						//向下滑上一条视频暂停
						this.$refs.player[this.page - 1].pause()
						this.pageStarY = 0
						this.pageEndY = 0
					}
				}, 10)
				// console.log(res);

			},
			touchstart(res) {
				// console.log(res);

				//swiper里的第一个数据存放了距离
				this.pageStarY = res.changedTouches[0].pageY
				// console.log(this.pageStarY); 
			},
			touchend(res) {

				this.pageEndY = res.changedTouches[0].pageY
				// console.log(this.pageEndY);
			},
			openComment(){
				console.log("open");
				if(this.show===false){
					this.show=true
				}
			},
			close(){
				if(this.show===true){
					this.show=false
				}
			}
		}

	}
</script>

<style>
	.videoList {
		height: 100%;
		width: 100%;
	}

	.swiper-box {
		height: 100%;
		width: 100%;
	}

	.swiper {
		height: 100%;
		width: 100%;
	}

	.swiper-item {
		z-index: 20;
		height: 100%;
		width: 100%;
		background-color: #0077AA;
	}

	.left-box {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}

	.right-box {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		right: 10px;
	}

	.comment-box {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 90;
		align-items: center;
		justify-content: center;
		height: 350px;
		width: 100%;
	}
</style>
