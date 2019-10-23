import {test} from './a.js'
import {b} from './b.js';
import {c} from './c.js';

const textFun = (...arg) => {
    let P = document.createElement("p");
    P.innerHTML = arg.join(" ");
    document.getElementById('root').appendChild(P);
    let res = test()
    console.log(res)
}
textFun('哈哈',b,c);