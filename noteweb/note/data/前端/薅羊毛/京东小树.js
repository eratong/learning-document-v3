
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
myClick("应用双开", 305, 1801);
sleep(baseSleepTime);
// 广告
sleep(baseSleepTime);

// 我的
myClick("我的", 864, 2158);
sleep(baseSleepTime);


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
guanguang();
guanguang();
guanguang();

function guanguang() {
    var index = 1;
    while (getBtnXYByName("去逛逛").buttonY) {
        console.log("去逛逛次数" + index);

        var guang = getBtnXYByName("去逛逛");
        if (guang.buttonY > 1500) {
            myToast("滑动");
            swipe(803, 1819, 803, 500, 1 * 1000);
        }

        if (guang.buttonY) {
            myClick("去逛逛", 915, guang.buttonY);
            sleep(8 * 1000);
        }

        if (getBtnXYByName("去逛逛").buttonY && guang.buttonY > 1500) {
            myToast("滑动");
            swipe(803, 1819, 803, 500, 1 * 1000);

            var guang2 = getBtnXYByName("去逛逛");
            if (guang2.buttonY) {
                myClick("去逛逛", 915, guang2.buttonY);
                sleep(8 * 1000);
            }
        }
        index++;
        back();
    }
}

// 去领取
ling();
ling();
ling();
function ling() {
    var index = 1;
    while (getBtnXYByName("去领取").buttonY) {
        console.log("去领取次数" + index);

        var ling = getBtnXYByName("去领取");
        if (ling.buttonY > 1500) {
            myToast("滑动");
            swipe(803, 1819, 803, 500, 1 * 1000);
        }

        if (ling.buttonY) {
            myClick("去领取", 915, ling.buttonY);
            sleep(2 * 1000);
        }

        if (getBtnXYByName("去领取").buttonY && ling.buttonY > 1500) {
            myToast("滑动");
            swipe(803, 1819, 803, 500, 1 * 1000);

            var ling2 = getBtnXYByName("去领取");
            if (ling2.buttonY) {
                myClick("去领取", 915, ling2.buttonY);
                sleep(2 * 1000);
            }
        }
        index++;
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
    console.log("myClick" + x + "," + y)
    xuanfu(operateName, x, y);
    myToast(operateName);
    // 普通点击
    var a = click(x, y);
    return a;
}
function myToast(data) {
    console.log(data)
    toast(data);
    sleep(1000)
}


function xuanfu(name, x, y) {
    var obj = floaty.rawWindow(
        <frame gravity="center" background="#FF0000">
            <text id="text">{name}</text>
        </frame>
    );
    obj.close();
    // 设置悬浮窗的位置
    obj.setPosition(x, y - 50);

    setTimeout(() => {
        // 2秒后关闭窗口
        obj.close();
    }, 1000);
}

