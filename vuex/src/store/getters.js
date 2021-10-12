export default {
	// 通过属性访问
	powerCounter(state) {
		return state.counter * state.counter
	},

	// 接收其他getter作为第二个参数
	more20StuLength(state, getters) {
		return getters.moreAgeStu.length
	},

	// 通过方法访问
	moreAgeStu(state) {
		return age => {
			return state.students.filters (s => s.age > age)
		}
	}
}