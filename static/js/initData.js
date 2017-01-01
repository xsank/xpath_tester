var defaultHtml = `<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Items 1 to 20 -- Example Page 1</title>
</head>
<body>
<div align="center">1, <a href="http://econpy.pythonanywhere.com/ex/002.html">[<font color="green">2</font>]</a>, <a href="http://econpy.pythonanywhere.com/ex/003.html">[<font color="green">3</font>]</a>, <a href="http://econpy.pythonanywhere.com/ex/004.html">[<font color="green">4</font>]</a>, <a href="http://econpy.pythonanywhere.com/ex/005.html">[<font color="green">5</font>]</a></div>
<div title="buyer-info">
  <div title="buyer-name">Carson Busses</div>
  <span class="item-price">$29.95</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Earl E. Byrd</div>
  <span class="item-price">$8.37</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Patty Cakes</div>
  <span class="item-price">$15.26</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Derri Anne Connecticut</div>
  <span class="item-price">$19.25</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Moe Dess</div>
  <span class="item-price">$19.25</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Leda Doggslife</div>
  <span class="item-price">$13.99</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Dan Druff</div>
  <span class="item-price">$31.57</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Al Fresco</div>
  <span class="item-price">$8.49</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Ido Hoe</div>
  <span class="item-price">$14.47</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Howie Kisses</div>
  <span class="item-price">$15.86</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Len Lease</div>
  <span class="item-price">$11.11</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Phil Meup</div>
  <span class="item-price">$15.98</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Ira Pent</div>
  <span class="item-price">$16.27</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Ben D. Rules</div>
  <span class="item-price">$7.50</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Ave Sectomy</div>
  <span class="item-price">$50.85</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Gary Shattire</div>
  <span class="item-price">$14.26</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Bobbi Soks</div>
  <span class="item-price">$5.68</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Sheila Takya</div>
  <span class="item-price">$15.00</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Rose Tattoo</div>
  <span class="item-price">$114.07</span><br>
</div>
<div title="buyer-info">
  <div title="buyer-name">Moe Tell</div>
  <span class="item-price">$10.09</span><br>
</div>
</style>
</html>`;
var defaultXpath = '//span[@class="item-price"]/text()';

function initData() {
    document.getElementById("rawHtml").value = defaultHtml;
    document.getElementById("xpathString").value = defaultXpath;
}

window.onload = initData;