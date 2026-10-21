import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Gift,
  Crosshair,
  BookOpen,
  X,
  Volume2,
  CheckCircle2
} from 'lucide-react';
import { CHARACTERS_DATA, type CharacterProfile } from '../data/charactersData.ts';
import { filterCharacters, padPageNumber, resolveAssetUrl } from '../utils/magazineLogic.ts';
import { PixelSpriteIcon } from './PixelSpriteIcon.tsx';

interface CharacterDossierProps {
  selectedCharacterId: string;
  onSelectCharacter: (id: string) => void;
  unlockedShards: Record<string, number>;
  onUnlockNextShard: (characterId: string) => void;
  onJumpToMagazinePage: (pageNumber: number) => void;
  onClose?: () => void;
}

export const CharacterDossierView: React.FC<CharacterDossierProps> = ({
  selectedCharacterId,
  onSelectCharacter,
  unlockedShards,
  onUnlockNextShard,
  onJumpToMagazinePage,
  onClose
}) => {
  const [fateFilter, setFateFilter] = useState<'all' | 'survivor' | 'victim' | 'blackened' | 'mascot'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'shards' | 'trial'>('overview');
  const [giftFeedback, setGiftFeedback] = useState<string | null>(null);
  const [rebuttalFired, setRebuttalFired] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const filteredChars = filterCharacters(CHARACTERS_DATA, fateFilter, searchQuery);
  const currentChar: CharacterProfile =
    CHARACTERS_DATA.find((c) => c.id === selectedCharacterId) || CHARACTERS_DATA[0];

  const currentShardLevel = unlockedShards[currentChar.id] ?? 2;

  React.useEffect(() => {
    setGiftFeedback(null);
    setRebuttalFired(false);
    setVoiceActive(false);
  }, [currentChar.id]);

  // Compute 5-axis SVG radar polygon coordinates
  const getRadarPoints = () => {
    const center = 110;
    const radius = 76;
    const values = [
      currentChar.stats.logic / 100,
      currentChar.stats.mentality / 100,
      currentChar.stats.action / 100,
      currentChar.stats.luck / 100,
      currentChar.stats.empathy / 100
    ];
    return values
      .map((val, idx) => {
        const angle = (Math.PI * 2 * idx) / 5 - Math.PI / 2;
        const r = Math.max(0.15, val) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  return (
    <section
      aria-label="第77期生互动式电子学生手册档案界面"
      className="mx-auto max-w-[1380px] border border-white/15 bg-[#16141C] text-stone-100 shadow-2xl"
    >
      {/* Top e-Handbook Terminal Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 bg-[#1E1B26] px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="font-editorial-mono text-xs font-bold tracking-widest text-[#00F0FF]">
            E-HANDBOOK · 电子学生手册 V2.77
          </span>
          <span aria-hidden="true" className="text-stone-500">·</span>
          <h2 className="font-editorial-serif text-lg sm:text-xl font-bold text-white">
            私立希望峰学园 第77期生互动角色档案库
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onJumpToMagazinePage(currentChar.magazinePage)}
            className="flex items-center gap-1.5 bg-[#FF007F] hover:bg-pink-600 px-3.5 py-2 text-xs font-bold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>跳转该角色周刊专页 P.{padPageNumber(currentChar.magazinePage)}</span>
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="返回电子周刊阅读界面"
              className="flex items-center gap-1 border border-white/20 bg-stone-800 hover:bg-stone-700 px-3 py-2 text-xs font-medium text-stone-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <X className="h-4 w-4" />
              <span>返回杂志</span>
            </button>
          )}
        </div>
      </div>

      {/* Main 12-Column Interactive Dossier Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (4 cols): Search, Fate Filter & 18-Character Roster Grid */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/15 p-5 flex flex-col justify-between bg-[#131118]">
          <div>
            {/* Search Input */}
            <div className="relative">
              <label htmlFor="character-search-input" className="sr-only">
                搜索角色姓名、才能或声优
              </label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                id="character-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索姓名、才能、声优 (如：狛枝 / 游戏玩家)..."
                className="w-full border border-white/15 bg-stone-900 py-2 pl-9 pr-3 text-xs text-white placeholder-stone-400 focus:border-[#00F0FF] focus:outline-none"
              />
            </div>

            {/* Interactive Filter Tabs */}
            <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label="按生存状态筛选角色">
              {[
                { id: 'all', label: '全员 (18)' },
                { id: 'survivor', label: '终章生还 (5)' },
                { id: 'victim', label: '被害者 (6)' },
                { id: 'blackened', label: '处刑犯人 (5)' },
                { id: 'mascot', label: '吉祥物 (2)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFateFilter(tab.id as typeof fateFilter)}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    fateFilter === tab.id
                      ? 'bg-[#00F0FF] text-stone-950 font-bold'
                      : 'bg-stone-800/90 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Character Selection List */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 max-h-[520px] overflow-y-auto pr-1">
              {filteredChars.map((char) => {
                const isSelected = char.id === currentChar.id;
                const shards = unlockedShards[char.id] ?? 2;
                return (
                  <button
                    key={char.id}
                    type="button"
                    onClick={() => onSelectCharacter(char.id)}
                    className={`flex items-center gap-2.5 p-2 text-left border transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#FF007F] bg-pink-950/40 text-white'
                        : 'border-white/10 bg-stone-900/60 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <img
                      src={resolveAssetUrl(char.portrait)}
                      alt={char.nameCn}
                      referrerPolicy="no-referrer"
                      className="h-11 w-11 object-cover object-top shrink-0 border border-white/20"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-editorial-mono text-[10px] text-stone-400">
                        {char.rosterNo} · ★{shards}/5
                      </div>
                      <div className="text-xs font-bold truncate text-white">
                        {char.nameCn}
                      </div>
                      <div className="text-[11px] text-stone-400 truncate">
                        {char.talentCn.replace('超高校级的', '')}
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredChars.length === 0 && (
                <div className="col-span-full py-8 text-center text-xs text-stone-400">
                  未找到匹配的角色档案，请尝试其他关键词。
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 flex items-center justify-between text-xs font-editorial-mono text-stone-400">
            <span>CLASS 77-B ARCHIVE</span>
            <span>当前选中：{currentChar.nameCn}</span>
          </div>
        </div>

        {/* Center Column (4 cols): Character Portrait, 8-Bit Sprite, Voice Line & Physical Stats */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/15 p-6 flex flex-col justify-between bg-[#181520]">
          <div>
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="font-editorial-mono text-xs font-bold text-[#00F0FF]">
                  {currentChar.rosterNo} · {currentChar.nameEn.toUpperCase()}
                </span>
                <h3 className="mt-0.5 font-editorial-serif text-2xl sm:text-3xl font-black text-white">
                  {currentChar.nameCn}
                </h3>
                <p className="text-xs text-stone-300 mt-0.5">
                  {currentChar.talentCn} · 日文原名：{currentChar.nameJp}
                </p>
              </div>
              <PixelSpriteIcon
                hairColor={currentChar.hairColor}
                outfitColor={currentChar.outfitColor}
                accentColor={currentChar.themeColor}
                size={46}
                label={`${currentChar.nameCn} 8-bit动态像素形象`}
              />
            </div>

            {/* Official Character Standing Portrait & Chapter Status */}
            <div className="mt-4 relative overflow-hidden border border-white/20 bg-stone-950 aspect-[4/4.3]">
              <img
                src={resolveAssetUrl(currentChar.portrait)}
                alt={`${currentChar.nameCn} 官方立绘`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-editorial-mono text-[11px] text-[#00F0FF]">
                  {currentChar.chapterTag} · {currentChar.fateLabel}
                </div>
                <p className="mt-1 font-editorial-serif text-xs sm:text-sm italic text-white">
                  “{currentChar.quote}”
                </p>
              </div>
            </div>

            {/* Voice Quote Trigger Button */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setVoiceActive((v) => !v)}
                className="w-full py-2 px-3 border border-white/20 bg-stone-900 hover:bg-stone-800 text-xs font-medium text-stone-100 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-[#FF007F]" />
                  <span>CV：{currentChar.cv} · 原声台词检视</span>
                </span>
                <span className="font-editorial-mono text-[11px] text-[#00F0FF]">
                  {voiceActive ? '收起原音' : '展开原音'}
                </span>
              </button>
              {voiceActive && (
                <div className="mt-1.5 border border-[#00F0FF]/40 bg-stone-950 p-2.5 text-xs text-cyan-100 font-editorial-serif">
                  <div>【日文原词】「{currentChar.quoteJp}」</div>
                  <div className="mt-1 text-stone-300">【中文译文】“{currentChar.quote}”</div>
                </div>
              )}
            </div>
          </div>

          {/* Physical Metrics Table */}
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/15 pt-4 text-xs font-editorial-mono">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <dt className="text-stone-400">身高</dt>
              <dd className="text-white font-semibold">{currentChar.height}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <dt className="text-stone-400">体重</dt>
              <dd className="text-white font-semibold">{currentChar.weight}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <dt className="text-stone-400">胸围</dt>
              <dd className="text-white font-semibold">{currentChar.chest}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <dt className="text-stone-400">生日 / 血型</dt>
              <dd className="text-white font-semibold">
                {currentChar.birthday} · {currentChar.bloodType}
              </dd>
            </div>
            <div className="col-span-2 flex justify-between border-b border-white/10 pb-1">
              <dt className="text-stone-400 shrink-0">喜欢的事物</dt>
              <dd className="text-white font-sans truncate pl-3">{currentChar.likes}</dd>
            </div>
            <div className="col-span-2 flex justify-between pb-1">
              <dt className="text-stone-400 shrink-0">讨厌的事物</dt>
              <dd className="text-white font-sans truncate pl-3">{currentChar.dislikes}</dd>
            </div>
          </dl>
        </div>

        {/* Right Column (4 cols): 3 Interactive Sub-Modules (Radar & Bio / Hope Shards & Gifts / Trial Rebuttal) */}
        <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-[#14121B]">
          <div>
            {/* Sub-navigation Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-stone-900 p-1 border border-white/15" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#FF007F] text-white'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                能力雷达 & 评述
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'shards'}
                onClick={() => setActiveTab('shards')}
                className={`py-2 px-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'shards'
                    ? 'bg-[#FF007F] text-white'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                希望碎片 ({currentShardLevel}/5)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'trial'}
                onClick={() => setActiveTab('trial')}
                className={`py-2 px-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'trial'
                    ? 'bg-[#FF007F] text-white'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                专属言弹实演
              </button>
            </div>

            {/* TAB 1: Ability Radar & Magazine Editorial Bio */}
            {activeTab === 'overview' && (
              <div className="mt-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 border border-white/10 bg-stone-900/70 p-3">
                  <svg
                    width="220"
                    height="220"
                    viewBox="0 0 220 220"
                    className="shrink-0"
                    aria-label={`${currentChar.nameCn}五维能力雷达图`}
                  >
                    {/* Background concentric pentagons */}
                    {[0.33, 0.66, 1].map((scale, sIdx) => {
                      const pts = [0, 1, 2, 3, 4]
                        .map((i) => {
                          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                          const x = 110 + 76 * scale * Math.cos(angle);
                          const y = 110 + 76 * scale * Math.sin(angle);
                          return `${x.toFixed(1)},${y.toFixed(1)}`;
                        })
                        .join(' ');
                      return (
                        <polygon
                          key={sIdx}
                          points={pts}
                          fill="none"
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="1"
                        />
                      );
                    })}
                    {/* Data Polygon */}
                    <polygon
                      points={getRadarPoints()}
                      fill="rgba(255, 0, 127, 0.32)"
                      stroke="#00F0FF"
                      strokeWidth="2"
                    />
                    {/* Axis Labels */}
                    <text x="110" y="20" textAnchor="middle" fill="#E5E5E5" fontSize="11">
                      推理 {currentChar.stats.logic}
                    </text>
                    <text x="196" y="84" textAnchor="middle" fill="#E5E5E5" fontSize="11">
                      精神 {currentChar.stats.mentality}
                    </text>
                    <text x="168" y="192" textAnchor="middle" fill="#E5E5E5" fontSize="11">
                      行动 {currentChar.stats.action}
                    </text>
                    <text x="52" y="192" textAnchor="middle" fill="#E5E5E5" fontSize="11">
                      幸运 {currentChar.stats.luck}
                    </text>
                    <text x="24" y="84" textAnchor="middle" fill="#E5E5E5" fontSize="11">
                      共情 {currentChar.stats.empathy}
                    </text>
                  </svg>

                  <div className="space-y-2 text-xs text-stone-300">
                    <div className="font-editorial-mono text-[11px] text-[#00F0FF]">
                      CHARACTER EVALUATION
                    </div>
                    <p className="leading-relaxed">{currentChar.editorialBio}</p>
                  </div>
                </div>

                {/* Featured Official CG Thumbnail */}
                <div className="border border-white/10 bg-stone-900 p-3">
                  <div className="font-editorial-mono text-[11px] text-stone-400 mb-2">
                    ASSOCIATED OFFICIAL CG · 关联实机名场面
                  </div>
                  <img
                    src={resolveAssetUrl(currentChar.featuredCg)}
                    alt={`${currentChar.nameCn} 关联实机CG`}
                    referrerPolicy="no-referrer"
                    className="aspect-video w-full object-cover border border-white/10"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: Hope Shards (Report Card) & MonoMono Gift Tester */}
            {activeTab === 'shards' && (
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border border-white/15 bg-stone-900 p-3">
                  <div>
                    <div className="font-editorial-mono text-xs font-bold text-[#00F0FF]">
                      HOPE SHARDS · 希望碎片收集进度：{currentShardLevel} / 5
                    </div>
                    <div className="text-[11px] text-stone-400 mt-0.5">
                      进行自由行动（Free Time Event）即可解锁通信簿隐藏段落
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled={currentShardLevel >= 5}
                    onClick={() => onUnlockNextShard(currentChar.id)}
                    className={`px-3 py-2 text-xs font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      currentShardLevel >= 5
                        ? 'bg-emerald-900/50 text-emerald-300 cursor-default'
                        : 'bg-[#FF007F] hover:bg-pink-600 text-white'
                    }`}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{currentShardLevel >= 5 ? '希望碎片已集齐' : '进行自由行动 (+1)'}</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-[270px] overflow-y-auto pr-1">
                  {currentChar.hopeShards.map((shardText, index) => {
                    const isUnlocked = index < currentShardLevel;
                    return (
                      <div
                        key={index}
                        className={`p-2.5 border text-xs leading-relaxed ${
                          isUnlocked
                            ? 'border-white/15 bg-stone-900/90 text-stone-200'
                            : 'border-white/5 bg-stone-950/60 text-stone-500'
                        }`}
                      >
                        {isUnlocked
                          ? shardText
                          : `阶段 0${index + 1}：[未解锁档案] 点击上方“进行自由行动”与${currentChar.nameCn}加深羁绊后解锁。`}
                      </div>
                    );
                  })}
                </div>

                {/* Favorite Gifts Interactive Box */}
                <div className="border border-white/15 bg-stone-900 p-3">
                  <div className="flex items-center gap-1.5 font-editorial-mono text-xs font-bold text-amber-300">
                    <Gift className="h-3.5 w-3.5" />
                    <span>赠送黑白熊扭蛋礼物（测试好感度反馈）：</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {currentChar.favoriteGifts.map((gift) => (
                      <button
                        key={gift}
                        type="button"
                        onClick={() =>
                          setGiftFeedback(
                            `已向 ${currentChar.nameCn} 赠送【${gift}】！好感度大幅上升，获得电子手册纪念徽章！`
                          )
                        }
                        className="px-2.5 py-1.5 bg-stone-800 hover:bg-[#00F0FF] hover:text-stone-950 text-xs text-stone-200 font-medium transition-colors cursor-pointer"
                      >
                        赠送：{gift}
                      </button>
                    ))}
                  </div>
                  {giftFeedback && (
                    <div className="mt-2 text-xs text-emerald-300 font-medium">
                      ★ {giftFeedback}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: Personal Class Trial Rebuttal Simulator */}
            {activeTab === 'trial' && (
              <div className="mt-4 space-y-4">
                <div className="border border-white/15 bg-stone-900 p-4">
                  <div className="font-editorial-mono text-xs text-[#00F0FF]">
                    CLASS TRIAL STATEMENT · 学级裁判焦点证言
                  </div>
                  <p className="mt-2 font-editorial-serif text-sm leading-relaxed text-white">
                    “{currentChar.trialRebuttal.statement.split(currentChar.trialRebuttal.weakPoint)[0]}
                    <strong className="text-amber-300 underline decoration-2 underline-offset-4 px-1">
                      {currentChar.trialRebuttal.weakPoint}
                    </strong>
                    {currentChar.trialRebuttal.statement.split(currentChar.trialRebuttal.weakPoint)[1]}”
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="text-xs">
                      <span className="text-stone-400">装填言弹：</span>
                      <span className="font-bold text-[#FF007F]">
                        【{currentChar.trialRebuttal.truthBullet}】
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRebuttalFired(true)}
                      className="px-3.5 py-2 bg-[#FF007F] hover:bg-pink-600 text-xs font-bold text-white flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Crosshair className="h-3.5 w-3.5" />
                      <span>发射言弹论破</span>
                    </button>
                  </div>
                </div>

                {rebuttalFired && (
                  <div className="border-2 border-emerald-400 bg-emerald-950/70 p-4 animate-counter-slash">
                    <div className="flex items-center gap-1.5 font-editorial-mono text-xs font-bold text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>BREAK!! · 論破・賛同成立</span>
                    </div>
                    <p className="mt-1.5 font-editorial-serif text-sm font-bold text-white leading-relaxed">
                      “{currentChar.trialRebuttal.counterQuote}”
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Quick Navigation to Character's Magazine Page */}
          <div className="mt-6 border-t border-white/15 pt-4 flex items-center justify-between text-xs text-stone-400">
            <span>所属周刊页码：第 {currentChar.magazinePage} 页</span>
            <button
              type="button"
              onClick={() => onJumpToMagazinePage(currentChar.magazinePage)}
              className="font-bold text-[#00F0FF] hover:underline cursor-pointer"
            >
              立即翻至 P.{padPageNumber(currentChar.magazinePage)} 阅读专页 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
