import React from 'react';

const Culture: React.FC = () => {
  const impacts = [
    { title: '文学创作', desc: '《西游记》、《封神演义》等明清小说深受其影响。', icon: '📖' },
    { title: '影视改编', desc: '现代电影《捉妖记》、《大鱼海棠》取材于此。', icon: '🎬' },
    { title: '游戏设计', desc: '诸多仙侠类游戏以山海经异兽为原型设计BOSS。', icon: '🎮' },
    { title: '学术研究', desc: '成为历史学、人类学研究上古社会的重要窗口。', icon: '🎓' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-ink-black mb-12">
        文化影响与传承
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((item, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-jade-green"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-ink-black">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
           <img src="https://picsum.photos/seed/art/400/500" alt="现代艺术装置" className="w-full h-full object-cover rounded" />
        </div>
        <div className="md:w-2/3">
           <h3 className="text-2xl font-bold mb-4 text-classic-red">现代艺术中的《山海经》</h3>
           <p className="leading-relaxed text-gray-700 mb-4">
             近年来，越来越多的艺术家开始从《山海经》中汲取灵感。无论是装置艺术、数字绘画还是舞台剧，古老的神兽形象正在以全新的面貌重返大众视野。
             这种“新国潮”的兴起，证明了传统文化具有穿越时空的生命力。
           </p>
           <button className="px-6 py-2 border border-classic-red text-classic-red rounded hover:bg-classic-red hover:text-white transition">
             查看展览排期
           </button>
        </div>
      </div>
    </div>
  );
};

export default Culture;