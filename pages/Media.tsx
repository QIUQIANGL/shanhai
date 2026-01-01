import React from 'react';

const Media: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold text-ink-black mb-4">山海·影音</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          聆听上古之音，观看神兽影像。通过多媒体形式感受《山海经》的独特魅力。
        </p>
      </header>

      {/* Audio Section */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-classic-red mb-8 border-l-4 border-classic-red pl-4">
          听·古籍
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            {/* CSS3 动画演示: 旋转的唱片 */}
            <div className="w-64 h-64 rounded-full bg-stone-900 border-8 border-gray-800 shadow-2xl flex items-center justify-center animate-spin-slow relative">
              <div className="w-24 h-24 rounded-full bg-classic-red border-4 border-white"></div>
              <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50" style={{ transform: 'scale(0.8)' }}></div>
              <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50" style={{ transform: 'scale(0.6)' }}></div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold">《山海经》有声剧：第一卷 南山经</h4>
            <p className="text-gray-600">
              专业配音团队演绎，带你身临其境感受招摇之山的奇异生物。
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-classic-red h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>04:30</span>
              <span>10:00</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-classic-red text-white px-6 py-2 rounded-full hover:bg-red-900 transition">
                播放 / 暂停
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition">
                下载音频
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section>
        <h3 className="text-2xl font-bold text-classic-red mb-8 border-l-4 border-classic-red pl-4">
          观·影像
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[1, 2, 3].map((i) => (
             <div key={i} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
               <img 
                 src={`https://picsum.photos/seed/video${i}/600/400`} 
                 alt={`视频封面 ${i}`}
                 className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
               />
               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-classic-red pl-1">
                   ▶
                 </div>
               </div>
               <div className="bg-white p-4">
                 <h5 className="font-bold text-gray-800">纪录片：寻访山海图 (第{i}集)</h5>
                 <p className="text-xs text-gray-500 mt-2">2024-05-20 | 播放量: 1.2w</p>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Media;