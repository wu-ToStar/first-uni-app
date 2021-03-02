<template>
	<view class="cityContent">
		<view class="conlation">
			<view class="conlation-left iconfont iconlocation">
				自动定位：{{tcity}}
			</view>
			<navigator  url="../../pages/changeCity/changeCity" class="conlation-right iconfont">
				切换<text ></text>
			</navigator>
		</view>
		<view class="video-list">
			<view class="item">
				<view class="video">
					<video  style="width: 100%;height: 100%;" src="http://localhost/video/1-1.mp4" controls="false" ></video>
				</view>
				<view class="img">
					<image class="image-box" src="../../static/img/1-1.jpeg" mode=""></image>
				</view>
			</view>  
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://localhost/video/1-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="../../static/img/1-1.jpeg" mode=""></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://localhost/video/1-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="../../static/img/1-1.jpeg" mode=""></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video style="width: 100%;height: 100%;" src="http://localhost/video/1-1.mp4" controls></video>
				</view>
				<view class="img">
					<image class="image-box" src="../../static/img/1-1.jpeg" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:["tcity"],
		data() {
			return {
			}
		},
		// onShow(){
		// 	uni.getStorage({
		// 		key:"city",
		// 		success:(res)=>{
		// 			this.tcity=res.data
		// 		}
		// 	})
		// },
		methods: {
			
		}
	}
</script>

<style>
.cityContent{
	width: 100%;
	height: 100%;
	position: relative;
}
.conlation{
	width: 100%;
	height: 30px;
	padding-top: 70px;
	color: #aaa;
	display: flex;
}
.conlation-left{
	flex: 1;
	font-size: 13px;padding-left: 15px;
}
.conlation-right{
	padding-right: 15px;
}
.video-list{
	position: absolute;
	top: 100px;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: #000000;
}
.item{
	width: 50%;
	float: left;
	position: relative;
}
.video{
	width: 92%;
	height: 300px;
	margin-left: 4%;
	z-index: 18;
}
.img{
	position: absolute;
	bottom: 10px;  
	right: 15px;
}
.image-box{
	width: 30px;
	height: 30px;
	border-radius: 50%;
}
</style>
