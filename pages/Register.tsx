import React, { useState } from 'react';
import { PageView, RegisterFormData } from '../types';

interface RegisterProps {
  onNavigate: (view: PageView) => void;
}

const Register: React.FC<RegisterProps> = ({ onNavigate }) => {
  // 复杂表单状态
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    interests: [],
    occupation: 'student',
    agreement: false
  });

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        if (name === 'agreement') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
             // 处理多选 checkbox (Interests)
             const val = value;
             setFormData(prev => {
                const newInterests = checked 
                    ? [...prev.interests, val]
                    : prev.interests.filter(i => i !== val);
                return { ...prev, interests: newInterests };
             });
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // AI 初始生成：校验逻辑
    if (formData.password !== formData.confirmPassword) {
      alert("两次输入的密码不一致！");
      return;
    }
    if (!formData.agreement) {
      alert("请先同意用户协议");
      return;
    }

    console.log("注册数据：", formData);
    alert("注册成功！即将跳转登录页面");
    onNavigate(PageView.LOGIN);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-classic-red">
        <h2 className="text-3xl font-bold text-center mb-8 text-ink-black">新用户注册</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. 文本输入 (Text) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">用户名</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-classic-red focus:border-classic-red"
              placeholder="请设置您的用户名"
            />
          </div>

          {/* 2. 密码输入 (Password) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-classic-red focus:border-classic-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-classic-red focus:border-classic-red"
              />
            </div>
          </div>

          {/* 3. 单选按钮 (Radio) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">性别</label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="text-classic-red focus:ring-classic-red"
                />
                <span className="ml-2">男</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="text-classic-red focus:ring-classic-red"
                />
                <span className="ml-2">女</span>
              </label>
            </div>
          </div>

          {/* 4. 下拉菜单 (Select) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">职业/身份</label>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-classic-red focus:border-classic-red bg-white"
            >
              <option value="student">在校学生</option>
              <option value="teacher">教师/学者</option>
              <option value="artist">艺术家/设计师</option>
              <option value="other">其他爱好者</option>
            </select>
          </div>

          {/* 5. 复选框 (Checkbox Group) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">感兴趣的内容 (多选)</label>
            <div className="flex flex-wrap gap-4">
              {['异兽图鉴', '神话传说', '地理考据', '文创周边'].map((interest) => (
                <label key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    name="interest"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                    className="text-classic-red rounded focus:ring-classic-red"
                  />
                  <span className="ml-2 text-sm">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 协议勾选 */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreement"
                name="agreement"
                type="checkbox"
                required
                checked={formData.agreement}
                onChange={handleChange}
                className="h-4 w-4 text-classic-red focus:ring-classic-red border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreement" className="font-medium text-gray-700">
                我已阅读并同意 <a href="#" className="text-classic-red hover:underline">《山海经典藏网用户协议》</a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-classic-red hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-classic-red transition-colors duration-200"
            >
              立即注册
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;