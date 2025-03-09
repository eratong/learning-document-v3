
// 打开淘宝
toast("打开淘宝")
launchApp("淘宝");
sleep(3000);

// 应用双开
myClick("应用双开", 700, 1850, 3000);

// 签到
click(33, 118);
sleep(3000);

// 点击领取
click(893, 953);
sleep(2000);

// 赚元宝
click(27, 950);
sleep(2000);

// 去逛逛
click(803, 1019);
sleep(2000);

// 滑动 起始点的X坐标、Y坐标，滑动结束点的X坐标、Y坐标以及滑动的持续时间
swipe(803, 1019, 803, 1150, 1000);
sleep(32 * 1000);

// 返回上一页
back();



// 第二版
myToast("开始执行任务")

var baseSleepTime = 6 * 1000;

// 打开淘宝
myToast("打开淘宝")
launchApp("淘宝");
sleep(baseSleepTime);


// 应用双开 305,1801 651, 1801
myClick("应用双开", 305, 1801, baseSleepTime);

// 有可能广告 todo

// 签到
myClick("签到", 33, 118, baseSleepTime);

// 立即签到
var button = text("立即签到").findOne();
if (button) {
    var buttonBounds = button.bounds();
    var buttonX = buttonBounds.centerX();
    var buttonY = buttonBounds.centerY();
    console.log("立即签到按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
    myClick("立即签到", buttonX, buttonY, baseSleepTime);
    close();
} else {
    console.log("没找到立即签到按钮");
}

// 点击领取
myClick("点击领取", 893, 953, baseSleepTime);


// 循环做任务
for (var i = 0; i < 5; i++) {
    // 赚元宝
    myClick("赚元宝", 27, 950, baseSleepTime);
    // 获取按钮的坐标
    var button = text("去逛逛").findOne();
    if (button) {
        var buttonBounds = button.bounds();
        var buttonX = buttonBounds.centerX();
        var buttonY = buttonBounds.centerY();
        console.log("按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
    } else {
        console.log("没找到按钮");
        button = text("去完成").findOne();
        var buttonBounds = button.bounds();
        var buttonX = buttonBounds.centerX();
        var buttonY = buttonBounds.centerY();
        console.log("按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
    }
    // 做任务
    if (button) {
        myClick("去逛逛", buttonX, buttonY, baseSleepTime);
        // 滑动 起始点的X坐标、Y坐标，滑动结束点的X坐标、Y坐标以及滑动的持续时间
        myToast("滑动");
        swipe(803, 1819, 803, 500, 30 * 1000);
        sleep(35 * 1000);

        var extractedText = text("任务完成").findOne().text();
        console.log("任务完成" + buttonX + "," + buttonY);

        // 返回上一页
        myToast("返回上一页");

    }
    back();
}


myToast("执行任务结束")

function myClick(operateName, x, y, sleepTime) {
    myToast(operateName);
    // 普通点击
    click(x, y);

    sleep(sleepTime);
}
function myToast(data) {
    toast(data);
    sleep(1000)
}

function close() {
    var button = text("关闭").findOne();
    if (button) {
        var buttonBounds = button.bounds();
        var buttonX = buttonBounds.centerX();
        var buttonY = buttonBounds.centerY();
        console.log("关闭按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
        myClick("关闭", buttonX, buttonY, baseSleepTime);
    } else {
        console.log("没找到关闭按钮");
    }
}


// 快手
myToast("开始执行任务")

var baseSleepTime = 6 * 1000;

// 打开淘宝
myToast("打开快手")
launchApp("快手极速版");
sleep(baseSleepTime);

// 应用双开 305,1801 651, 1801
myClick("应用双开", 305, 1801, baseSleepTime);


for (var i = 0; i < 50000; i++) {
    // 滑动 起始点的X坐标、Y坐标，滑动结束点的X坐标、Y坐标以及滑动的持续时间
    myToast("滑动");
    swipe(803, 919, 803, 100, 2 * 1000);
}

function myClick(operateName, x, y, sleepTime) {
    myToast(operateName);
    // 普通点击
    click(x, y);

    sleep(sleepTime);
}
function myToast(data) {
    toast(data);
    sleep(1000)
}

// --------------------------------------------------
// 京豆小树
myToast("开始执行任务")
var baseSleepTime = 6 * 1000;

// 打开淘宝
myToast("打开京东")
launchApp("京东");
sleep(baseSleepTime);

// 应用双开 305,1801 651, 1801
myClick("应用双开", 305, 1801, baseSleepTime);

// 我的
myClick("我的", 864, 2158, baseSleepTime);

// 东东农场
var nongchang = getBtnXYByName("东东农场");
if (nongchang.buttonX) {
    myClick("东东农场", nongchang.buttonX, nongchang.buttonY, baseSleepTime);
}

// 领水滴
myClick("领水滴", 450, 1700, baseSleepTime);

// 去逛逛
for (var i = 0; i < 10; i++) {
    console.log("去逛逛开始次数"+i);
    var guang = getBtnXYByName("去逛逛");
    if (guang.buttonX) {
        var a =myClick("去逛逛", 915, guang.buttonY, baseSleepTime);
        console.log("校验是否跳转成功去逛逛");
     
        if (guang.buttonY>1300) {
            swipe(803, 1700, 803, 500, 3 * 1000);
            var guang2 = getBtnXYByName("去逛逛");
            var a =myClick("去逛逛", 915, guang2.buttonY, baseSleepTime);
            console.log("校验是否跳转成功去逛逛2");
        }

        sleep(3 * 1000);
        console.log("回上一个页面");
        back();
    } else {
        myToast("滑动");
        swipe(803, 1819, 803, 500, 1 * 1000);
    }
    console.log("去逛逛结束次数"+i);
}

back();
// 东东农场
var nongchang = getBtnXYByName("东东农场");
if (nongchang.buttonX) {
    myClick("东东农场", nongchang.buttonX, nongchang.buttonY, baseSleepTime);
}
// 领水滴
myClick("领水滴", 450, 1700, baseSleepTime);
for (var i = 0; i < 10; i++) {
    var ling = getBtnXYByName("去领取");
    if (ling.buttonX) {
        myClick("去领取", ling.buttonX, ling.buttonY, baseSleepTime);
        if(ling.buttonY>1300){
            myToast("滑动");
            swipe(803, 1819, 803, 500, 3 * 1000);
        }
    } else {
        myToast("滑动");
        swipe(803, 1819, 803, 500, 3 * 1000);
    }
}

back();
// 东东农场
var nongchang = getBtnXYByName("东东农场");
if (nongchang.buttonX) {
    myClick("东东农场", nongchang.buttonX, nongchang.buttonY, baseSleepTime);
}
// 浇水
for (var i = 0; i < 5; i++) {
    myClick("浇水", 800, 1700, baseSleepTime);
}

function getBtnXYByName(name) {
    console.log("getBtnXYByName start")
    var obj = {};
    var button = text(name).findOne();
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

function myClick(operateName, x, y, sleepTime) {
    myToast(operateName);
    // 普通点击
    var a =click(x, y);
    console.log("点击按钮返回"+a);
    sleep(sleepTime);
    return a;
}
function myToast(data) {
    console.log(data)
    toast(data);
    sleep(1000)
}



// 部分测试
var baseSleepTime = 6 * 1000;

// 我的
myClick("我的", 450, 1700, baseSleepTime);

function myClick(operateName, x, y, sleepTime) {
    myToast(operateName);
    // 普通点击
    click(x, y);

    sleep(sleepTime);
}