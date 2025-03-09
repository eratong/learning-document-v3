// https://blog.csdn.net/weixin_44589117/article/details/106223710
// vscode安装autojs插件
// ctrl+shift+p 搜索autojs run
// 手机autojs 输入电脑ip连接
// f5运行电脑js

// swipe(803, 1000, 803, 1500, 1 * 1000);

// 浇水
// var index =30;
// while(index){
//     click(800, 1700);
//     sleep(4 * 1000);
//     index--;
// }

// var a=getBtnXYByName("开心收下");
// click(a.buttonX, a.buttonY);

// fullId("com.jingdong.app.mall:id/g4")
// var targetElement = className("com.jingdong.app.mall:id/g4").findOnce();
// var currentBackId = id("com.jingdong.app.mall:id/g4").findOnce();
// console.log(currentBackId)

// className("android.widget.LinearLayout")
// var targetElement = className("android.widget.LinearLayout").findOnce();
// var targetElement =className("com.tencent.tbs.core.webkit.WebView").findOnce();
// console.log(targetElement)
// var frameLayout = className("android.widget.FrameLayout").depth(0).findOne();
// var frameLayout = className("android.view.view").depth(0).findOnce();
// if (frameLayout) {
//     console.log("找到最外层FrameLayout");
//     // 这里可以对frameLayout进行你需要的操作
// } else {
//     console.log("未找到最外层FrameLayout");
// }

// var currentActivity = currentActivity(); // 获取当前的Activity
// var uiObjects = currentActivity().all();
// console.log(uiObjects)
// var x=800;
// var y=800;
// xuanfu("xxxxxx",x, y-50);
// click(x,y)
// var currentDongId = id("com.jingdong.app.mall:id/g4").findOnce();
// console.log("xxxx"+currentDongId.text())
// 导入Auto.js和UIAutomator模块
// var s=find("com.jingdong.app.mall:id/g4");
// var s=id("com.jingdong.app.mall:id/g4").find();
// console.log(JSON.stringify(s))
// console.log(JSON.stringify(s).length==1148)
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2296,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":0},"mChildNodeIds":{"mSize":1,"mValues":[-4294963117,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294963119,"mSealed":true,"mSourceNodeId":-4294963118,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4230},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294961690,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294961692,"mSealed":true,"mSourceNodeId":-4294961691,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4378},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294957797,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294957799,"mSealed":true,"mSourceNodeId":-4294957798,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4600},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294957979,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294957981,"mSealed":true,"mSourceNodeId":-4294957980,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4584},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]

//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294957737,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294957739,"mSealed":true,"mSourceNodeId":-4294957738,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4609},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294957737,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":2,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294957739,"mSealed":true,"mSourceNodeId":-4294957738,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":4609},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
// console.log(JSON.stringify(s).split(",").length)

// var element = id("com.jingdong.app.mall:id/g4").findOne();
// var UI = require("ui");

// console.log("ss");
// console.log(element);
// if (element) {
//     var rootNode = UI.getHierarchy();
//     var elements = rootNode.find();
//     if (elements.length == 1) {
//         console.log("页面除了指定元素之外没有其他元素");
//     } else {
//         console.log("页面除了指定元素之外还有其他元素");
//     }
// }
// xuanfu("xxxxxxx",50, 350);
// clickAndXuanFu("去旧版本", 50, 350); sleep(baseSleepTime);
var currentDongId = id("com.jingdong.app.mall:id/g4").findOnce();
console.log(currentDongId);
//com.stardust.automator.UiObject@9f9d90; boundsInParent: Rect(0, 0 - 256, 123); boundsInScreen: Rect(412, 96 - 668, 219); packageName: com.jingdong.app.mall; className: android.widget.TextView; text: 免费水果; contentDescription: null; viewId: com.jingdong.app.mall:id/fd; checkable: false; checked: false; focusable: true; focused: false; selected: false; clickable: true; longClickable: false; enabled: true; password: false; scrollable: false; [ACTION_FOCUS, ACTION_SELECT, ACTION_CLEAR_SELECTION, ACTION_CLICK, ACTION_ACCESSIBILITY_FOCUS, ACTION_NEXT_AT_MOVEMENT_GRANULARITY, ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY, ACTION_SET_SELECTION, ACTION_SHOW_ON_SCREEN]
// console.log("从上往下去逛逛" + 850 + "," + y + "==" + (currentDongId == null ? currentDongId : currentDongId.text()) + "==" + (currentDongId == null || currentDongId.text() !== "东东农场" ? "跳转成功" : "跳转失败"))
     

