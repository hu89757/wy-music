import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// 基准大小
const baseSize: number = 16;
// 设置 rem 函数
function setRem(): void {
  // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改。
  const scale: number = document.documentElement.clientWidth / 375;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * scale + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
