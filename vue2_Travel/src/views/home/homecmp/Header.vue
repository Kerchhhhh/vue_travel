<template>
	<div>
		<div><slot name="header-left"></slot></div>
		<div><slot name="header-center"></slot></div>
		<div><slot name="header-right"></slot></div>
	</div>
</template>

<script>

export default {
	name: "Header"
}
</script>

<style scoped>

</style>
