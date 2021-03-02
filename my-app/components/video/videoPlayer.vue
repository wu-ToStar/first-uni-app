<template>
	<view class="videoPlayer">
		<!-- 192.168.137.1 -->
		<video id="myvideo" class="video" :loop="true" :controls="isfalse" 
		:src="'http://localhost/video/'+video.src" @click="click" 
		:autoplay="autoPlay"></video>
	</view>
</template>

<script>
	let timer = null
	export default {
		props: ['video', 'index'],
		created() {
			// console.log(this.index);
			this.auto()
		},

		data() {
			return {
				play: false,
				onceClick: false,
				autoPlay: false,
				isfalse:false
			};
		},
		watch: {},
		methods: {
			auto() {
				//根据闯过的index判断是否为第一个
				if (this.index === 0) {
					// console.log("----");
					this.autoPlay = true
					this.play=true
				}
			},
			//滑动视频触发
			player() {
				console.log("play---"+this.index);
				if (this.play === false) {
					this.videoContext.seek(0)
					this.videoContext.play()
					this.play = true
				}
				// console.log("on");

			},
			//暂停
			pause() {
				console.log("pause---"+this.index);
				// console.log("off");
				if (this.play === true) {
					this.videoContext.pause()
					this.play = false
				}
			},
			//播放
			playThis() {
				if (this.play === false) {
					this.videoContext.play()
					this.play = true
				}
			},
			//检测是否双击
			click() {
				clearTimeout(timer)
				//取反
				this.onceClick = !this.onceClick
				timer = setTimeout(() => {
					if (this.onceClick) {
						if (this.play === false) {
							this.playThis()
						} else {
							this.pause()
						}
					} else {
						console.log("two");
						this.$emit('changeClick')
					}
					//重置
					this.onceClick = false
				}, 300)

			}
		},
		onReady(res) {
			this.videoContext = uni.createVideoContext('myvideo', this)
		}
	}
</script>

<style>
	.videoPlayer {
		width: 100%;
		height: 100%;
	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>
