<template>
	<view class="city">
		<city-header></city-header>
		<change-list :city="city" :letter="letter"></change-list>
		<change-alphabet :city="city" @change="change"></change-alphabet>
	</view>
</template>

<script>
	import cityHeader from '../../components/cityContent/cityHeader.vue'
	import changeList from '../../components/cityContent/changeList.vue'
	import changeAlphabet from '../../components/cityContent/changeAlphabet.vue'
	export default {
		props:[''],
		components:{
			cityHeader,changeList,changeAlphabet
		},
		data() {
			return {
				city:[],
				letter:[]
			}
		},
		methods: {
			getCityInfo(){
					uni.request({
						url:'http://localhost/json/city.json',
						success:(res)=>{
							// console.log(res.data);
							this.city=res.data.city
							// console.log(this.city);
						}
					})
				},
				//将字母表点击的数据传给changeList
				change(res){
					// console.log(res);
					this.letter=res
				}
		},
		created(){
			this.getCityInfo()
		}
	}
</script>

<style>
.city{
	width: 100%;
	height: 100%;
	background-color: #000;
}
</style>
