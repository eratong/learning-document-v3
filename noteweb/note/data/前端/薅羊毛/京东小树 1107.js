// xuanfu("测",28,1188)
// var currentTitle = id("titleId").text(); // 获取当前页面标题
// console.log(currentTitle)
// click(850,1915)
// var currentUrl = currentActivity(); // 获取当前页面的 URL 或者标识
// console.log(currentUrl)

// var elements = className("com.jd.lib.babel.view.activity.BabelActivity").find();

// var targetElement = bounds(0, 0, 1000, 2000).findOnce(); // 以左上角和右下角的坐标来定义一个矩形区域
// console.log(targetElement)

// var currentUrl = currentPackage();
// console.log(currentUrl)
// com.jingdong.app.mall

//com.jingdong.app.mall.WebActivity

// // 去逛逛
// guangguang();
// myToast("滑动");
// swipe(803, 1819, 803, 500, 1 * 1000);
// guangguang2();

// function guangguang() {
//     var y = 960;
//     for (var i = 0; i < 10; i++) {
//         if(i==1){
//             console.log("ssssssssssssssssssss")
//             continue;
//             console.log("bbbbbbbbbbbbbbb")

//         }

//         xuanfu("去逛逛", 850, y);
//         // myClick("去逛逛", 850, y);
//         // sleep(8 * 1000);
//         y = y + 205
//         console.log(y);
//         if (y > 2190) {
//             break;
//         }
//     }
// }
// function guangguang2() {
//     var y = 2120;
//     for (var i = 0; i < 10; i++) {
//         if(i==8)continue;
//         console.log(y);
//         xuanfu("去逛逛", 850, y);
//         // myClick("去逛逛", 850, y);
//         // sleep(8 * 1000);
//         y = y - 205
//         if (y < 890) break;
//     }
// }
// // 去领取
// myToast("滑动");
// swipe(803, 1000, 803, 1519, 1 * 1000);
// ling();
// myToast("滑动");
// swipe(803, 1819, 803, 500, 1 * 1000);
// ling2();
// function ling() {
//     var y = 960;
//     for (var i = 0; i < 10; i++) {
//         if(i==1)continue;
//         xuanfu("去领取", 850, y);
//         // myClick("去领取", 850, y);
//         // sleep(8 * 1000);
//         y = y + 205
//         console.log(y);
//         if (y > 2190) {
//             break;
//         }
//     }
// }
// function ling2() {
//     var y = 2120;
//     for (var i = 0; i < 10; i++) {
//         if(i==8)continue;
//         console.log(y);
//         xuanfu("去领取", 850, y);
//         // myClick("去领取", 850, y);
//         // sleep(8 * 1000);
//         y = y - 205
//         if (y < 890) break;
//     }
// }

// function getBtnXYByName(name) {
//     console.log("getBtnXYByName start")
//     var obj = {};
//     var button = text(name).findOnce();
//     if (button) {
//         var buttonBounds = button.bounds();
//         var buttonX = buttonBounds.centerX();
//         var buttonY = buttonBounds.centerY();
//         console.log(name + "按钮的坐标是：(" + buttonX + ", " + buttonY + ")");
//         obj.buttonX = buttonBounds.centerX();
//         obj.buttonY = buttonBounds.centerY();
//     } else {
//         console.log("没找到" + name + "按钮");
//     }
//     console.log("getBtnXYByName end")
//     return obj;
// }

// android.widget.LinearLayout
// var linearLayout = className("android.widget.LinearLayout").findOnce();
// console.log(linearLayout.childCount())
// console.log(linearLayout.getChildAt(0))

// for(var i=0;i<100;i++){
//     var button = text(i).findOnce();
// console.log(button)
// }

// var linearLayoutCount = 0; // 用于记录LinearLayout的数量

// // 深度优先搜索遍历整个UI界面
// function traverseAndCountLayouts(node) {
//     console.log(node)
//     if (node != null) {
//         if (node instanceof android.widget.LinearLayout) {
//             linearLayoutCount++; // 如果当前节点是LinearLayout，则数量加一
//         }
//         // 递归遍历子节点
//         if (node.childCount) {
//             for (var i = 0; i < node.childCount; i++) {
//                 traverseAndCountLayouts(node.child(i));
//             }
//         }
//     }
// }


// // 从根布局开始遍历
// traverseAndCountLayouts(ui.root);
// console.log("页面中有 " + linearLayoutCount + " 个 LinearLayout");

//fullId("com.jingdong.app.mall:id/fe")
// var targetId = id("com.jd.lib.babel.feature:id/title_back").findOnce(); // 通过控件的id属性来获取控件对象
// var targetId = id("com.jingdong.app.mall:id/fe").findOnce();
// fullId("com.jingdong.app.mall:id/vh")
// var targetId = id("com.jingdong.app.mall:id/vh").findOnce();
// if (targetId != null) {
//     var fullId = targetId.toString(); // 获取控件的全局唯一标识
//     console.log("控件的全局唯一标识为：" + fullId+(!targetId));
// } else {
//     console.log("未找到指定id的控件");
// }
// var afterUrl = currentActivity();
// console.log(afterUrl);

// xuanfu("ssss",850,1780)
// var y=1780
// var beforeUrl = currentActivity();

var afterUrl = currentActivity();
        var currentBackId = id("com.jingdong.app.mall:id/fe").findOnce();
        var currentShareId = id("com.jingdong.app.mall:id/vh").findOnce();
        // console.log("从下往上去逛逛" + 850 + "," + y + "currentBackId" + currentBackId + "=currentShareId=" + currentShareId + "==" + beforeUrl + "==" + afterUrl + (currentBackId == null || currentShareId == null || beforeUrl != afterUrl ? "跳转成功" : "跳转失败"))
        
var currentDongId = id("com.jingdong.app.mall:id/fd").findOnce();
console.log(currentDongId.text())

function xuanfu(name, x, y) {
    var obj = floaty.rawWindow(
        <frame gravity="center" background="#FF0000">
            <text id="text">{name}</text>
        </frame>
    );
    // 设置悬浮窗的位置
    obj.setPosition(x, y - 50);

    setTimeout(() => {
        // 2秒后关闭窗口
        obj.close();
    }, 2000);
}
function myToast(data) {
    console.log(data)
    toast(data);
    sleep(1000)
}