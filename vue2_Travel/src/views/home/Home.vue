<template>
	<div id="home">
		<header class="header">
			<div slot="left" class="left">
				<span class="iconfont">&#xe685;</span>
			</div>
			<div slot="center" class="center">
				<span class="iconfont icon-input">&#xe67d;</span>
				<input type="text" class="header-input" value="输入搜索内容">
			</div>
			<div slot="right" class="right">
				<span class="iconfont">&#xe686;</span>
			</div>
		</header>
	</div>
</template>

<script>
import Header from './homecmp/Header.vue'

export default {
	name: "Home",
	components: {
		Header
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/varibles.styl' 

.header {
	height: 44px;
	display: flex;
	font-size: 12px;
	background-color: $bgColor;
	color: white;
	text-align: center;
	border-top: 0;
	margin: 0
	
}

.left .iconfont {
	margin-top: 50px;
	font-size: 20px;
	vertical-align: -0.9em;
}

.left {
	width: 15%;
}

.center {
	flex: 1;
	background-color: white;
	margin: 5px 5px;
	box-sizing: border-box; 
	width: 70%;
	display: flex;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.center input {
	flex: 1;
	border: 0px;
	padding: 10px 15px;
	border-radius: 0 5px 5px 0;
	color: gray;
}

.center span {
	width: 15%;
	box-sizing: border-box;
	background-color: #eee;
	padding: 5px;
}

.right {
	width: 15%;
	vertical-align: middle;
}

.right .iconfont {
	margin-top: 50px;
	font-size: 25px;
	vertical-align: -0.8em;
}

</style>