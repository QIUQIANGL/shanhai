import React, { useState } from 'react';
import { NavItem, PageView } from '../types';
import { Menu, X, BookOpen } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

// 导航栏数据配置 (扩展至 7 个栏目)
const NAV_ITEMS: NavItem[] = [
  { label: '首页', view: PageView.HOME },
  { label: '山海概览', view: PageView.INTRO },
  { label: '文化溯源', view: PageView.CULTURE },
  { label: '影音资料', view: PageView.MEDIA }, // New
  { label: '关于我们', view: PageView.ABOUT }, // New
  { label: '会员登录', view: PageView.LOGIN },
  { label: '账号注册', view: PageView.REGISTER },
];

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  // 移动端菜单开关状态
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 导航点击处理
  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false); // 点击后关闭移动端菜单
  };

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* 语义化标签: Header */}
      <header className="bg-white shadow-md border-b-4 border-classic-red sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo区域 */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => onNavigate(PageView.HOME)}
            >
              <BookOpen className="h-8 w-8 text-classic-red mr-2" />
              <h1 className="text-2xl font-bold tracking-widest text-ink-black">
                山海经<span className="text-classic-red">·</span>典藏
              </h1>
            </div>

            {/* 桌面端导航 nav + ul + li + a */}
            <nav className="hidden md:flex space-x-4">
              <ul className="flex space-x-2 lg:space-x-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.view}>
                    <button
                      onClick={() => handleNavClick(item.view)}
                      className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-300 ${
                        currentView === item.view
                          ? 'text-classic-red bg-red-50'
                          : 'text-gray-600 hover:text-classic-red hover:bg-stone-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-classic-red focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-paper-bg border-t border-gray-200">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => handleNavClick(item.view)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      currentView === item.view
                        ? 'text-classic-red bg-red-50'
                        : 'text-gray-600 hover:text-classic-red hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* 语义化标签: Main */}
      <main className="flex-grow bg-paper-bg">
        {children}
      </main>

      {/* 语义化标签: Footer */}
      <footer className="bg-ink-black text-stone-300 py-10 border-t-8 border-classic-red">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <section>
            <h3 className="text-xl font-bold mb-4 text-white">联系我们</h3>
            <p>地址：中国·Web技术基础课程设计组</p>
            <p>邮箱：contact@shanhaijing.edu</p>
            <p>电话：010-88888888</p>
          </section>
          <section>
            <h3 className="text-xl font-bold mb-4 text-white">友情链接</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-classic-red transition">中国国家图书馆</a></li>
              <li><a href="#" className="hover:text-classic-red transition">非物质文化遗产网</a></li>
              <li><a href="#" className="hover:text-classic-red transition">中华古籍资源库</a></li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-bold mb-4 text-white">关于本站</h3>
            <p className="text-sm leading-relaxed">
              本站旨在通过数字化手段，重现《山海经》中的神话世界，弘扬中国传统文化。
              <br/>
              © 2024 Web技术课程设计 版权所有
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Layout;