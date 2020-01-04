const add = require('./utils/util1.js')
//node js 자체적으로 import export 구문을 지원 하지 않고 다른 형태로 작성 해야된다.
//따라서 require를 사용 할 수 있도록 한다. 사용 하고자 하면 다른 설정등이 필요하다.
console.log(add(4, 5));
