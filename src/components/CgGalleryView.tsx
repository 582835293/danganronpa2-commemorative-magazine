import React, { useState } from 'react';
import { Maximize2, BookOpen, X } from 'lucide-react';
import { padPageNumber, resolveAssetUrl } from '../utils/magazineLogic.ts';

export interface OfficialCgPlate {
  id: string;
  accessionNo: string;
  title: string;
  category: 'key_visual' | 'island' | 'trial';
  src: string;
  chapter: string;
  linkedPage: number;
  commentary: string;
}

export const OFFICIAL_CG_PLATES: OfficialCgPlate[] = [
  {
    id: 'cg_header',
    accessionNo: 'CG-77B-001',
    title: '《超级弹丸论破2：再见绝望学园》官方主视觉图',
    category: 'key_visual',
    src: '/assets/cg/header.jpg',
    chapter: '全章节主视觉',
    linkedPage: 1,
    commentary: '日向创、狛枝凪斗、七海千秋与第77期生集结于盛夏南国海岸，小松崎类执笔的经典宣传原画。'
  },
  {
    id: 'cg_hero',
    accessionNo: 'CG-77B-002',
    title: '贾巴沃克岛盛夏碧海与黑白熊全景画幅',
    category: 'key_visual',
    src: '/assets/cg/library_hero.jpg',
    chapter: '卷首跨页视觉',
    linkedPage: 2,
    commentary: '展现“Psycho-Tropical（迷幻热带）”高饱和度蔚蓝天空与绝望阴影对比的宽银幕官方原图。'
  },
  {
    id: 'cg_01',
    accessionNo: 'CG-77B-003',
    title: '序章：贾巴沃克岛的初次邂逅与自我介绍',
    category: 'island',
    src: '/assets/cg/cg_01.jpg',
    chapter: '序章 · 心动的修学旅行',
    linkedPage: 4,
    commentary: '日向创在海岛与超高校级的同学们初次交谈的实机画面，保留了标志性的2.5D立体场景纵深。'
  },
  {
    id: 'cg_02',
    accessionNo: 'CG-77B-004',
    title: '七海千秋泳装回眸 · 海之家泳池畔的夏日',
    category: 'island',
    src: '/assets/cg/cg_02.jpg',
    chapter: '第2章 · 海与罚，罪与椰子',
    linkedPage: 16,
    commentary: '全作人气最高的官方事件CG之一，记录了七海千秋在沙滩海之家难得展露的少女微笑。'
  },
  {
    id: 'cg_03',
    accessionNo: 'CG-77B-005',
    title: '日常篇探索：2.5D立体展开的热带旅馆与教室',
    category: 'island',
    src: '/assets/cg/cg_03.jpg',
    chapter: '第1章 · 绝望的起航',
    linkedPage: 7,
    commentary: '推开房门瞬间如立体绘本般弹起的家具与人物剪影，展现了二代独特的空间美术风格。'
  },
  {
    id: 'cg_04',
    accessionNo: 'CG-77B-006',
    title: '旧馆与海岛设施：搜查阶段的线索勘验',
    category: 'island',
    src: '/assets/cg/cg_04.jpg',
    chapter: '第1章 · 搜查（非日常篇）',
    linkedPage: 31,
    commentary: '当命案发生后，原本明媚的度假设施转入紧绷的搜查模式，每一个角落都潜藏着言弹线索。'
  },
  {
    id: 'cg_05',
    accessionNo: 'CG-77B-007',
    title: '学级裁判开庭：不间断讨论（Nonstop Debate）交锋',
    category: 'trial',
    src: '/assets/cg/cg_05.jpg',
    chapter: '学级裁判核心实机',
    linkedPage: 32,
    commentary: '16座木制席位环绕的地下审判庭，左侧左轮弹巢实时显示当前装填的言弹（Truth Bullet）。'
  },
  {
    id: 'cg_06',
    accessionNo: 'CG-77B-008',
    title: '第二岛屿与沙滩海之家搜查现场',
    category: 'island',
    src: '/assets/cg/cg_06.jpg',
    chapter: '第2章 · 海与罚，罪与椰子',
    linkedPage: 33,
    commentary: '围绕《黄昏症候群杀人事件》街机与沙滩海之家展开的连环因果调查。'
  },
  {
    id: 'cg_07',
    accessionNo: 'CG-77B-009',
    title: '反论 Showdown：言刃出鞘的法庭白刃战',
    category: 'trial',
    src: '/assets/cg/cg_07.jpg',
    chapter: '学级裁判 · 反论对决',
    linkedPage: 44,
    commentary: '二代全新引入的“反论 Showdown”系统，将同伴激烈的反扑化作可挥刀斩断的立体文字幕墙。'
  },
  {
    id: 'cg_08',
    accessionNo: 'CG-77B-010',
    title: '第三岛屿霓虹街区与学级裁判激辩',
    category: 'trial',
    src: '/assets/cg/cg_08.jpg',
    chapter: '第3章 · 海风吹拂的绝望病',
    linkedPage: 35,
    commentary: '在绝望病阴云笼罩的第三章，围绕医院远程监控与音乐厅密室展开的高密度推理。'
  },
  {
    id: 'cg_09',
    accessionNo: 'CG-77B-011',
    title: '恐慌讨论（P.T.A.）与角色特写威压演出',
    category: 'trial',
    src: '/assets/cg/cg_09.jpg',
    chapter: '学级裁判 · 终局审讯',
    linkedPage: 45,
    commentary: '当嫌疑人防线崩溃时触发的高速节奏审判，配合震撼的角色面部特写与弹幕护盾。'
  },
  {
    id: 'cg_10',
    accessionNo: 'CG-77B-012',
    title: '第四岛屿惊奇屋：草莓屋与葡萄屋之谜',
    category: 'island',
    src: '/assets/cg/cg_10.jpg',
    chapter: '第4章 · 究极机械会梦到发条装置吗',
    linkedPage: 37,
    commentary: '被困在鲜艳诡异的惊奇屋双子塔内，众人必须解开八角馆与旋转电梯的立体建筑诡计。'
  },
  {
    id: 'cg_11',
    accessionNo: 'CG-77B-013',
    title: '魔法少女奇迹★黑白美与特写剧场',
    category: 'key_visual',
    src: '/assets/cg/cg_11.jpg',
    chapter: '特典模式 & 第3-4章',
    linkedPage: 46,
    commentary: '黑白美孤身迎战黑白熊猛兽的英姿，以及主线通关后解锁的附加小游戏画面。'
  },
  {
    id: 'cg_12',
    accessionNo: 'CG-77B-014',
    title: '第五岛屿军事工业区与旧仓库审判前夕',
    category: 'island',
    src: '/assets/cg/cg_12.jpg',
    chapter: '第5章 · 对着绝望微笑以希望之名',
    linkedPage: 39,
    commentary: '狛枝凪斗以炸弹威胁全岛、并在旧仓库布下“超高校级幸运”终极阳谋的转折篇章。'
  },
  {
    id: 'cg_13',
    accessionNo: 'CG-77B-015',
    title: '终局学级裁判：新世界程序崩坏与毕业抉择',
    category: 'trial',
    src: '/assets/cg/cg_13.jpg',
    chapter: '第6章 · 这就是终幕！再见绝望学园',
    linkedPage: 40,
    commentary: '直面全员皆为“超高校级的绝望”的残酷真相，日向创与七海千秋迎来最后的告别与觉醒。'
  }
];

