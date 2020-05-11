//把每个模块的reducer导入到这里进行集中的处理
import {redux as login} from './login';
import {redux as user} from './user';

let reduxs = Object.assign({}, login, user);
// console.log("合并成一个对象", reduxs);
export default reduxs;
