<template>
	<view class="listleft">
		<view class="author">
			@{{item.author}}
		</view>
		<view class="title">
			{{item.title}}  
		</view>
		<view class="box">
			<view class="music">
				2
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: ['item'],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.listleft {
		/* height: 150px; */
		margin-left: 10px;
		color: #fff;
		width: 120px;
		z-index: 1;
	}

	.author {
		height: 35px;
		line-height: 35px;
		font-size: 15px;
		//控制长度
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.title {
		line-height: 20px;
		font-size: 12px;
		width: 100%;
		word-wrap: break-word;
		overflow: hidden;
		/* height: 50%; */
	}

	.box {
		width: 100px;
		overflow: hidden;
	}

	.music {
		width: 140px;
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		animation: 4s music linear 0.2s infinite;
	}

	@keyframes music {
		from {
			transform: translate3d(80%, 0, 0);
		}

		to {
			transform: translate3d(-80%, 0, 0);
		}
	}
</style>
