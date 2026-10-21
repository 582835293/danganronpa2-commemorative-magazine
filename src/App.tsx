/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Columns,
  FileText,
  BookOpen,
  Users,
  Grid,
  Image as ImageIcon
} from 'lucide-react';
import { MAGAZINE_PAGES, MAGAZINE_SECTIONS } from './data/magazinePages.ts';
import { CHARACTERS_DATA } from './data/charactersData.ts';
import {
  TOTAL_MAGAZINE_PAGES,
  type ReadingMode,
  clampPage,
  getSpreadPages,
  getNextPage,
  getPrevPage,
  formatFolioRange,
  padPageNumber,
  calculateReadingProgress
} from './utils/magazineLogic.ts';
import { MagazinePageRenderer } from './components/MagazinePageRenderer.tsx';
import { CharacterDossierView } from './components/CharacterDossierModal.tsx';
import { FiftyPageIndexView } from './components/FiftyPageIndexModal.tsx';
import { CgGalleryView, CgLightboxModal } from './components/CgGalleryView.tsx';
import { PixelSpriteIcon } from './components/PixelSpriteIcon.tsx';

type ActiveWorkspaceView = 'magazine' | 'index' | 'characters' | 'gallery';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveWorkspaceView>('magazine');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [readingMode, setReadingMode] = useState<ReadingMode>('spread');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('hajime');
  const [visitedPages, setVisitedPages] = useState<number[]>([1]);
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>([1, 14, 15, 16, 32, 40]);
  const [unlockedShards, setUnlockedShards] = useState<Record<string, number>>({
    hajime: 3,
    nagito: 3,
    chiaki: 4
  });
  const [solvedTrials, setSolvedTrials] = useState<Record<number, boolean>>({});
  const [inspectedImage, setInspectedImage] = useState<{ src: string; caption: string } | null>(
    null
  );
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

  // Compute current visible spread pages (1 page for Cover/Back Cover or Single mode, 2 pages for inner spreads)
  const visiblePageNumbers = getSpreadPages(currentPage, readingMode);
  const visiblePageObjects = visiblePageNumbers
    .map((num) => MAGAZINE_PAGES.find((p) => p.pageNumber === num))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Track visited pages automatically
  useEffect(() => {
    setVisitedPages((prev) => {
      const next = new Set([...prev, ...visiblePageNumbers]);
      return Array.from(next);
    });
  }, [currentPage, readingMode]);

  // Keyboard Left/Right Arrow navigation when in Magazine view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeView !== 'magazine' || inspectedImage) return;
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'SELECT'
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, currentPage, readingMode, inspectedImage]);

  const triggerFlipAnimation = (dir: 'next' | 'prev') => {
    setFlipDirection(dir);
    window.setTimeout(() => setFlipDirection(null), 180);
  };

  const handleNextPage = () => {
    const next = getNextPage(currentPage, readingMode);
    if (next !== currentPage) {
      triggerFlipAnimation('next');
      setCurrentPage(next);
    }
  };

  const handlePrevPage = () => {
    const prev = getPrevPage(currentPage, readingMode);
    if (prev !== currentPage) {
      triggerFlipAnimation('prev');
      setCurrentPage(prev);
    }
  };

  const handleJumpToPage = (targetPage: number) => {
    const clamped = clampPage(targetPage);
    triggerFlipAnimation(clamped >= currentPage ? 'next' : 'prev');
    setCurrentPage(clamped);
    setActiveView('magazine');
  };

  const handleOpenCharacterDossier = (characterId: string) => {
    setSelectedCharacterId(characterId);
    setActiveView('characters');
  };

  const handleToggleBookmark = (pageNumber: number) => {
    setBookmarkedPages((prev) =>
      prev.includes(pageNumber)
        ? prev.filter((p) => p !== pageNumber)
        : [...prev, pageNumber].sort((a, b) => a - b)
    );
  };

  const handleUnlockNextShard = (characterId: string) => {
    setUnlockedShards((prev) => {
      const curr = prev[characterId] ?? 2;
      return {
        ...prev,
        [characterId]: Math.min(5, curr + 1)
      };
    });
  };

  const handleMarkTrialSolved = (chapter: number) => {
    setSolvedTrials((prev) => ({ ...prev, [chapter]: true }));
  };

  const progress = calculateReadingProgress(visitedPages);

  return (
    <div className="min-h-screen flex flex-col bg-[#121114] text-stone-100">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-8 border-b border-white/15 bg-[#121114]/95 px-6 py-3.5 backdrop-blur">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleJumpToPage(1);
          }}
          className="font-editorial-serif text-base sm:text-lg font-black tracking-tight text-white whitespace-nowrap shrink-0"
        >
          超级弹丸论破2 纪念周刊
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav
          aria-label="主导航栏"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300"
        >
          <a
            href="#magazine"
            onClick={(e) => {
              e.preventDefault();
              setActiveView('magazine');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-4 ${
              activeView === 'magazine' ? 'text-white underline decoration-[#FF007F] decoration-2' : ''
            }`}
          >
            周刊阅读 (50P)
          </a>
          <a
            href="#index"
            onClick={(e) => {
              e.preventDefault();
              setActiveView('index');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-4 ${
              activeView === 'index' ? 'text-white underline decoration-[#FF007F] decoration-2' : ''
            }`}
          >
            全50页目录
          </a>
          <a
            href="#characters"
            onClick={(e) => {
              e.preventDefault();
              setActiveView('characters');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-4 ${
              activeView === 'characters'
                ? 'text-white underline decoration-[#FF007F] decoration-2'
                : ''
            }`}
          >
            互动角色档案
          </a>
          <a
            href="#trials"
            onClick={(e) => {
              e.preventDefault();
              handleJumpToPage(31);
            }}
            className="transition-colors whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-4"
          >
            学级裁判卷宗
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              setActiveView('gallery');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-4 ${
              activeView === 'gallery' ? 'text-white underline decoration-[#FF007F] decoration-2' : ''
            }`}
          >
            官方CG典藏
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() =>
              setActiveView(activeView === 'characters' ? 'magazine' : 'characters')
            }
            className="bg-[#FF007F] hover:bg-pink-600 px-4 py-2 text-xs font-bold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {activeView === 'characters' ? '返回50页周刊' : '互动角色档案'}
          </button>
        </div>
      </header>

      {/* Editorial Workspace Toolbar & 50-Page Chapter Scrubber */}
      <div className="border-b border-white/10 bg-[#191720] px-4 sm:px-6 py-2.5">
        <div className="mx-auto max-w-[1380px] flex flex-wrap items-center justify-between gap-3">
          {/* Mobile & Quick View Switcher + Section Jump Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveView('magazine')}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'magazine'
                  ? 'bg-white text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>周刊跨页阅读</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('index')}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'index'
                  ? 'bg-white text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <Grid className="h-3.5 w-3.5" />
              <span>速览全50页</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('characters')}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'characters'
                  ? 'bg-white text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>18人电子手册</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('gallery')}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'gallery'
                  ? 'bg-white text-stone-950'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5" />
              <span>官方CG画廊</span>
            </button>

            <span className="hidden xl:inline text-stone-600 px-1">|</span>

            {/* Direct Section Jump Pills */}
            <div className="hidden xl:flex items-center gap-1">
              {MAGAZINE_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleJumpToPage(sec.startPage)}
                  className="px-2 py-1 text-[11px] font-editorial-mono text-stone-300 hover:text-[#00F0FF] hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {sec.name} ({sec.range})
                </button>
              ))}
            </div>
          </div>

          {/* Right Controls: Spread/Single Mode Toggle, Page Selector & Prev/Next */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Spread vs Single Page Mode Toggle */}
            <div className="flex items-center bg-stone-900 p-0.5 border border-white/15">
              <button
                type="button"
                onClick={() => setReadingMode('spread')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  readingMode === 'spread'
                    ? 'bg-[#00F0FF] text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Columns className="h-3.5 w-3.5" />
                <span>双页跨页</span>
              </button>
              <button
                type="button"
                onClick={() => setReadingMode('single')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  readingMode === 'single'
                    ? 'bg-[#00F0FF] text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>单页精读</span>
              </button>
            </div>

            {/* Direct 1-50 Page Select Dropdown */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="magazine-page-select" className="sr-only">
                直接跳转页码
              </label>
              <select
                id="magazine-page-select"
                value={currentPage}
                onChange={(e) => handleJumpToPage(Number(e.target.value))}
                className="border border-white/20 bg-stone-900 px-2.5 py-1.5 font-editorial-mono text-xs text-white focus:border-[#00F0FF] focus:outline-none cursor-pointer"
              >
                {MAGAZINE_PAGES.map((p) => (
                  <option key={p.pageNumber} value={p.pageNumber}>
                    P.{padPageNumber(p.pageNumber)} / 50 · {p.title.slice(0, 16)}
                  </option>
                ))}
              </select>
            </div>

            {/* Prev / Folio Indicator / Next */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                aria-label="上一页"
                className="flex items-center gap-1 border border-white/20 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 px-2.5 py-1.5 text-xs font-bold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>上一页</span>
              </button>

              <span
                data-testid="current-folio-indicator"
                className="px-2.5 py-1.5 bg-stone-950 border border-white/15 font-editorial-mono text-xs font-bold text-[#00F0FF] whitespace-nowrap shrink-0"
              >
                {formatFolioRange(visiblePageNumbers)}
              </span>

              <button
                type="button"
                onClick={handleNextPage}
                disabled={
                  readingMode === 'spread'
                    ? visiblePageNumbers.includes(TOTAL_MAGAZINE_PAGES)
                    : currentPage >= TOTAL_MAGAZINE_PAGES
                }
                aria-label="下一页"
                className="flex items-center gap-1 border border-white/20 bg-[#FF007F] hover:bg-pink-600 disabled:opacity-40 px-2.5 py-1.5 text-xs font-bold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>下一页</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thin Reading Progress Bar across all 50 Pages */}
        <div className="mx-auto max-w-[1380px] mt-2 flex items-center gap-3">
          <div className="flex-1 h-1 bg-stone-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF007F] transition-transform duration-200 origin-left"
              style={{
                transform: `scaleX(${
                  visiblePageNumbers[visiblePageNumbers.length - 1] / TOTAL_MAGAZINE_PAGES
                })`
              }}
            />
          </div>
          <span className="font-editorial-mono text-[11px] text-stone-400 shrink-0">
            阅读探索度：{progress.count} / 50 页 ({progress.percentage}%)
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <main id="top" className="flex-1 px-4 sm:px-6 py-6">
        {activeView === 'magazine' && (
          <div className="mx-auto max-w-[1380px]">
            {/* Magazine Spread Container */}
            <div
              className={`transition-all duration-150 ${
                flipDirection === 'next'
                  ? 'opacity-90 translate-x-1'
                  : flipDirection === 'prev'
                  ? 'opacity-90 -translate-x-1'
                  : 'opacity-100 translate-x-0'
              } ${
                visiblePageObjects.length === 2
                  ? 'grid grid-cols-1 lg:grid-cols-2 border-2 border-stone-950 shadow-[0_24px_60px_rgba(0,0,0,0.65)]'
                  : 'mx-auto max-w-4xl border-2 border-stone-950 shadow-[0_24px_60px_rgba(0,0,0,0.65)]'
              }`}
            >
              {visiblePageObjects.map((pageObj, idx) => (
                <MagazinePageRenderer
                  key={pageObj.pageNumber}
                  page={pageObj}
                  side={
                    visiblePageObjects.length === 1
                      ? 'single'
                      : idx === 0
                      ? 'left'
                      : 'right'
                  }
                  isBookmarked={bookmarkedPages.includes(pageObj.pageNumber)}
                  onToggleBookmark={handleToggleBookmark}
                  onJumpToPage={handleJumpToPage}
                  onOpenCharacterDossier={handleOpenCharacterDossier}
                  onInspectImage={(src, caption) => setInspectedImage({ src, caption })}
                  solvedTrials={solvedTrials}
                  onMarkTrialSolved={handleMarkTrialSolved}
                />
              ))}
            </div>

            {/* Bottom Page Scrubber Bar (Quick 1..50 Page Strip) */}
            <div className="mt-6 border border-white/15 bg-[#181620] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="font-editorial-mono text-xs font-bold text-stone-300">
                  50-PAGE QUICK SCRUBBER · 全50页页码直达轨（点击任意页码翻阅）
                </span>
                <div className="flex items-center gap-3 text-xs font-editorial-mono text-stone-400">
                  <span>当前位置：{formatFolioRange(visiblePageNumbers)}</span>
                  <span>·</span>
                  <span>支持键盘 ← / → 方向键翻页</span>
                </div>
              </div>

              <div className="grid grid-cols-10 sm:grid-cols-25 gap-1">
                {MAGAZINE_PAGES.map((p) => {
                  const isVisible = visiblePageNumbers.includes(p.pageNumber);
                  const isBookmarked = bookmarkedPages.includes(p.pageNumber);
                  const isVisited = visitedPages.includes(p.pageNumber);
                  return (
                    <button
                      key={p.pageNumber}
                      type="button"
                      onClick={() => handleJumpToPage(p.pageNumber)}
                      title={`P.${padPageNumber(p.pageNumber)}: ${p.title}`}
                      aria-label={`跳转至第${p.pageNumber}页：${p.title}`}
                      className={`py-1 text-center font-editorial-mono text-[11px] font-bold transition-colors cursor-pointer ${
                        isVisible
                          ? 'bg-[#FF007F] text-white'
                          : isBookmarked
                          ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50'
                          : isVisited
                          ? 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                          : 'bg-stone-900 text-stone-500 hover:bg-stone-800 hover:text-stone-300'
                      }`}
                    >
                      {padPageNumber(p.pageNumber)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeView === 'index' && (
          <FiftyPageIndexView
            currentPage={currentPage}
            visitedPages={visitedPages}
            bookmarkedPages={bookmarkedPages}
            onSelectPage={handleJumpToPage}
            onInspectCg={(src, caption) => setInspectedImage({ src, caption })}
          />
        )}

        {activeView === 'characters' && (
          <CharacterDossierView
            selectedCharacterId={selectedCharacterId}
            onSelectCharacter={setSelectedCharacterId}
            unlockedShards={unlockedShards}
            onUnlockNextShard={handleUnlockNextShard}
            onJumpToMagazinePage={handleJumpToPage}
            onClose={() => setActiveView('magazine')}
          />
        )}

        {activeView === 'gallery' && (
          <CgGalleryView
            onJumpToPage={handleJumpToPage}
            onInspectImage={(src, caption) => setInspectedImage({ src, caption })}
          />
        )}
      </main>

      {/* Quiet Editorial Footer with Class 77-B 8-Bit Pixel Parade */}
      <footer className="border-t border-white/10 bg-[#0E0D11] px-6 py-5 text-xs text-stone-400">
        <div className="mx-auto max-w-[1380px] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {CHARACTERS_DATA.slice(0, 16).map((char) => (
              <button
                key={char.id}
                type="button"
                onClick={() => handleOpenCharacterDossier(char.id)}
                title={`查看 ${char.nameCn} 角色档案`}
                aria-label={`查看 ${char.nameCn} 角色档案`}
                className="p-1 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <PixelSpriteIcon
                  hairColor={char.hairColor}
                  outfitColor={char.outfitColor}
                  accentColor={char.themeColor}
                  size={24}
                  label={char.nameCn}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 font-editorial-mono text-[11px] text-stone-400">
            <span>WEEKLY HOPE’S PEAK ARCHIVE NO.77-B</span>
            <span>·</span>
            <span>FULL 50-PAGE DIGITAL COMMEMORATIVE EDITION</span>
          </div>
        </div>
      </footer>

      {/* High-Resolution Official CG Lightbox Modal */}
      <CgLightboxModal
        inspected={inspectedImage}
        onClose={() => setInspectedImage(null)}
      />
    </div>
  );
}
