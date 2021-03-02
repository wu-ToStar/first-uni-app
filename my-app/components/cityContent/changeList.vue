<template>
	<view class="changeList">
		<!-- 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 -->
		<scroll-view scroll-y="true" class="scrolly" :scroll-into-view="viewId">
			<view class="city-box">
				<view class="box">
					<view class="title">
						<icon class="iconfont iconlocation"></icon>
						自动定位
					</view>
					<view class="currentCity">
						{{tcity}}
					</view>
				</view>  
				<view class="box">
					<view class="title">
						热门城市 
					</view>
					<view class="hotlist">
						<view class="item" v-for="(item,key) of list" :key="index">
							{{item}}
						</view>
					</view>
				</view>
				<view class="box-list" v-for="(cities,index) in city" :key="index">
					<!-- 设置哪个方向可滚动，则在哪个方向滚动到该元素 -->
					<view class="inital" :id="cities.initial">
						{{cities.initial}}
					</view>
					<!-- 根据点击的地区将数据存放在本地 -->
					<view class="city-name" v-for="item of cities.list" 
					 :key="item.code" @click="click(item.name)">
						{{item.name}}
					</view>
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['city', "letter"],
		data() {
			return {
				list: ["深圳", "北京", "上海", "武汉", "杭州", "重庆", "长沙", "西安", "成都"],
				viewId:'',
				tcity:""
			}
		},
		onReady(){
			uni.getStorage({
				key:"city",
				success:(res)=>{
					console.log(res.data);
					this.tcity=res.data
				}
			})
		},
		methods:{
			click(res){
				uni.setStorage({
					key:"city",
					data:res,
					// success:(res)=>{
					// 	console.log(res.data);
					// }
				})
				uni.getStorage({
					key:"city",
					success:(res)=>{
						// console.log(res.data);
						this.tcity=res.data
					}
				})
				uni.redirectTo({
					url:"../../pages/city/city"
				})
			},
			
		},
		//接受到点击的字母在赋值给scroll-into-view跳到指定地方
		watch: {
			letter() {
				// console.log(this.letter);
				this.viewId=this.letter
			}
		}
	}
</script>

<style>
	.changeList {
		width: 100%;
		height: 100%;
		background-color: #000;
		z-index: 19;
	}

	.box {
		background-color: #222;
		margin-top: 10px;
		padding: 0 5px 20px 5px;
	}

	.title {
		height: 30px;
		line-height: 30px;
		margin-left: 15px;
		color: #fff;
		font-size: 12px;
	}

	.currentCity {
		height: 20px;
		line-height: 20px;
		margin-left: 15px;
		color: #aaa;
		font-size: 12px;
	}

	.hotlist {
		width: 100%;
		overflow: hidden;
	}

	.item {
		width: 30%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
		float: left;
		background-color: #333;
		margin-left: 2.5%;
		margin-bottom: 10px;
		text-align: center;
		color: #aaa;
	}

	.box-list {
		padding: 8px 5px;
	}

	.inital {
		height: 25px;
		line-height: 25pz;
		padding-left: 10px;
		color: #666;
		font-size: 12px;
	}

	.city-name {
		background-color: #222;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		color: #aaa;
		font-size: 15px;
	}
	.scrolly{
		height: 100%;
	}
</style>
