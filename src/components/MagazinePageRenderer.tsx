import React, { useState } from 'react';
import {
  Bookmark,
  Crosshair,
  UserCheck,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  Award
} from 'lucide-react';
import type { MagazinePageData } from '../data/magazinePages.ts';
import { MAGAZINE_SECTIONS, MAGAZINE_PAGES } from '../data/magazinePages.ts';
import { CHARACTERS_DATA } from '../data/charactersData.ts';
import { evaluateDebateShot, padPageNumber, resolveAssetUrl } from '../utils/magazineLogic.ts';
import { OfficialMediaFrame, PixelSpriteIcon } from './PixelSpriteIcon.tsx';

interface MagazinePageRendererProps {
  page: MagazinePageData;
  side?: 'left' | 'right' | 'single';
  isBookmarked: boolean;
  onToggleBookmark: (pageNumber: number) => void;
  onJumpToPage: (pageNumber: number) => void;
  onOpenCharacterDossier: (characterId: string) => void;
  onInspectImage: (src: string, caption: string) => void;
  solvedTrials: Record<number, boolean>;
  onMarkTrialSolved: (chapter: number) => void;
}

export const MagazinePageRenderer: React.FC<MagazinePageRendererProps> = ({
  page,
  side = 'single',
  isBookmarked,
  onToggleBookmark,
  onJumpToPage,
  onOpenCharacterDossier,
  onInspectImage,
  solvedTrials,
  onMarkTrialSolved
}) => {
  const relatedChar = page.relatedCharacterId
    ? CHARACTERS_DATA.find((c) => c.id === page.relatedCharacterId)
    : undefined;

  // Interactive Trial state for pages with interactiveTrial
  const [selectedBulletId, setSelectedBulletId] = useState<string>(
    page.interactiveTrial?.bullets[1]?.id || page.interactiveTrial?.bullets[0]?.id || ''
  );
  const [shotFeedback, setShotFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [graduationStamped, setGraduationStamped] = useState(false);

  // Sync default bullet when page changes
  React.useEffect(() => {
    if (page.interactiveTrial) {
      setSelectedBulletId(page.interactiveTrial.bullets[0]?.id || '');
      setShotFeedback(null);
    }
  }, [page.pageNumber]);

  const spineClass =
    side === 'left'
      ? 'spine-left-shadow border-r border-stone-300'
      : side === 'right'
      ? 'spine-right-shadow'
      : '';

  const handleFireBullet = (statementId: string) => {
    if (!page.interactiveTrial) return;
    const res = evaluateDebateShot(page.interactiveTrial, selectedBulletId, statementId);
    setShotFeedback({
      success: res.success,
      message: res.message
    });
    if (res.success) {
      onMarkTrialSolved(page.interactiveTrial.trialChapter);
    }
  };

  // Special Front Cover Page (P.01)
  if (page.layoutType === 'cover') {
    return (
      <article
        data-testid={`magazine-page-${page.pageNumber}`}
        className="relative flex min-h-[760px] flex-col justify-between overflow-hidden bg-[#141218] text-stone-100 p-6 sm:p-8"
      >
        {/* Top Weekly Magazine Masthead */}
        <div>
          <div className="flex items-center justify-between border-b border-white/20 pb-3 text-xs font-editorial-mono tracking-wider text-stone-300">
            <span>WEEKLY HOPE’S PEAK · 希望峰学园纪念周刊</span>
            <span>·</span>
            <span>ISSUE NO.77-B · 全50页特大号</span>
            <span>·</span>
            <span className="text-[#FF007F] font-bold">P.01 / 50</span>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#00F0FF]">
                {page.kicker}
              </p>
              <h1
                className="mt-1 font-editorial-serif text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {page.title}
              </h1>
            </div>
            {page.secondaryImage && (
              <img
                src={resolveAssetUrl(page.secondaryImage)}
                alt="Danganronpa 2 Official Logo"
                referrerPolicy="no-referrer"
                className="h-14 sm:h-16 w-auto object-contain self-start lg:self-end shrink-0"
              />
            )}
          </div>
        </div>

        {/* Cover Central Official Key Visual */}
        <div className="my-5 relative overflow-hidden border-2 border-[#FF007F] bg-stone-950">
          <img
            src={resolveAssetUrl(page.heroImage)}
            alt={page.title}
            referrerPolicy="no-referrer"
            className="h-64 sm:h-80 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="font-editorial-mono text-xs text-[#00F0FF]">
                OFFICIAL KEY VISUAL · SPIKE CHUNSOFT ARCHIVE
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium text-stone-100 leading-relaxed">
                {page.leadParagraph}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCharacterDossier('hajime')}
              className="px-4 py-2.5 bg-[#FF007F] hover:bg-pink-600 text-white text-xs font-bold tracking-wider transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 self-start sm:self-end cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>打开77期生电子手册</span>
            </button>
          </div>
        </div>

        {/* Cover Feature Callouts & Issue Barcode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/15 pt-4">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.sidebarItems.map((item, idx) => (
              <div key={idx} className="border border-white/15 bg-white/5 p-3">
                <div className="font-editorial-mono text-[11px] text-[#00F0FF]">
                  0{idx + 1} · {item.label}
                </div>
                <div className="mt-1 text-sm font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between border border-white/15 bg-stone-900/90 p-3">
            <div>
              <div className="text-xs font-editorial-mono text-stone-400">
                QUICK JUMP · 封面导览
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => onJumpToPage(3)}
                  className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-xs text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  P.03 全目录
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToPage(14)}
                  className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-xs text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  P.14 角色志
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToPage(31)}
                  className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-xs text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  P.31 裁判卷宗
                </button>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-editorial-mono text-[11px] text-stone-400">
              <span>ISSN 2012-0726-77B</span>
              <span>PRICE: 770 HOPE COINS</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard & Specialized Editorial Pages (P.02 - P.50)
  return (
    <article
      data-testid={`magazine-page-${page.pageNumber}`}
      className={`magazine-paper bg-[#FBF9F5] relative flex min-h-[760px] flex-col justify-between p-6 sm:p-8 text-[#1C1917] ${spineClass}`}
    >
      {/* Top Running Editorial Header */}
      <div>
        <div className="flex items-center justify-between gap-2 border-b border-stone-900/20 pb-2.5 text-xs text-stone-600">
          <div className="flex items-center gap-2 font-editorial-mono">
            <span className="font-bold text-stone-900">
              P.{padPageNumber(page.pageNumber)} / 50
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-[220px] sm:max-w-none">{page.sectionLabel}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline font-editorial-mono text-[11px] text-stone-500">
              WEEKLY DESPAIR ARCHIVE
            </span>
            <button
              type="button"
              onClick={() => onToggleBookmark(page.pageNumber)}
              aria-label={isBookmarked ? `取消收藏第${page.pageNumber}页` : `收藏第${page.pageNumber}页`}
              className={`flex items-center gap-1 px-2 py-0.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isBookmarked
                  ? 'bg-[#FF007F] text-white'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
              }`}
            >
              <Bookmark className="h-3 w-3" />
              <span>{isBookmarked ? '已夹书签' : '加书签'}</span>
            </button>
          </div>
        </div>

        {/* Kicker & Editorial Headline */}
        <div className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-editorial-mono text-xs font-bold tracking-wider text-[#B91C1C]">
              {page.kicker}
            </p>
            {relatedChar && (
              <div className="flex items-center gap-1.5 text-xs text-stone-600">
                <PixelSpriteIcon
                  hairColor={relatedChar.hairColor}
                  outfitColor={relatedChar.outfitColor}
                  accentColor={relatedChar.themeColor}
                  size={22}
                  label={`${relatedChar.nameCn}像素图标`}
                />
                <span className="font-medium">{relatedChar.nameCn}</span>
              </div>
            )}
          </div>

          <h2
            className="mt-1 font-editorial-serif text-2xl sm:text-[28px] font-black leading-snug text-stone-900"
            style={{ textWrap: 'balance' }}
          >
            {page.title.replace('//', '·')}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-medium text-stone-600">
            {page.subtitle.replace('//', '·')}
          </p>
        </div>

        {/* Media Visual Section: Character Spotlight vs Standard CG Spread */}
        {page.layoutType === 'character-spotlight' && relatedChar ? (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
            <div className="sm:col-span-5 flex flex-col justify-between border border-stone-300 bg-white p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                <img
                  src={resolveAssetUrl(relatedChar.portrait)}
                  alt={`${relatedChar.nameCn} 官方立绘`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 bg-stone-950/85 px-2 py-0.5 font-editorial-mono text-[11px] text-white">
                  {relatedChar.rosterNo} · {relatedChar.nameJp}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenCharacterDossier(relatedChar.id)}
                className="mt-2.5 w-full py-2 px-3 bg-stone-900 hover:bg-[#FF007F] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>打开 {relatedChar.nameCn} 互动电子档案</span>
              </button>
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between gap-3">
              <OfficialMediaFrame
                src={page.secondaryImage || relatedChar.featuredCg}
                alt={`${relatedChar.nameCn} 实机剧照`}
                caption={page.imageCaption}
                aspectClass="aspect-video"
                figureNumber={`FIG.${padPageNumber(page.pageNumber)}`}
                onInspect={onInspectImage}
              />

              <div className="border border-stone-300 bg-stone-100/80 p-3">
                <div className="flex items-center justify-between text-xs font-editorial-mono text-stone-600">
                  <span>才能 · {relatedChar.talentCn}</span>
                  <span>CV: {relatedChar.cv}</span>
                </div>
                <p className="mt-1.5 font-editorial-serif text-xs sm:text-sm italic text-stone-800">
                  “{relatedChar.quote}”
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <OfficialMediaFrame
              src={page.heroImage}
              alt={page.title}
              caption={page.imageCaption}
              aspectClass="aspect-[16/8.5]"
              figureNumber={`FIG.${padPageNumber(page.pageNumber)}`}
              onInspect={onInspectImage}
            />
          </div>
        )}

        {/* Interactive Table of Contents Matrix on Page 3 */}
        {page.layoutType === 'toc' && (
          <div className="mt-4 border border-stone-300 bg-white p-3.5">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="font-editorial-mono text-xs font-bold text-stone-900">
                INTERACTIVE 50-PAGE DIRECTORY · 点击章节或页码直达
              </span>
              <span className="text-xs text-stone-500">共6大特辑 · 50页</span>
            </div>
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MAGAZINE_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => onJumpToPage(sec.startPage)}
                  className="flex items-center justify-between border border-stone-200 bg-stone-50 hover:bg-stone-900 hover:text-white px-3 py-2 text-left transition-colors group cursor-pointer"
                >
                  <div>
                    <div className="font-editorial-mono text-[11px] text-[#B91C1C] group-hover:text-pink-400">
                      {sec.range}
                    </div>
                    <div className="text-xs font-bold">{sec.name}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 shrink-0" />
                </button>
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1 pt-2 border-t border-stone-200">
              {MAGAZINE_PAGES.slice(13, 29).map((charPage) => (
                <button
                  key={charPage.pageNumber}
                  type="button"
                  onClick={() => onJumpToPage(charPage.pageNumber)}
                  className="px-2 py-0.5 text-[11px] font-editorial-mono bg-stone-100 hover:bg-[#FF007F] hover:text-white text-stone-700 transition-colors cursor-pointer"
                >
                  P.{charPage.pageNumber} {charPage.title.split('：')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Class Trial Nonstop Debate Widget on Trial Debate Pages */}
        {page.interactiveTrial && (
          <div
            data-testid={`trial-widget-ch${page.interactiveTrial.trialChapter}`}
            className="mt-4 border-2 border-stone-900 bg-[#18161E] p-4 text-stone-100"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-2.5">
              <div className="flex items-center gap-2">
                <Crosshair className="h-4 w-4 text-[#FF007F]" />
                <span className="font-editorial-mono text-xs font-bold tracking-wider text-white">
                  NONSTOP DEBATE · {page.interactiveTrial.caseTitle}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-editorial-mono text-stone-400">
                  模式：{page.interactiveTrial.mode === 'consent' ? '赞同言弹 (AGREE)' : '反驳言弹 (BREAK)'}
                </span>
                {solvedTrials[page.interactiveTrial.trialChapter] && (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>已论破</span>
                  </span>
                )}
              </div>
            </div>

            {/* Step 1: Select Truth Bullet */}
            <div className="mt-3">
              <div className="text-[11px] font-editorial-mono text-stone-400">
                STEP 1 · 选择装填言弹（TRUTH BULLET CYLINDER）：
              </div>
              <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {page.interactiveTrial.bullets.map((b) => {
                  const active = selectedBulletId === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBulletId(b.id)}
                      className={`px-3 py-2 text-left border transition-colors cursor-pointer ${
                        active
                          ? page.interactiveTrial?.mode === 'consent'
                            ? 'border-[#00F0FF] bg-cyan-950/60 text-white'
                            : 'border-[#FF007F] bg-pink-950/60 text-white'
                          : 'border-white/15 bg-white/5 text-stone-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{b.name}</div>
                      <div className="mt-0.5 text-[11px] text-stone-400 line-clamp-1">
                        {b.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Shoot Weak Point Statement */}
            <div className="mt-3">
              <div className="text-[11px] font-editorial-mono text-stone-400">
                STEP 2 · 点击下方发言中的矛盾弱点发射言弹（发言人：{page.interactiveTrial.speakerName}）：
              </div>
              <div className="mt-1.5 space-y-1.5">
                {page.interactiveTrial.statements.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => handleFireBullet(st.id)}
                    className="w-full text-left px-3 py-2 bg-stone-900 hover:bg-stone-800 border border-white/10 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-editorial-serif">
                      {st.isTarget && st.highlightWord ? (
                        <>
                          {st.text.split(st.highlightWord)[0]}
                          <strong
                            className={`underline decoration-2 underline-offset-4 px-1 font-black ${
                              page.interactiveTrial?.mode === 'consent'
                                ? 'text-[#00F0FF]'
                                : 'text-amber-300'
                            }`}
                          >
                            {st.highlightWord}
                          </strong>
                          {st.text.split(st.highlightWord)[1]}
                        </>
                      ) : (
                        st.text
                      )}
                    </span>
                    <span className="font-editorial-mono text-[11px] text-[#FF007F] shrink-0">
                      发射言弹 →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {shotFeedback && (
              <div
                className={`mt-3 p-3 border animate-counter-slash ${
                  shotFeedback.success
                    ? 'border-emerald-400 bg-emerald-950/70 text-emerald-100'
                    : 'border-amber-400 bg-amber-950/70 text-amber-100'
                }`}
              >
                <div className="font-editorial-mono text-xs font-bold">
                  {shotFeedback.success
                    ? page.interactiveTrial.mode === 'consent'
                      ? '★ 賛同成立 · I AGREE WITH THAT!!'
                      : '★ 論破成功 · SORE WA CHIGAU YO!!'
                    : '× 言弹偏离 · MISS'}
                </div>
                <p className="mt-1 text-xs leading-relaxed">{shotFeedback.message}</p>
              </div>
            )}
          </div>
        )}

        {/* Lead Paragraph with Editorial Drop Cap & 2-Column Body Prose */}
        <div className="mt-4">
          <p className="font-editorial-serif text-sm sm:text-[15px] leading-relaxed text-stone-900 first-letter:float-left first-letter:mr-2.5 first-letter:font-editorial-serif first-letter:text-3xl first-letter:font-black first-letter:leading-none first-letter:text-[#B91C1C]">
            {page.leadParagraph}
          </p>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13.5px] leading-relaxed text-stone-700">
            {page.bodyColumns.map((col, idx) => (
              <p key={idx} className="text-justify">
                {col}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Pull Quote & Magazine Data Box Sidebar */}
      <div className="mt-5 border-t border-stone-900/15 pt-3.5">
        <blockquote className="border-y border-stone-300 py-2 text-center font-editorial-serif text-xs sm:text-sm italic font-semibold text-stone-800">
          {page.pullQuote}
        </blockquote>

        {/* Back Cover Graduation Certificate Stamp on Page 50 */}
        {page.layoutType === 'back-cover' && (
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-stone-900 bg-stone-900 p-3.5 text-white">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-[#FF007F] shrink-0" />
              <div>
                <div className="font-editorial-mono text-xs text-[#00F0FF]">
                  HOPE’S PEAK GRADUATION CERTIFICATE
                </div>
                <div className="text-xs sm:text-sm font-bold">
                  {graduationStamped
                    ? '已加盖“第77期生修学旅行完结纪念章” · 感谢阅读全50页周刊！'
                    : '点击右侧按钮加盖“修学旅行完结纪念印章”，完成全50页阅读认证'}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setGraduationStamped(true)}
              className="px-3.5 py-2 bg-[#FF007F] hover:bg-pink-600 text-xs font-bold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {graduationStamped ? '★ 毕业印章已加盖' : '加盖修学旅行毕业印章'}
            </button>
          </div>
        )}

        <div className="mt-3 bg-stone-200/65 p-3 border border-stone-300">
          <div className="flex items-center justify-between gap-2 border-b border-stone-300 pb-1.5">
            <span className="font-editorial-mono text-[11px] font-bold tracking-wider text-stone-900">
              {page.sidebarTitle}
            </span>
            {relatedChar && (
              <button
                type="button"
                onClick={() => onOpenCharacterDossier(relatedChar.id)}
                className="text-[11px] font-bold text-[#B91C1C] hover:underline flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>查看 {relatedChar.nameCn} 通信簿 →</span>
              </button>
            )}
          </div>
          <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
            {page.sidebarItems.map((item, idx) => (
              <div key={idx} className="flex items-baseline justify-between gap-2 border-b border-stone-300/60 pb-1">
                <dt className="font-medium text-stone-600 shrink-0">{item.label}</dt>
                <dd className="font-semibold text-stone-900 text-right truncate">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
};
