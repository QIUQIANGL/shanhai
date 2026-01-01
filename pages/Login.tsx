import React, { useState } from 'react';
import { PageView } from '../types';

interface LoginProps {
  onNavigate: (view: PageView) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  // 表单状态管理 (React State)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 表单提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止默认提交
    setError('');

    // AI 初始生成：基础校验逻辑
    if (!username.trim()) {
      setError('请输入用户名');
      return;
    }
    if (!password) {
      setError('请输入密码');
      return;
    }

    // 模拟登录成功
    alert(`登录成功！欢迎回来，${username}`);
    onNavigate(PageView.HOME);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] bg-cover bg-center bg-no-repeat bg-fixed relative">
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"></div>
      
      <div className="max-w-md w-full space-y-8 bg-paper-bg p-10 rounded-xl shadow-2xl relative z-10 border-2 border-stone-300">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-ink-black">
            会员登录
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            探寻山海奇境，记录阅读足迹
          </p>
        </div>

        {/* 登录表单 */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                用户名 / 邮箱
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-classic-red focus:border-classic-red focus:z-10 sm:text-sm"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                密码
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-classic-red focus:border-classic-red focus:z-10 sm:text-sm"
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-classic-red focus:ring-classic-red border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                记住我
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-classic-red hover:text-red-900">
                忘记密码?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-classic-red hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-classic-red transition duration-300"
            >
              登录
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
           <span className="text-sm text-gray-600">还没有账号？</span>
           <button 
             onClick={() => onNavigate(PageView.REGISTER)}
             className="ml-2 text-sm font-bold text-classic-red hover:underline"
           >
             立即注册
           </button>
        </div>
      </div>
    </div>
  );
};

export default Login;