interface CgGalleryViewProps {
  onJumpToPage: (pageNumber: number) => void;
  onInspectImage: (src: string, caption: string) => void;
}

export const CgGalleryView: React.FC<CgGalleryViewProps> = ({
  onJumpToPage,
  onInspectImage
}) => {
  const [filter, setFilter] = useState<'all' | 'key_visual' | 'island' | 'trial'>('all');

  const items =
    filter === 'all'
      ? OFFICIAL_CG_PLATES
      : OFFICIAL_CG_PLATES.filter((c) => c.category === filter);

  return (
    <section
      aria-label="官方实机CG与原画典藏馆"
      className="mx-auto max-w-[1380px] border border-white/15 bg-[#16141C] p-6 text-stone-100 shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
        <div>
          <span className="font-editorial-mono text-xs font-bold tracking-widest text-[#00F0FF]">
            OFFICIAL CG ARCHIVE · 官方实机CG与原画典藏馆
          </span>
          <h2 className="mt-1 font-editorial-serif text-xl sm:text-2xl font-bold text-white">
            《超级弹丸论破2》15幅高清实机CG与周刊排版索引
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="按CG类别筛选">
          {[
            { id: 'all', label: '全部典藏 (15)' },
            { id: 'key_visual', label: '主视觉 & 特典 (3)' },
            { id: 'island', label: '群岛探索 & 现场 (6)' },
            { id: 'trial', label: '学级裁判实机 (6)' }
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setFilter(t.id as typeof filter)}
              className={`px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === t.id
                  ? 'bg-[#FF007F] text-white'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((cg) => (
          <article
            key={cg.id}
            className="flex flex-col justify-between border border-white/15 bg-stone-900/80 overflow-hidden group"
          >
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                <img
                  src={resolveAssetUrl(cg.src)}
                  alt={cg.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-stone-950/90 px-2 py-0.5 font-editorial-mono text-[11px] font-bold text-[#00F0FF]">
                  {cg.accessionNo}
                </div>
                <button
                  type="button"
                  onClick={() => onInspectImage(cg.src, `${cg.title} — ${cg.commentary}`)}
                  className="absolute bottom-2 right-2 flex items-center gap-1 bg-stone-950/85 hover:bg-[#FF007F] px-2.5 py-1 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>全屏检视</span>
                </button>
              </div>

              <div className="p-4">
                <div className="font-editorial-mono text-xs text-stone-400">
                  {cg.chapter} · 刊载于 P.{padPageNumber(cg.linkedPage)}
                </div>
                <h3 className="mt-1 font-editorial-serif text-base font-bold text-white">
                  {cg.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-300">
                  {cg.commentary}
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 px-4 py-2.5 flex items-center justify-between bg-stone-950/60">
              <span className="font-editorial-mono text-[11px] text-stone-400">
                1920 × 1080 OFFICIAL PLATE
              </span>
              <button
                type="button"
                onClick={() => onJumpToPage(cg.linkedPage)}
                className="flex items-center gap-1 text-xs font-bold text-[#00F0FF] hover:underline cursor-pointer"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>翻至 P.{padPageNumber(cg.linkedPage)} 专题</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

interface LightboxModalProps {
  inspected: { src: string; caption: string } | null;
  onClose: () => void;
}

export const CgLightboxModal: React.FC<LightboxModalProps> = ({ inspected, onClose }) => {
  if (!inspected) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="高清官方原图检视窗口"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full border border-white/25 bg-[#141218] p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
          <span className="font-editorial-mono text-xs font-bold tracking-widest text-[#00F0FF]">
            HIGH-RESOLUTION OFFICIAL CG INSPECTOR · 原画检视
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭原图检视窗口"
            className="flex items-center gap-1 bg-[#FF007F] hover:bg-pink-600 px-3 py-1 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span>关闭</span>
          </button>
        </div>

        <div className="overflow-hidden border border-white/15 bg-black">
          <img
            src={resolveAssetUrl(inspected.src)}
            alt={inspected.caption}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-full object-contain"
          />
        </div>

        <p className="mt-3 font-editorial-serif text-xs sm:text-sm text-stone-200 leading-relaxed">
          {inspected.caption}
        </p>
      </div>
    </div>
  );
};
