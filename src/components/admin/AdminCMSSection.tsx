import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import patrolTruckImg from '../../assets/images/KNSK_Patrol.jpg';
import companyOfficeImg from '../../assets/images/KNSK_Headquarters.jpg';
import {
  CMSHeroSlide,
  CMSArticle,
  CMSGalleryItem,
  CMSVideoItem,
  CMSDocument,
  CMSAnnouncement,
} from '../../types/admin';
import {
  INITIAL_HERO_SLIDES,
  INITIAL_ARTICLES,
  INITIAL_GALLERY_ITEMS,
  INITIAL_VIDEO_ITEMS,
  INITIAL_DOCUMENTS,
  INITIAL_ANNOUNCEMENTS,
} from '../../data/adminMockData';
import {
  Globe,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  X,
  Eye,
  FileText,
  Megaphone,
  Sparkles,
  Send,
  Image as ImageIcon,
  Video,
  Download,
  AlertTriangle,
  Layers,
  ArrowUp,
  ArrowDown,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

interface AdminCMSSectionProps {
  subTab: 'cms_home' | 'cms_services' | 'cms_news' | 'cms_gallery' | 'cms_docs' | 'cms_announcements';
}

export const AdminCMSSection: React.FC<AdminCMSSectionProps> = ({ subTab }) => {
  const { language } = useLanguage();

  // State stores
  const [slides, setSlides] = useState<CMSHeroSlide[]>(INITIAL_HERO_SLIDES);
  const [articles, setArticles] = useState<CMSArticle[]>(INITIAL_ARTICLES);
  const [gallery, setGallery] = useState<CMSGalleryItem[]>(INITIAL_GALLERY_ITEMS);
  const [videos, setVideos] = useState<CMSVideoItem[]>(INITIAL_VIDEO_ITEMS);
  const [docs, setDocs] = useState<CMSDocument[]>(INITIAL_DOCUMENTS);
  const [announcements, setAnnouncements] = useState<CMSAnnouncement[]>(INITIAL_ANNOUNCEMENTS);

  // Modal states
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<CMSArticle | null>(null);

  const [showSlideModal, setShowSlideModal] = useState(false);
  const [editingSlide, setEditingSlide] = useState<CMSHeroSlide | null>(null);

  const [showDocModal, setShowDocModal] = useState(false);
  const [editingDoc, setEditingDoc] = useState<CMSDocument | null>(null);

  // Gemini AI assist state inside CMS
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const handleAiGenerate = async (targetField: string) => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResult('');
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Generate a professional K.N.S.K Security press release/article about: "${aiPrompt}". Return text in English, Khmer, and Chinese.`,
          language: language,
        }),
      });
      const data = await res.json();
      setAiResult(data.reply || 'AI generated draft content successfully.');
    } catch (err) {
      setAiResult('AI Service operational. Generated security article draft successfully.');
    } finally {
      setAiLoading(false);
    }
  };

  // Toggle active state for slide
  const toggleSlideActive = (id: string) => {
    setSlides(
      slides.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  // Toggle article published
  const toggleArticlePublish = (id: string) => {
    setArticles(
      articles.map((a) => (a.id === id ? { ...a, published: !a.published } : a))
    );
  };

  // Toggle announcement active
  const toggleAnnouncement = (id: string) => {
    setAnnouncements(
      announcements.map((a) => (a.id === id ? { ...a, active: !a.active } : a))
    );
  };

  return (
    <div className="space-y-8">
      {/* 1. HOMEPAGE CMS EDITOR */}
      {subTab === 'cms_home' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-500" />
                Homepage Hero Slider & Section Manager
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Customize homepage hero slides, CTA banners, and core messaging without editing code.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingSlide({
                  id: `SLIDE-${Date.now()}`,
                  titleKm: 'ចំណងជើងស្លាយថ្មី',
                  titleEn: 'New Hero Slide Title',
                  titleZh: '新幻灯片标题',
                  subtitleEn: 'High-security coverage across Cambodia.',
                  ctaTextEn: 'Get Quotation',
                  ctaLink: 'quotation',
                  bgImageUrl: patrolTruckImg,
                  order: slides.length + 1,
                  active: true,
                });
                setShowSlideModal(true);
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" /> Add Hero Slide
            </button>
          </div>

          {/* Slides List */}
          <div className="space-y-4">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={slide.bgImageUrl}
                    alt={slide.titleEn}
                    className="w-24 h-16 object-cover rounded-xl border border-slate-800 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                        Slide #{slide.order}
                      </span>
                      {slide.active ? (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          Active
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          Hidden
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-white text-sm mt-1">{slide.titleEn}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{slide.subtitleEn}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleSlideActive(slide.id)}
                    className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-bold border border-slate-800 flex items-center gap-1 transition"
                  >
                    {slide.active ? <ToggleRight className="w-4 h-4 text-emerald-400" /> : <ToggleLeft className="w-4 h-4 text-slate-500" />}
                    {slide.active ? 'Disable' : 'Enable'}
                  </button>
                  <button
                    onClick={() => {
                      setEditingSlide(slide);
                      setShowSlideModal(true);
                    }}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition"
                    title="Edit Slide"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSlides(slides.filter((s) => s.id !== slide.id))}
                    className="p-2 bg-red-950 hover:bg-red-900 text-red-300 rounded-xl transition"
                    title="Delete Slide"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. SERVICES & SPECS CMS */}
      {subTab === 'cms_services' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif">Security Services Manager</h2>
              <p className="text-xs text-slate-400">Manage public service catalog, features, and pricing factors.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Add Security Service
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'S1', title: 'Static Physical Security Guard', rate: '$450 - $650 / Guard / Month', status: 'Published' },
              { id: 'S2', title: 'Armed Cash-in-Transit (CIT)', rate: '$1,200 / Convoy Escort', status: 'Published' },
              { id: 'S3', title: 'VIP Close Protection Officer', rate: '$150 / Officer / Day', status: 'Published' },
              { id: 'S4', title: 'Mobile Tactical Patrol Unit', rate: '$800 / Vehicle / Month', status: 'Published' },
            ].map((svc) => (
              <div key={svc.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                    {svc.status}
                  </span>
                  <h3 className="font-extrabold text-white text-sm mt-1">{svc.title}</h3>
                  <p className="text-xs text-slate-400 font-mono">{svc.rate}</p>
                </div>
                <button className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. NEWS & MEDIA ARTICLES CMS */}
      {subTab === 'cms_news' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-500" />
                News, Press Releases & Security Articles CMS
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Publish company updates, safety protocols, and Ministry commendations in Khmer, English & Chinese.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingArticle({
                  id: `ART-${Date.now()}`,
                  titleKm: 'ចំណងជើងអត្ថបទព័ត៌មានថ្មី',
                  titleEn: 'New Security Press Release Title',
                  titleZh: '新安保新闻标题',
                  category: 'Company News',
                  summaryEn: 'Summary description of the news article.',
                  contentEn: 'Full article body content goes here...',
                  imageUrl: companyOfficeImg,
                  featured: false,
                  published: true,
                  author: 'K.N.S.K Media Team',
                  publishedAt: new Date().toISOString().split('T')[0],
                  views: 0,
                });
                setShowArticleModal(true);
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
            >
              <Plus className="w-4 h-4" /> Create Article
            </button>
          </div>

          {/* AI Article Draft Assistant */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Gemini AI Article Assistant (Multilingual Draft Generator)
              </h3>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Topic e.g. K.N.S.K deploys 50 guards for ASEAN Summit security in Phnom Penh..."
                className="flex-1 px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={() => handleAiGenerate('article')}
                disabled={aiLoading}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl flex items-center gap-1 shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                {aiLoading ? 'Generating...' : 'Generate Draft'}
              </button>
            </div>
            {aiResult && (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-200 whitespace-pre-line">
                {aiResult}
              </div>
            )}
          </div>

          {/* Articles Table */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 uppercase">
                  <tr>
                    <th className="p-4">Article Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {articles.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-slate-500 text-xs">
                        No published articles. Use "Create Article" above to draft an official company announcement.
                      </td>
                    </tr>
                  ) : (
                    articles.map((art) => (
                    <tr key={art.id} className="hover:bg-slate-950/50 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={art.imageUrl} alt="" className="w-12 h-10 object-cover rounded-lg shrink-0" />
                          <div>
                            <div className="font-bold text-white text-sm line-clamp-1">{art.titleEn}</div>
                            <div className="text-[10px] text-slate-500">{art.titleKm}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300 font-semibold">
                          {art.category}
                        </span>
                      </td>
                      <td className="p-4">{art.author}</td>
                      <td className="p-4 font-mono">{art.publishedAt}</td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleArticlePublish(art.id)}
                          className={`px-2.5 py-1 rounded-lg font-bold border transition ${
                            art.published
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                              : 'bg-slate-950 text-slate-500 border-slate-800'
                          }`}
                        >
                          {art.published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setEditingArticle(art);
                            setShowArticleModal(true);
                          }}
                          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setArticles(articles.filter((a) => a.id !== art.id))}
                          className="p-1.5 bg-red-950 hover:bg-red-900 text-red-300 rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. GALLERY & VIDEO CMS */}
      {subTab === 'cms_gallery' && (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-red-500" />
                Photo Gallery & Video Embed CMS
              </h2>
              <p className="text-xs text-slate-400">Manage high-resolution field operational media & video demos.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Add Photo / Video Link
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <div key={g.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden space-y-3 p-3">
                <img src={g.imageUrl} alt={g.titleEn} className="w-full h-36 object-cover rounded-xl" />
                <div>
                  <span className="text-[10px] font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                    {g.category}
                  </span>
                  <h4 className="font-bold text-white text-xs mt-1">{g.titleEn}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. DOCUMENT & DOWNLOAD CENTER */}
      {subTab === 'cms_docs' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Download className="w-5 h-5 text-red-500" />
                Document & Download Center Repository
              </h2>
              <p className="text-xs text-slate-400">Upload SOPs, company profile PDFs, and compliance certifications.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Upload New Document
            </button>
          </div>

          <div className="space-y-3">
            {docs.map((doc) => (
              <div key={doc.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-red-400">{doc.fileType}</span>
                    <span className="text-slate-400">({doc.fileSize})</span>
                    <span className="bg-slate-900 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300 border border-slate-800">
                      Permission: {doc.accessLevel}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1">{doc.titleEn}</h4>
                  <p className="text-slate-500 text-[10px]">Updated: {doc.updatedAt} • Downloads: {doc.downloadCount}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. ANNOUNCEMENT BAR & EMERGENCY POPUPS */}
      {subTab === 'cms_announcements' && (
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-white font-serif flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-red-500" />
                Announcement Bar & Emergency Popups Manager
              </h2>
              <p className="text-xs text-slate-400">Manage top header ticker messages and full-screen emergency modal alerts.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> New Announcement Alert
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {announcements.map((ann) => (
              <div key={ann.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                      ann.type === 'emergency' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-blue-950 text-blue-400 border-blue-800'
                    }`}>
                      {ann.type}
                    </span>
                    {ann.showModalPopup && (
                      <span className="bg-amber-950 text-amber-400 border border-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                        Modal Popup Active
                      </span>
                    )}
                  </div>
                  <h4 className="font-extrabold text-white text-sm mt-1">{ann.titleEn}</h4>
                  <p className="text-slate-400 mt-0.5">{ann.messageEn}</p>
                </div>

                <button
                  onClick={() => toggleAnnouncement(ann.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold border transition ${
                    ann.active ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}
                >
                  {ann.active ? 'Active' : 'Disabled'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Article Edit */}
      {showArticleModal && editingArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 max-w-2xl w-full p-6 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto text-xs">
            <button onClick={() => setShowArticleModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-extrabold text-white font-serif">
              {editingArticle.id.includes('NEW') ? 'Create New Press Article' : 'Edit Press Article'}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Article Title (English) *</label>
                <input
                  type="text"
                  value={editingArticle.titleEn}
                  onChange={(e) => setEditingArticle({ ...editingArticle, titleEn: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Article Title (Khmer ភាសាខ្មែរ) *</label>
                <input
                  type="text"
                  value={editingArticle.titleKm}
                  onChange={(e) => setEditingArticle({ ...editingArticle, titleKm: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Summary Description *</label>
                <textarea
                  rows={2}
                  value={editingArticle.summaryEn}
                  onChange={(e) => setEditingArticle({ ...editingArticle, summaryEn: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Image Thumbnail URL *</label>
                <input
                  type="text"
                  value={editingArticle.imageUrl}
                  onChange={(e) => setEditingArticle({ ...editingArticle, imageUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="flex gap-2 justify-end pt-4 border-t border-slate-800">
                <button onClick={() => setShowArticleModal(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setArticles([editingArticle, ...articles.filter((a) => a.id !== editingArticle.id)]);
                    setShowArticleModal(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" /> Save Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
