# JavaScript

## 基础
JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在 HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。

### 变量
let和const是JavaScript里相对较新的变量声明方式。\
let在很多方面与var是相似的，\
const是对let的一个增强，它能阻止对一个变量再次赋值。
```js
// 声明变量a并赋值
var a = 10; 
```

### 语句
```js
// 循环语句
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// 条件语句
if (i == 0) {
    console.log("hello");
}
```

### 方法
```js
function add(a, b) {
    return a + b;
}
```

## ES6

就是标准的Js

参考文档\
[阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版](https://www.bookstack.cn/read/es6-3rd/README.md)（<https://www.bookstack.cn/read/es6-3rd/README.md>）

### Promise 对象

异步编程的一种解决方案

描述：
就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

特点：

1、对象的状态不受外界影响。

`Promise`对象代表一个异步操作，

有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

<https://www.runoob.com/w3cnote/javascript-promise-object.html>对象的状态不受外界影响。Promise 
对象代表一个异步操作，有三种状态：
pending: 初始状态，不是成功或失败状态。
fulfilled: 意味着操作成功完成。
rejected: 意味着操作失败

2、一旦状态改变，就不会再变，

任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

优点

有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。

缺点

`Promise`也有一些缺点。首先，无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。第三，当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用 [Stream](https://nodejs.org/api/stream.html) 模式是比部署`Promise`更好的选择。

```
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);//未完成状态(pending)=》成功(resolved)
    console.log(2);//调用resolve或reject并不会终结 Promise 的参数函数的执行。
  } else {
    reject(error);//未完成状态(pending)=》失败(rejected)
  }
});
```

```
//Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数
//这两个函数都接受Promise对象传出的值作为参数。
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```



```
//注意
//这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。
//如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
//如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```

#### Promise.prototype.then()

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

```
getJSON("/post/1.json")
.then(function(post) {
  return getJSON(post.commentURL);
})
.then(function (comments) {//第一个then执行完之后执行
  console.log("resolved: ", comments);//第一个执行完获取的promise，如果状态是resolved就执行第一个函数
}, function (err){//如果状态是rejected就执行第二个函数
  console.log("rejected: ", err);
});
```

#### Promise.prototype.catch()

如果异步操作抛出错误，状态就会变为`rejected`，就会调用`catch()`方法指定的回调函数，处理这个错误。
`then()`方法指定的回调函数，如果运行中抛出错误，也会被`catch()`方法捕获。

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。

Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”

`catch()`方法返回的还是一个 Promise 对象，因此后面还可以接着调用`then()`方法。

```
p.then((val) =>{
    console.log('fulfilled:', val))
    throw new Error('test');
}.catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

`reject()`方法的作用，等同于抛出错误。

```
// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```

#### Promise.prototype.finally() 

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

`finally`方法的回调函数不接受任何参数，`finally`方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

#### Promise.all()

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
/**
参数
    一种：参数是数组，p1、p2、p3都是 Promise 实例，如果不是，就会先调用Promise.resolve方法，将参数转为 Promise 实例
    二种：参数不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
参数状态
	p1, p2, p3全是fulfilled,p就是fulfilled
	p1, p2, p3全是rejected,p就是rejected
	p1, p2,是fulfilled,p3(自己带了catch)是reject，p就是fulfilled,(p3带了catch,状态rejected执行完catch也会变成resolved)
**/
```

#### Promise.race()

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例

只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数

```javascript
const p = Promise.race([p1, p2, p3]);
```

#### Promise.allSettled()

等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作

#### Promise.any() 

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

#### Promise.resolve()

将现有对象转为 Promise 对象

#### Promise.reject()

```javascript
Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true
```

### Mudule语法

#### import和export

```
// 1. 引入变量（方法、类）-（逐一加载）
import { firstName, lastName, year } from './profile.js';

// 2. as关键字重命名
import { lastName as surname } from './profile.js';

// 3. 整体加载
import * as circle from './circle';
```

注意：

1. 引入变量只读，引入对象属性可改写
2. from后面是文件路径（相对路径、绝对路径均可，可省略.js猴嘴；模块名，已配置模块位置）
3. `import`命令提升至顶部先执行（编译阶段执行）
4. `import`命令静态执行，不能使用表达式和变量
5. 重复执行同一句`import`命令，只会执行一次

`export default`命令的本质是将后面的值，赋给`default`变量，所以可以直接将一个值写在`export default`之后

```
// 默认输出一个函数
export default function () {
  console.log('foo');
}
// 引用并指定名字
import customName from './export-default';
```

##### export 与 import 的复合写法
##### 模块的继承

#### export

`export`命令除了输出变量，还可以输出函数或类（class）。

```javascript
// 写法一
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// 写法二
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export { firstName, lastName, year };
//写法三 as重命名
function v1() { ... }
function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

##### export default 命令 

```javascript
// 写法一
export default function () {//如果这么export
  console.log('foo');
}
import customName from './export-default';//加载该模块时，import命令可以为该匿名函数指定任意名字,但是不能用大括号

// 写法二
import _ from 'lodash';//用横线表示
import _, { each, forEach } from 'lodash';
export default function (obj) {}
export function each(obj, iterator, context) {}
export { each as forEach };
```

​	Lodash是一个著名的javascript原生库，不需要引入其他第三方依赖。是一个意在提高开发者效率,提高JS原生方法性能的JS库。简单的说就是，很多方法lodash已经帮你写好了，直接调用就行，不用自己费尽心思去写了，而且可以统一方法的一致性。Lodash使用了一个简单的 _ 符号，就像Jquery的 $ 一样，十分简洁。类似的还有Underscore.js和Lazy.js
https://www.lodashjs.com/docs/lodash.differenceWith

#### import

`import`命令输入的变量都是只读的，因为它的本质是输入接口

但是如果引入的是对象，它属性是可以修改的，并且其他模块也可以读到改写后的值（不推荐去改）

优先执行：`import`命令具有提升效果，会提升到整个模块的头部，首先执行。

```javascript
// 写法一
import { firstName, lastName, year } from './profile.js';
// 写法二 as重命名
import { lastName as surname } from './profile.js';

// 写法三 import语句会执行所加载的模块
import 'lodash';

// 写法四 整体加载
import * as circle from './circle';

//import同一个模块两次，也只会执行一次
import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';
```

##### import()动态加载模块

为了实现在运行中加载模块，引入了`import()`函数，实现了动态加载

```javascript
//import()返回一个 Promise 对象
import('./myModule.js')
.then(({export1, export2}) => {
  // ...
});
```

```javascript
// 1. 
// 引入模块的某些变量（方法、类），配合4、5使用
import {xxx, xxxx} from 'xxx'  
// 4.输出模块的变量（方法、类），对应引入方法为1
let xxx = 'x'; export {xxx}
// 5. 输出模块的变量（方法、类），对应引入方法为1
export class xxx {}

// 2. 引入模块的默认变量（方法、类），配合6使用
import xxx from 'xxx' 
// 6. 输出模块默认的变量（方法、类），对应引入方法为2
export default {}

// 3.
// 实现动态加载，适用于按需加载等
import('../xxx') 
```

#### require
是在import出现之前，用来实现模块化的方法
区别：
	一：require 是赋值过程并且是运行时才执行， import 是解构过程并且是编译时执行（所以require性能较低）
	二：require可以理解为一个全局方法，所以它甚至可以进行下面这样的骚操作，是一个方法就意味着可以在任何地方执行。而import必须写在文件的顶部。

```javascript
//写法一
require('../a.js')
//写法二
var a = require(a() + '/ab.js')
```

******************************************************************************************


## Autoxjs
### 基础
AutoX.js 基于 JavaScript 写自动化脚本

[官方文档地址戳这](http://doc.autoxjs.com/)

### 方法

```js
# 启动APP
launchApp("APP名称");

# 退出脚本
exit();

# 停顿
sleep(1*1000);

# 打印日志
console.log("任务结束");

# 滑动屏幕
swipe(803, 2000, 803, 850, 1 * 1000);// 上滑
swipe(803, 1000, 803, 2600, 1 * 1000);// 下滑

# 根据id查找一次
var current = id("com.xx.app.mall:id/fd").findOnce();

# 返回上一个页面
back();

# 弹出提示
toast("data");

# 悬浮窗
function xuanfu(name, x, y) {
    var obj = floaty.rawWindow(
        <frame gravity="center" background="#FF0000">
            <text id="text">{name}</text>
        </frame>
    );
    // 设置悬浮窗的位置
    obj.setPosition(x, y - 50);
    threads.start(function () {
        // 休眠2秒
        sleep(2000);
        // 关闭窗口
        obj.close();
    });
}
```



### 案例
#### 自动刷视频
```js
swipe(803, 2000, 803, 850, 1 * 1000);// 上滑
```
#### 京东小树
```js

// 纵坐标不准 左上角坐标0，-100

// 京豆小树 任务开始
var baseSleepTime = 6 * 1000;
var baseY = 100;
var pageY = -200;

// 
launchApp("京东"); sleep(baseSleepTime);

// 应用双开 305,1801 651, 1801
clickAndXuanFu("应用双开", 651, 1801); sleep(baseSleepTime);

// 广告
sleep(baseSleepTime);

// 我的
clickAndXuanFu("我的", 864, 2158); sleep(baseSleepTime);

// 广告 todo

// 东东农场
var nongchang = getBtnXYByName("东东农场");
if (nongchang.buttonX) {
    clickAndXuanFu("东东农场", nongchang.buttonX, nongchang.buttonY); sleep(baseSleepTime);
} else {
    console.log("找不到东东农场任务结束");
    exit();
}

// 签到
clickAndXuanFu("签到", 100, 1600); sleep(baseSleepTime);
clickAndXuanFu("点击签到领水滴", 600, 1200); sleep(baseSleepTime);
back();

// 浇水
for (var i = 0; i < 50; i++) {
    clickAndXuanFu("浇水", 800, 1700 + pageY); sleep(3 * 1000);
}

// 领水滴
clickAndXuanFu("领水滴", 450, 1700 + pageY); sleep(baseSleepTime);

// 去逛逛
guangguang();
swipe(803, 2000, 803, 850, 1 * 1000);// 上滑
lastGuangguang();
swipe(803, 1000, 803, 2600, 1 * 1000);// 下滑
guangguang();
swipe(803, 2000, 803, 850, 1 * 1000);// 上滑
lastGuangguang();

function guangguang() {
    var y = 960;
    for (var i = 0; i < 10; i++) {
        if (i == 1) {
            y = y + 205;
            continue;
        }
        clickAndXuanFu("去逛逛", 850, y); sleep(10 * 1000);
        var currentDongId = id("com.jingdong.app.mall:id/fd").findOnce();
        console.log("从上往下去逛逛" + 850 + "," + y + "==" + (currentDongId == null ? currentDongId : currentDongId.text()) + "==" + (currentDongId == null || currentDongId.text() !== "东东农场" ? "跳转成功" : "跳转失败"))
        for (var i = 0; i < 5; i++) {
            var currentDongId2 = id("com.jingdong.app.mall:id/fd").findOnce();
            if (currentDongId2 == null || currentDongId2.text() !== "东东农场") {
                console.log("返回" + currentDongId2);
                back(); sleep(5 * 1000);
            } else {
                break;
            }
        }
        y = y + 205
        if (y > 2190) {
            break;
        }
    }
}

function lastGuangguang() {
    var y = 2120;
    for (var i = 0; i < 10; i++) {
        if (i == 8) {
            y = y - 205;
            continue;
        }
        clickAndXuanFu("去逛逛", 850, y); sleep(10 * 1000);
        var currentDongId = id("com.jingdong.app.mall:id/fd").findOnce();
        console.log("从上往下去逛逛" + 850 + "," + y + "==" + (currentDongId == null ? currentDongId : currentDongId.text()) + "==" + (currentDongId == null || currentDongId.text() !== "东东农场" ? "跳转成功" : "跳转失败"))
        for (var i = 0; i < 5; i++) {
            var currentDongId2 = id("com.jingdong.app.mall:id/fd").findOnce();
            if (currentDongId2 == null || currentDongId2.text() !== "东东农场") {
                console.log("返回" + currentDongId2);
                back(); sleep(5 * 1000);
            } else {
                break;
            }
        }
        y = y - 205
        if (y < 890) {
            break;
        }
    }
}

// 关闭领水滴
clickAndXuanFu("关闭领水滴", 950, 600);

// 浇水
for (var i = 0; i < 40; i++) {
    clickAndXuanFu("浇水", 800, 1700 + pageY); sleep(3 * 1000);
}

function getBtnXYByName(name) {
    console.log("getBtnXYByName start")
    var obj = {};
    var button = text(name).findOnce();
    if (button) {
        var buttonBounds = button.bounds();
        var buttonX = buttonBounds.centerX();
        var buttonY = buttonBounds.centerY();
        console.log(name + "按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
        obj.buttonX = buttonBounds.centerX();
        obj.buttonY = buttonBounds.centerY();
    } else {
        console.log("没找到" + name + "按钮");
    }
    console.log("getBtnXYByName end")
    return obj;
}

function clickAndXuanFu(operateName, x, y) {
    xuanfu(operateName, x, y);
    click(x, y);
}


function myToast(data) {
    toast(data);
    sleep(1000)
}

function xuanfu(name, x, y) {
    var obj = floaty.rawWindow(
        <frame gravity="center" background="#FF0000">
            <text id="text">{name}</text>
        </frame>
    );
    // 设置悬浮窗的位置
    obj.setPosition(x, y - 50);
    threads.start(function () {
        // 休眠2秒
        sleep(2000);
        // 关闭窗口
        obj.close();
    });
}

```


