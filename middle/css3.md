用过CSS3，用的多的有圆角、阴影、gradients(渐变) 、transitions(过渡) 与 animations(动画) 。

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 圆角矩形和阴影</title>
    <style>
        .rect {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            /*可以设置4个角的圆角幅度（上右下左）*/
            border: 1px solid #000;
        }
        .rect{
            box-shadow:inset 2px 2px 2px 1px yellow;
            /*投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色*/
        }
    </style>
</head>

<body>
    <div class="rect">
        Hello
    </div>
</body>
</html>
```


