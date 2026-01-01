import React from 'react';
import { PageView, BeastCard } from '../types';

// 模拟数据：异兽卡片
const FEATURED_BEASTS: BeastCard[] = [
  {
    id: 1,
    name: '九尾狐',
    location: '青丘之山',
    description: '其状如狐而九尾，其音如婴儿，能食人，食者不蛊。',
    imageUrl: 'https://picsum.photos/seed/fox/400/300'
  },
  {
    id: 2,
    name: '精卫',
    location: '发鸠之山',
    description: '女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。',
    imageUrl: 'https://picsum.photos/seed/bird/400/300'
  },
  {
    id: 3,
    name: '刑天',
    location: '常羊之山',
    description: '刑天与帝至此争神，帝断其首，葬之常羊之山，乃以乳为目，以脐为口，操干戚以舞。',
    imageUrl: 'https://picsum.photos/seed/warrior/400/300'
  }
];

interface HomeProps {
  onNavigate: (view: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-stone-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://picsum.photos/seed/mountain/1920/1080" alt="背景山水" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest text-shadow-lg">
            山海奇境
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            探寻上古神话的地理图志，领略华夏文明的想象源头
          </p>
          <button 
            onClick={() => onNavigate(PageView.INTRO)}
            className="px-8 py-3 bg-classic-red hover:bg-red-900 text-white rounded-full font-bold transition duration-300 shadow-lg border-2 border-transparent hover:border-yellow-500"
          >
            开始探索
          </button>
        </div>
      </section>

      {/* 语义化标签: Article (介绍部分) */}
      <article className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-classic-red mb-4 border-b-2 border-stone-300 inline-block pb-2">
            书中瑰宝
          </h3>
          <p className="text-gray-600">
            《山海经》全书十八卷，其中“山经”五卷，“海经”八卷，“大荒经”四卷，“海内经”一卷。
          </p>
        </div>

        {/* 异兽卡片展示区 - CSS3 Grid 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_BEASTS.map((beast) => (
            <div 
              key={beast.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-stone-200 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={beast.imageUrl} 
                  alt={beast.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-ink-black">{beast.name}</h4>
                  <span className="text-xs bg-stone-200 text-stone-600 px-2 py-1 rounded">
                    {beast.location}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {beast.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* 语义化标签: Section (多媒体/社会活动) */}
      <section className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/scroll/600/400" 
              alt="古籍书影" 
              className="rounded-lg shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-ink-black">
              社会活动：非遗进校园
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              为了让更多年轻人了解《山海经》，我们定期举办“神兽绘卷”展览与学术讲座。
              通过现代插画与传统文本的结合，让古老的文字重新焕发生机。
            </p>
            <button 
              onClick={() => onNavigate(PageView.CULTURE)}
              className="text-classic-red font-bold hover:underline decoration-2 underline-offset-4"
            >
              了解更多文化活动 &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;