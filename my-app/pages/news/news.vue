<template>
	<view class="news">
		<news-nav></news-nav>
		<news-content></news-content>
		<tab></tab>
	</view>
</template>

<script>
	import newsNav from "../../components/news/newsNav.vue"
	import tab from "../../components/tab/Tab.vue"
	import newsContent from "../../components/news/newsContent.vue"
	export default {
		components:{
			newsNav,tab,newsContent
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.news{
	width: 100%;
	height: 100%;
	background-color: #000;
	
}
</style>
