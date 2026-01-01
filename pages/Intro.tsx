import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 语义化标签: Header for Article */}
      <header className="mb-10 text-center border-b border-gray-300 pb-8">
        <h2 className="text-4xl font-bold text-ink-black mb-4">《山海经》全貌</h2>
        <span className="text-sm text-gray-500">发布日期：2024-05-20 | 分类：古籍介绍</span>
      </header>

      {/* 语义化标签: Article Content */}
      <article className="prose prose-stone lg:prose-lg mx-auto text-justify">
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-classic-red mb-4">一、成书背景</h3>
          <p className="mb-4 leading-loose">
            《山海经》是中国志怪古籍，大体是战国中后期到汉代初中期的楚国或巴蜀人所作，也是一部荒诞不经的奇书。
            该书作者不详，古人认为该书是“战国好奇之士取《穆王传》而杂乱之”。
          </p>
          <div className="bg-orange-50 p-6 border-l-4 border-classic-red italic text-gray-700 my-6 rounded-r-lg">
            “这是古之巫书，是古人对未知世界的探索与想象的结晶。” —— 鲁迅
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold text-classic-red mb-4">二、内容架构</h3>
          <p className="mb-4 leading-loose">
            全书现存18篇，其余篇章内容早佚。原共22篇约32650字。共藏山经5篇、海外经4篇、海内经4篇、大荒经4篇。《汉书·艺文志》作13篇，未把大荒经和海内经计算在内。
            山海经内容主要是民间传说中的地理知识，包括山川、道里、民族、物产、药物、祭祀、巫医等。保存了包括夸父逐日、女娲补天、精卫填海、大禹治水等不少脍炙人口的远古神话传说和寓言故事。
          </p>
          <img 
            src="https://picsum.photos/seed/map/800/400" 
            alt="山海经地理想象图" 
            className="w-full h-auto rounded shadow-md my-4" 
          />
          <p className="text-sm text-center text-gray-500">图：后世绘制的山海经地理想象图</p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-classic-red mb-4">三、学术价值</h3>
          <ul className="list-disc list-inside space-y-2 bg-white p-6 rounded-lg shadow-inner">
            <li><strong className="text-ink-black">地理学价值：</strong> 记载了大量的山川河流，是研究上古地理的重要资料。</li>
            <li><strong className="text-ink-black">神话学价值：</strong> 保存了中国最古老的神话体系。</li>
            <li><strong className="text-ink-black">民俗学价值：</strong> 记录了古代的祭祀、巫术和民俗风情。</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Intro;