<template>
	<div class="content">
		<span>Loading</span>
	</div>
</template>

<script>
	export default {
		name:'Loading',
		data() {
			return {
				timer: null
			}
		},
		mounted() {
			this.timer =  setTimeout( ()=>{
				clearTimeout(this.timer)
				//  uni.redirectTo({
				//  	url:"/pages/Login"			
				//  })
				
			}, 2000)
		},
	
	}
</script>

<style lang="less" scoped>
	.content {
		height: 100vh;
		background-color: rgb(6, 127, 138);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		span{
			font-size: 10vw;
		}
	}
</style>