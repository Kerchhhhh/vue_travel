export default {
	// 状态更新
	increment (state) {
		state.counter ++
	},
	decrement(state) {
		state.counter--
	},

	// 更新时携带一些额外的参数payload载荷
	incrementCount(state, payload) {
		state.counter += payload.count
	},
}