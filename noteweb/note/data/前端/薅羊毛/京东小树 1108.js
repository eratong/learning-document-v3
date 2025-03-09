
// 纵坐标不准 左上角坐标0，-100
// 京豆小树
myToast("执行任务开始")
var baseSleepTime = 6 * 1000;
var baseY = 100;

// 打开淘宝
myToast("打开京东")
launchApp("京东");
sleep(baseSleepTime);

// 应用双开 305,1801 651, 1801
myClick("应用双开", 305,1801);
sleep(baseSleepTime);
// 广告
sleep(baseSleepTime);

// 我的
myClick("我的", 864, 2158);
sleep(baseSleepTime);

// 广告 todo

// 东东农场
var nongchang = getBtnXYByName("东东农场");
if (nongchang.buttonX) {
    myClick("东东农场", nongchang.buttonX, nongchang.buttonY);
    sleep(baseSleepTime);
} else {
    console.log("找不到东东农场");
    console.log("执行任务结束");
    exit();
}

// 签到
myClick("签到", 100, 1600);
sleep(baseSleepTime);
myClick("点击签到领水滴", 600, 1200);
sleep(baseSleepTime);
back();

// 领水滴
myClick("领水滴", 450, 1700);
sleep(baseSleepTime);
// 去逛逛
guangguang();
swipe(803, 1819, 803, 500, 1 * 1000);
guangguang2();
function guangguang() {
    var y = 960;
    for (var i = 0; i < 10; i++) {
        if (i == 1) {
            y = y + 205;
            continue;
        }
        xuanfu("去逛逛", 850, y);
        var beforeUrl = currentActivity();
        myClick("去逛逛", 850, y);
        sleep(15 * 1000);
        var afterUrl = currentActivity();
        var currentBackId = id("com.jingdong.app.mall:id/fe").findOnce();
        var currentShareId = id("com.jingdong.app.mall:id/vh").findOnce();
        console.log("从上往下去逛逛" + 850 + "," + y + "currentBackId" + currentBackId + "=currentShareId=" + currentShareId + "==" + beforeUrl + "==" + afterUrl + (currentBackId == null || currentShareId == null || beforeUrl != afterUrl ? "跳转成功" : "跳转失败"))
        if (currentBackId == null || currentShareId == null) {
            sleep(10 * 1000);
            back();
            console.log("返回" + currentActivity())
        }
        y = y + 205
        if (y > 2190) {
            break;
        }
    }
}
function guangguang2() {
    var y = 2120;
    for (var i = 0; i < 10; i++) {
        if (i == 8) {
            y = y - 205;
            continue;
        }
        xuanfu("去逛逛", 850, y);
        var beforeUrl = currentActivity();
        myClick("去逛逛", 850, y);
        sleep(15 * 1000);
        var afterUrl = currentActivity();
        var currentBackId = id("com.jingdong.app.mall:id/fe").findOnce();
        var currentShareId = id("com.jingdong.app.mall:id/vh").findOnce();
        console.log("从下往上去逛逛" + 850 + "," + y + "currentBackId" + currentBackId + "=currentShareId=" + currentShareId + "==" + beforeUrl + "==" + afterUrl + (currentBackId == null || currentShareId == null || beforeUrl != afterUrl ? "跳转成功" : "跳转失败"))
        if (currentBackId == null || currentShareId == null ) {
            sleep(10 * 1000);
            back();
            console.log("返回" + currentActivity())
        }
        y = y - 205
        if (y < 890) break;
    }
}
// 去领取
// swipe(803, 1000, 803, 1519, 1 * 1000);
// ling();
// swipe(803, 1819, 803, 500, 1 * 1000);
// ling2();
function ling() {
    var y = 960;
    for (var i = 0; i < 10; i++) {
        if (i == 1) {
            y = y + 205;
            continue;
        }
        xuanfu("去领取", 850, y);
        var beforeUrl = currentActivity();
        myClick("去领取", 850, y);
        sleep(10 * 1000);
        var afterUrl = currentActivity();
        var currentBackId = id("com.jingdong.app.mall:id/fe").findOnce();
        if (!currentBackId || beforeUrl != afterUrl) {
            back();
        }
        y = y + 205
        if (y > 2190) {
            break;
        }
    }
}
function ling2() {
    var y = 2120;
    for (var i = 0; i < 10; i++) {
        if (i == 8) {
            y = y - 205;
            continue;
        }
        xuanfu("去领取", 850, y);
        var beforeUrl = currentActivity();
        myClick("去领取", 850, y);
        sleep(10 * 1000);
        var afterUrl = currentActivity();
        var currentBackId = id("com.jingdong.app.mall:id/fe").findOnce();
        if (!currentBackId && beforeUrl != afterUrl) {
            back();
        }
        y = y - 205
        if (y < 890) break;
    }
}

// 关闭领水滴
myClick("关闭领水滴", 950, 600);

// 浇水
for (var i = 0; i < 5; i++) {
    myClick("浇水", 800, 1700);
    sleep(4 * 1000);
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

function myClick(operateName, x, y) {
    xuanfu(operateName, x, y);
    myToast(operateName);
    // 普通点击
    var a = click(x, y);
    return a;
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

    // setTimeout(() => {
    //     // 2秒后关闭窗口
    //     obj.close();
    //     console.log("ssssssssssssssssssssssssss")
    // }, 2000);
    threads.start(function () {
        sleep(2000); // 休眠2秒
        obj.close(); // 关闭窗口
    });

}

