<template>
	<view class="personalInfo">
		<view class="background-img-box">
			<image class="background-img" src="../../static/img/background.jpg" mode=""></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" src="../../static/img/1-1.jpeg" mode=""></image>
			</view>
			<view class="change" v-if="pages==='user'" :style="style4" @click="change">
				{{changeContent}}
			</view>
			<view v-else class="change" @click="changeInfo">
				编辑资料
			</view>
		</view>
		<view class="name-box">
			<view class="name">
				{{user.userName}}
			</view>
			<view class="dyID">

				抖音号：dy354tfee
			</view>
		</view>
		<view class="text-box">
			<view class="introduce">
				我爱看书
			</view>
			<view class="label-box">
				<view class="label">
					xx大学
				</view>
				<view class="label">
					江西
				</view>
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">9999w</text>
					<text class="number-text">获赞</text>
				</view>
				<view class="box">
					<text class="number">99</text>
					<text class="number-text">关注</text>
				</view>
				<view class="box">
					<text class="number">99w</text>
					<text class="number-text">粉丝</text>
				</view>
			</view>

		</view>
		<view class="add-box">
			<text class="iconfont iconxiangji"></text>
			<text class="add">添加随拍</text>
		</view>
		<view class="option-box">
			<!-- 使用switch改变状态 -->
			<view class="option" :style="style1" @click="click('作品')">
				作品
			</view>
			<view class="option" :style="style2" @click="click('动态')">
				动态
			</view>
			<view class="option" :style="style3" @click="click('喜欢')">
				喜欢
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['pages'],
		data() {
			return {
				style1:"border-bottom:3px solid #F0AD4E;",
				style2:"",
				style3:"",
				style4:"background-color:red;",
				changeContent:"+  关注",
				user:{
					userName:"张三",
					userId:"123435",
					intrduction:"我爱睡觉",
					school:"",
					sex:"",
					birthday:'',
					city:''
				},
				
			}
		},
		methods: {
			click(res){
				switch (res){
					case '作品':
						this.style1="border-bottom:3px solid #F0AD4E;"
						this.style2=""
						this.style3=""
						this.$emit("change",res)
						break;
					case '动态':
						this.style2="border-bottom:3px solid #F0AD4E;"
						this.style1=""
						this.style3=""
						this.$emit("change",res)
						break;
					case '喜欢':
						this.style3="border-bottom:3px solid #F0AD4E;"
						this.style2=""
						this.style1=""
						this.$emit("change",res)
						break;
					default:
						break;
				}
			},
			changeInfo(){
				uni.navigateTo({
					url:"../../pages/changeInfo/changeInfo"
				})
			},
			change(){
				this.style4=this.style4===""?"background-color:red;":""
				this.changeContent=this.changeContent==="+  关注"?"取消关注":"+  关注"
			}
		},
		created(res) {
			console.log(res);
			uni.getStorage({
				key:'userName',
				success: (res) => {
					this.user.userName=res.data
				}
			}),
			uni.getStorage({
				key:'userId',
				success: (res) => {
					this.user.userId=res.data
				}
			}),
			uni.getStorage({
				key:'intrduction',
				success: (res) => {
					this.user.intrduction=res.data
				}
			}),
			uni.getStorage({
				key:'school',
				success: (res) => {
					this.user.school=res.data
				}
			}),
			uni.getStorage({
				key:'city',
				success: (res) => {
					this.user.city=res.data
				}
			})
		}
	}
</script>

<style scoped>
	.personalInfo {
		width: 100%;
		background: #000000;
		position: relative;
	}

	.background-img-box {
		width: 100%;
		padding: 0 1px;
		z-index: 19;
	}

	.background-img {
		width: 100%;
		height: 160px;
	}

	.top {
		width: 100%;
		position: absolute;
		top: 100px;
		left: 0;
		z-index: 20;
		background: #000000;
		height: 60px;
	}

	.personal-img-box {
		margin: -25px 0 0 30px;
	}

	.personal-img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		z-index: 20;
		border: 3.5px solid #000000;
	}

	.change {
		position: absolute;
		top: 15px;
		right: 25px;
		width: 55%;
		height: 35px;
		line-height: 35px;
		font-size: 16px;
		text-align: center;
		background: #333333;
		border-radius: 2px;
		color: #ffffff;
	}

	.name-box {
		padding: 0 25px;
		color: #EEEEEE;
		z-index: 20;
	}

	.name {
		height: 50px;
		line-height: 50px;
		font-size: 26px;
	}

	.douyinId {
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}

	.text-box {
		z-index: 20;
		padding: 0 25px;
		margin-top: 8px;
		border-top: 1px solid #222222;
	}

	.introduce {
		height: 30px;
		line-height: 30px;
		font-size: 15px;
		color: #EEEEEE;
	}

	.label-box {
		width: 100%;
		height: 25px;
		margin-top: 5px;
		line-height: 25px;
		color: #EEEEEE;
	}

	.label {
		height: 20px;
		padding: 0 5px;
		line-height: 20px;
		font-size: 11.5px;
		background: #333333;
		color: #999999;
		float: left;
		border-radius: 1.5px;
		margin-right: 10px;
	}

	.number-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.box {
		height: 40px;
		line-height: 40PX;
		float: left;
		margin-right: 5px;
	}

	.number {
		color: #FFFFFF;
		font-size: 15px;
	}

	.number-text {
		color: #999999;
		font-size: 13px;
		width: 50px;
	}

	.add-box {
		margin: 0 6%;
		height: 40px;
		line-height: 40px;
		background: #333333;
		border-radius: 3px;
		text-align: center;
		color: #FFFFFF;
	}

	.add {
		padding-left: 5px;
		font-size: 13px;
	}

	.option-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-bottom: 10px;
	}

	.option {
		width: 33%;
		height: 50px;
		line-height: 50px;
		color: #999999;
		float: left;
		text-align: center;
	}
</style>
