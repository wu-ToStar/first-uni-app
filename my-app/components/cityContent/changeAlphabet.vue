<template>
	<view class="changeAlphabet">
		<view class="list">
			<view class="item" v-for="(item,index) of city" :key="index" hover-class="hover" @click="click(item.initial)"
			 @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
				{{item.initial}}
			</view>
		</view>
	</view>
</template>

<script>
	let time = null
	export default {
		props: ['city'],
		data() {
			return {
				touch: false
			}
		},
		methods: {
			click(res) {
				// console.log(res);
				this.$emit("change", res)
			},
			touchStart() {
				this.touch = true
			},
			touchMove(e) {
				//设置定时器防止触摸失误
				clearTimeout(time)
				time = setTimeout(() => {
					if (this.touch) {
						const touchY = e.changedTouches[0].pageY - 150
						const index = Math.floor(touchY / 15)
						if (index >= 0 && index <= this.city.length) {
							this.$emit("change", this.city[index].initial)
						}
					}
				}, 30)
			},
			touchEnd() {
				this.touch = false
			}
		}
	}
</script>

<style>
	.changeAlphabet {
		position: fixed;
		top: 150px;
		right: 0px;
		z-index: 20;
		color: #fff;
	}

	.list {
		width: 30px;
	}

	.item {
		text-align: center;
		line-height: 15px;
		font-size: 10px;
	}

	.hover {
		text-align: center;
		line-height: 15px;
		font-size: 15px;
		margin-right: 10px;
	}
</style>
