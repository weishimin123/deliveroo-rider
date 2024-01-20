<template>
	<div class="content">
		<img src="./images/loading.png">
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
				this.$router.push('/login')
			}, 2000)
		},
	
	}
</script>

<style lang="less" scoped>
	.content {
		img {
			width: 100vw;
		}
	}
</style>