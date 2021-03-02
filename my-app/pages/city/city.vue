<template>
	<view class="city">
		<first-nav></first-nav>
		<city-content :tcity="tcity"></city-content>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab/Tab.vue'
	import firstNav from "../../components/firstNav/firstNav.vue"
	import cityContent from "../../components/cityContent/cityContent.vue"
	export default {
		components:{
			tab,
			firstNav,cityContent
		},
		data() {
			return {
				 tcity:""
			}
		},
		onShow(){
			uni.getStorage({
				key:"city",
				success:(res)=>{
					// console.log(res.data);
					this.tcity=res.data
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
.city{
	width:100%;
	height:100%;
	background-color: #000000;
}
</style>
