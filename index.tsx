import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // 引入外部 CSS 文件

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 全局捕获未处理的 Promise，防止白屏
window.addEventListener('unhandledrejection', event => {
  console.warn('捕获未处理 Promise 错误:', event.reason)
  event.preventDefault()
})

// 异步加载腾讯 SDK
async function loadTencentTrace() {
  try {
    const trace = await import('./pkg-v4DkfTZf.js') // 根据实际路径调整
    if (trace?.init) {
      trace.init({ product_id: '0WEB0698R9XOG65A' })
    }
  } catch (err) {
    console.warn('腾讯统计 SDK 加载失败，不影响页面渲染:', err)
  }
}

// 渲染 React 应用
loadTencentTrace().finally(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
