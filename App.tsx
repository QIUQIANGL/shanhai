import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Culture from './pages/Culture';
import Media from './pages/Media';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { PageView } from './types';

// AI Note: 这是一个单页应用（SPA）的入口，通过 State 控制页面切换
// 对应原要求中的页面跳转功能

const App: React.FC = () => {
  // 状态管理：当前显示的视图（替代多页面 HTML 文件的跳转）
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  // 视图渲染工厂函数
  const renderView = () => {
    switch (currentView) {
      case PageView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case PageView.INTRO:
        return <Intro />;
      case PageView.CULTURE:
        return <Culture />;
      case PageView.MEDIA:
        return <Media />;
      case PageView.ABOUT:
        return <About />;
      case PageView.LOGIN:
        return <Login onNavigate={setCurrentView} />;
      case PageView.REGISTER:
        return <Register onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;