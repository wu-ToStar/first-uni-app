<template>
	<view class="follow">
		<follow-nav :page="page"></follow-nav>
		<follow-list :list="list"></follow-list>
		<tab></tab>
	</view>
</template>

<script>
	import followNav from "../../components/follow/followNav.vue"
	import followList from "../../components/follow/followList.vue"
	import tab from "../../components/tab/Tab.vue"
	export default {
		components: {
			followNav,
			followList,
			tab
		},
		data() {
			return {
				page: "follow",
				list: []
			}
		},
		methods: {},
		created() {
			uni.request({
				url: "http://localhost/json/videos.json",
				success: (res) => {
					// console.log(res);
					this.list = res.data.list.slice(0,4);
					// console.log(this.list);
				}
			})
		}
	}
</script>

<style>
	.follow {
		width: 100%;
		height: 100%;
		background-color: #000000;
	}
</style>
