## 移动端适配主要解决的问题有：
- 移动端设备的自动缩放在大部分情况下都是要禁用的，主要使用`meta viewport`解决
- 移动端端有许多的种类，它们的分辨率不尽相同，可以使用`media`媒体查询解决
- 移动端端的屏幕与PC端屏幕有较大的差别，显示效果有很大的不同，可以使用`动态REM`方案解决
- 移动端端的触发事件和PC端有很大不同

### 详细叙述
1. 使用`meta viewport` 代码禁止用户缩放页面<br>
```
<meta name="viewport" content="width=device-width, 
user-scalable=no,
initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0"> 
```
<br>

- width=device-width <br>
意思是页面宽度等于设备宽度

- user-scalable=no <br>
意思是禁止用户缩放页面

- initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"<br>
意思是原始缩放比例，最大缩放比例，最小缩放比例都是1.0
使用以上代码就能使得移动端用户不能自动缩放页面

2. 媒体查询（`media`）

&emsp;&emsp;使用`media`查询不同条件（例如分辨率不同）下使用不同的外部样式，使得页面能够更美观。

3. 动态`REM`方案

&emsp;&emsp;`rem`指根元素（`html元素`）的字体大小.<br>
动态`REM`方案指在js中获取页面宽度，将页面宽度与`rem`进行关联。然后将`rem`和`px`进行关联，就能够比较方便的设置页面样式。<br>一般设置`1rem=0.1设备宽度/0.01设备宽度`。需要注意的是有些浏览器或者操作系统有最小像素设置，可能会让动态`REM`方案失效（例：Chrome浏览器能识别的最小像素为12px）。可以使用scss自动让px转化为rem。



4. 移动端事件的特殊性

- 操作方式（手指操作、传感器）

&emsp;&emsp;PC端使用鼠标操作，操作包含滑动、左击、右击、双击操作，操作相对来说单一，交互效果相对较少，
手机端使用手指操作，包含点击、滑动、双击、双指放大、双指缩小、五指收缩和3Dtouch按压力度，以及配合传感器完成摇一摇、陀悬仪感应灯操作方式。