// swipe(803, 2000, 803, 850, 1 * 1000);// 上滑
// sleep(5000)
// swipe(803, 1000, 803, 2600, 1 * 1000);// 下滑
// swipe(803, 1000, 803, 1500, 1 * 1000);// 下滑
// swipe(803, 1000, 803, 1500, 1 * 1000);// 下滑


// var firstpage = JSON.stringify(id("com.jingdong.app.mall:id/g4").find());
// console.log(firstpage.length)
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2296,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":0},"mChildNodeIds":{"mSize":1,"mValues":[-4294963567,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":8,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294963569,"mSealed":true,"mSourceNodeId":-4294963568,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":11341},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294963433,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":8,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294963435,"mSealed":true,"mSourceNodeId":-4294963434,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":11360},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2296,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":0},"mChildNodeIds":{"mSize":1,"mValues":[-4294963373,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":8,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294963375,"mSealed":true,"mSourceNodeId":-4294963374,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":11361},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294960763,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":8,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294960765,"mSealed":true,"mSourceNodeId":-4294960764,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":11387},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]
//[{"mDepth":7,"mIndexInParent":0,"mStackTrace":"","mInfo":{"mActions":[{"mActionId":4,"mSerializationFlag":4},{"mActionId":8,"mSerializationFlag":8},{"mActionId":64,"mSerializationFlag":64},{"mActionId":16908342,"mSerializationFlag":4194304}],"mBooleanProperties":2176,"mBoundsInParent":{"bottom":2071,"left":0,"right":1080,"top":0},"mBoundsInScreen":{"bottom":2296,"left":0,"right":1080,"top":225},"mChildNodeIds":{"mSize":1,"mValues":[-4294960763,0,0,0,0,0,0,0,0,0,0,0]},"mClassName":"android.widget.LinearLayout","mConnectionId":8,"mDrawingOrderInParent":1,"mExtraDataKeys":["android.view.accessibility.extra.DATA_RENDERING_INFO_KEY"],"mInputType":0,"mLabelForId":9223372034707292159,"mLabeledById":9223372034707292159,"mLiveRegion":0,"mMaxTextLength":-1,"mMovementGranularities":0,"mPackageName":"com.jingdong.app.mall","mParentNodeId":-4294960765,"mSealed":true,"mSourceNodeId":-4294960764,"mTextSelectionEnd":-1,"mTextSelectionStart":-1,"mTraversalAfter":9223372034707292159,"mTraversalBefore":9223372034707292159,"mViewIdResourceName":"com.jingdong.app.mall:id/g4","mWindowId":11387},"mParentVirtualDescendantId":-1,"mVirtualDescendantId":-1}]

// var s = id("com.jingdong.app.mall:id/g4").find();
// if (JSON.stringify(s).length != 1148 || firstpage != JSON.stringify(s)) {
//     console.log("b")
// } else {
//     console.log("s")
// }

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

// xuanfu("zzzz",450, 1500 );
function xuanfu(name, x, y) {
    var obj = floaty.rawWindow(
        <frame gravity="center" background="#FF0000">
            <text id="text">{name}</text>
        </frame>
    );
    // 设置悬浮窗的位置
    obj.setPosition(x, y);

    setTimeout(() => {
        // 2秒后关闭窗口
        obj.close();
    }, 5000);
}


