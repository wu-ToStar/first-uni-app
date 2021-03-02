<template>
	<view class="followPlay">
		<video class="video" objectFit="cover" loop="true" :src="'http://localhost/video/'+item.src" :controls="false" id="myVideo"
		 @click="PlayerTo(list)">
			<cover-view class="iconfont iconplus icon" @click="click"></cover-view>
		</video>
	</view>
</template>

<script>
	export default {
		props: ['item', 'list', 'index'],
		data() {
			return {
				play: false
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext("myVideo", this)
			if (this.index === 0) {
				this.player()
			}
		},
		methods: {
			player() {
				if (this.play === false) {
					this.videoContext.play()
				}
				this.play = true
			},
			pause() {
				if (this.play === true) {
					this.videoContext.pause()
				}
				this.play = false
			},
			click() {
				if (this.play === true) {
					this.videoContext.pause()
					this.play = false
				} else {
					this.videoContext.play()
					this.play = true
				}

			},
			PlayerTo(res) {
				console.log(res);
				uni.setStorageSync({
					key:'videoList',
					data:res
				})
				uni.navigateTo({
					url: "../../pages/player/player"
				})
				
			}
		}
	}
</script>

<style>
	.followPlay {
		height: 100%;
		width: 100%;
	}

	.video {
		width: 68%;
		height: 100%;
		z-index: 19;
		position: relative;
	}
	.icon{
		position: absolute;
		bottom: 10px;
		right:10px;
		color: #FFFFFF;
		font-size: 20px;
	}
</style>
