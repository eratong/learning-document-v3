
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

