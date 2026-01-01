import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-ink-black mb-12">关于我们</h2>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-stone-800 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">项目背景</h3>
            <p className="leading-relaxed text-stone-300 mb-6">
              本项目为《Web技术基础》期末课程设计作品。旨在利用 HTML5、CSS3 和 JavaScript 技术，
              构建一个具有中国传统文化特色的数字化展示平台。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">开发团队</h4>
            <ul className="text-stone-400 space-y-1">
              <li>设计与开发：张三</li>
              <li>资料整理：李四</li>
              <li>指导教师：王教授</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/2 p-10 bg-[url('https://picsum.photos/seed/paper/800/800')] bg-cover">
          <h3 className="text-2xl font-bold text-classic-red mb-6">联系方式</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">您的姓名</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">留言内容</label>
              <textarea rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <button className="w-full bg-classic-red text-white py-2 rounded shadow hover:bg-red-900 transition">
              发送留言
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;