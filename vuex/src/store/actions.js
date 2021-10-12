export default {
	// action分发
	increment(context) {
		setTimeout(() => {
			context.commit('increment')
			console.log('increment success')
		}, 1)
	},

	// 返回promise
	aUpdateInfo(context, payload) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				context.commit('updateInfo');
				console.log(payload);

				resolve('1111')
			}, 1000)
		})
	}
}