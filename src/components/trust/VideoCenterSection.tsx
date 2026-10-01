import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { OFFICIAL_VIDEOS, VideoItem } from '../../data/trustMediaData';
import { Play, Video, X, Clock, Sparkles } from 'lucide-react';

export const VideoCenterSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const hasRealVideos = OFFICIAL_VIDEOS.some((v) => Boolean(v.videoUrl));
  if (!hasRealVideos) {
    return null;
  }

  const getT = (en: string, km: string, zh: string) => {
    if (language === 'km') return km;
    if (language === 'zh') return zh;
    return en;
  };

  return (
    <section className="py-16 bg-slate-950 text-white border-b border-slate-900" id="video-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4 text-indigo-400" />
            {getT('K.N.S.K Video Center', 'មជ្ឈមណ្ឌលវីដេអូ K.N.S.K', 'K.N.S.K 官方视频影像中心')}
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-white tracking-tight">
            {getT(
              'Official Corporate Videos & Field Drill Demonstrations',
              'វីដេអូបង្ហាញពីសកម្មភាពក្រុមហ៊ុន និងការហ្វឹកហាត់ជាក់ស្តែង',
              '官方企业宣传片与警训基地实操精选'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {getT(
              'Watch how K.N.S.K officers undergo physical drill academy training, execute 24/7 radio command dispatching, and operate 4x4 mobile patrol fleets.',
              'ទស្សនាពីការហ្វឹកហាត់ក្បួនវិន័យ ការបញ្ជាតាមវិទ្យុទាក់ទង និងសកម្មភាពល្បាតយប់។',
              '观看队员特训过程、24小时无线电调度指挥及4x4巡逻车队夜查实录。'
            )}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICIAL_VIDEOS.map((video) => {
            const title = getT(video.title.en, video.title.km, video.title.zh);
            const desc = getT(video.description.en, video.description.km, video.description.zh);

            return (
              <div
                key={video.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Thumbnail Container with Play Button Overlay */}
                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="relative aspect-16/9 bg-slate-950 overflow-hidden cursor-pointer group-hover:opacity-95 transition"
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition border-2 border-white/20">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 text-white text-[10px] font-mono font-bold rounded flex items-center gap-1 border border-slate-700">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      {video.duration}
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-indigo-950/90 text-indigo-300 border border-indigo-800 text-[10px] font-bold uppercase rounded">
                      {video.category}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-extrabold text-base text-white font-serif group-hover:text-indigo-300 transition">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{video.publishedDate}</span>
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
                  >
                    Watch Video <Play className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl space-y-4">
              
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800 text-slate-300 hover:text-white rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/9 bg-black">
                {selectedVideo.videoUrl ? (
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={getT(selectedVideo.title.en, selectedVideo.title.km, selectedVideo.title.zh)}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <Sparkles className="w-12 h-12 text-indigo-400 animate-pulse" />
                    <p className="text-sm font-bold text-white">
                      {getT(selectedVideo.title.en, selectedVideo.title.km, selectedVideo.title.zh)}
                    </p>
                    <p className="text-xs text-slate-400 max-w-md">
                      {getT(selectedVideo.description.en, selectedVideo.description.km, selectedVideo.description.zh)}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 text-white space-y-2 bg-slate-900">
                <h3 className="text-base font-bold font-serif">
                  {getT(selectedVideo.title.en, selectedVideo.title.km, selectedVideo.title.zh)}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {getT(selectedVideo.description.en, selectedVideo.description.km, selectedVideo.description.zh)}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
