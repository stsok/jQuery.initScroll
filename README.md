jQuery.initScroll
===

ハッシュ付きURLにアクセスした時、対象の要素までスクロールさせるjQueryプラグイン

### Installation ###
```
npm install --save jquery.initscroll
```

### Usage ###
```html
<script src="jquery.min.js"></script>
<script src="jquery.initscroll.min.js"></script>
<script>
  $(function() {
    $('html,body').initScroll(options);
  });
</script>
```

### Options ###

- offset  
__Type__: number  
__Default__: 0  
本来のスクロール位置から移動させる

- offsetObject  
__Type__: jQuery Object  
__Default__: null  
指定したオブジェクトの位置と高さ分、本来のスクロール位置から移動させる

- duration  
__Type__: number  
__Default__: 600  
スクロール時間(ミリ秒)

- easing  
__Type__: string  
__Default__: 'swing'  
イージングの種類  
___※jQuery単体では「linear」と「swing」の2種類だけなので、それ以外を指定する場合は別途「jQuery Easing Plugin」等が必要___

### jQuery Support ###
- 3.0.0+
- 2.0.0+
- 1.8.0+

### Browser Support ###
- Google Chrome  
- Safari  
- Firefox  
- Edge  
- IE 9+

### License ###  
MIT