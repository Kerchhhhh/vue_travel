// 导入定义的变量
import { flag, sum } from "./111.js";

if (flag) {
	console.log('小明是天才哈哈哈');
	console.log(sum(20,30));
}

// 直接导入export定义的变量
import { num1, height } from "./111.js";
console.log(num1);
console.log(height);

// 导入function 类
import { mul, Person } from "./111.js";
console.log(mul(20,30));
const p = new Person();
p.run()

// 导入default 不能加{}
import a from "./111.js";
console.log(a)

//全部导入 * as 变量名
import * as aaa from "./111.js";
console.log(aaa.address)
