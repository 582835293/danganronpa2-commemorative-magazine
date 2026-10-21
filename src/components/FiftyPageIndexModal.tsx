import React, { useState } from 'react';
import { Search, Bookmark, ArrowUpRight, Check, Image as ImageIcon } from 'lucide-react';
import {
  MAGAZINE_PAGES,
  MAGAZINE_SECTIONS,
  type MagazineSectionId
} from '../data/magazinePages.ts';
import { filterPages, padPageNumber, resolveAssetUrl } from '../utils/magazineLogic.ts';

interface FiftyPageIndexViewProps {
  currentPage: number;
  visitedPages: number[];
  bookmarkedPages: number[];
  onSelectPage: (pageNumber: number) => void;
  onInspectCg?: (src: string, caption: string) => void;
}

export const FiftyPageIndexView: React.FC<FiftyPageIndexViewProps> = ({
  currentPage,
  visitedPages,
  bookmarkedPages,
  onSelectPage,
  onInspectCg
}) => {
  const [sectionFilter, setSectionFilter] = useState<MagazineSectionId | 'all'>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [query, setQuery] = useState('');

  const baseFiltered = filterPages(MAGAZINE_PAGES, sectionFilter, query);
  const displayedPages = onlyBookmarks
    ? baseFiltered.filter((p) => bookmarkedPages.includes(p.pageNumber))
    : baseFiltered;

  return (
    <section
      aria-label="全50页杂志总目录与快速跳页矩阵"
      className="mx-auto max-w-[1380px] border border-white/15 bg-[#16141C] p-6 text-stone-100 shadow-2xl"
    >
      {/* Top Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/15 pb-4">
        <div>
          <span className="font-editorial-mono text-xs font-bold tracking-widest text-[#00F0FF]">
            COMPLETE 50-PAGE DIRECTORY · 全50页总览与检索
          </span>
          <h2 className="mt-1 font-editorial-serif text-xl sm:text-2xl font-bold text-white">
            《超级弹丸论破2：再见绝望学园》纪念周刊 50页版面矩阵
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-72">
            <label htmlFor="page-index-search" className="sr-only">
              检索50页杂志标题或内容
            </label>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              id="page-index-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入页码、角色或案件检索 (如：第5章 / 七海)..."
              className="w-full border border-white/15 bg-stone-900 py-2 pl-9 pr-3 text-xs text-white placeholder-stone-400 focus:border-[#00F0FF] focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => setOnlyBookmarks((b) => !b)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              onlyBookmarks
                ? 'border-[#FF007F] bg-[#FF007F] text-white'
                : 'border-white/15 bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>仅看已夹书签 ({bookmarkedPages.length})</span>
          </button>
        </div>
      </div>

      {/* Section Filter Tabs */}
      <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="按周刊章节筛选">
        <button
          type="button"
          onClick={() => setSectionFilter('all')}
          className={`px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            sectionFilter === 'all'
              ? 'bg-[#00F0FF] text-stone-950'
              : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
          }`}
        >
          全部 50 页 (P.01–P.50)
        </button>
        {MAGAZINE_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            type="button"
            onClick={() => setSectionFilter(sec.id)}
            className={`px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              sectionFilter === sec.id
                ? 'bg-[#00F0FF] text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            {sec.name} ({sec.range})
          </button>
        ))}
      </div>

      {/* 50-Page Thumbnail Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {displayedPages.map((p) => {
          const isCurrent = p.pageNumber === currentPage;
          const isVisited = visitedPages.includes(p.pageNumber);
          const isBookmarked = bookmarkedPages.includes(p.pageNumber);

          return (
            <div
              key={p.pageNumber}
              className={`group flex flex-col justify-between border transition-colors ${
                isCurrent
                  ? 'border-[#FF007F] bg-pink-950/30'
                  : 'border-white/10 bg-stone-900/70 hover:border-white/30'
              }`}
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                  <img
                    src={resolveAssetUrl(p.heroImage)}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 bg-stone-950/90 px-2 py-0.5 font-editorial-mono text-xs font-bold text-white">
                    P.{padPageNumber(p.pageNumber)}
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    {isBookmarked && (
                      <span className="bg-[#FF007F] p-1 text-white" title="已夹书签">
                        <Bookmark className="h-3 w-3" />
                      </span>
                    )}
                    {isVisited && (
                      <span className="bg-emerald-600/90 p-1 text-white" title="已阅读">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-3">
                  <div className="font-editorial-mono text-[10px] text-[#00F0FF] truncate">
                    {p.sectionLabel}
                  </div>
                  <h3 className="mt-1 font-editorial-serif text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-stone-400 line-clamp-2">
                    {p.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
                {onInspectCg ? (
                  <button
                    type="button"
                    onClick={() => onInspectCg(p.heroImage, p.imageCaption)}
                    className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ImageIcon className="h-3 w-3" />
                    <span>看CG</span>
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={() => onSelectPage(p.pageNumber)}
                  className="text-xs font-bold text-[#FF007F] group-hover:text-[#00F0FF] flex items-center gap-1 cursor-pointer"
                >
                  <span>翻至 P.{padPageNumber(p.pageNumber)}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}

        {displayedPages.length === 0 && (
          <div className="col-span-full py-12 text-center text-sm text-stone-400">
            没有找到符合筛选条件的杂志页面。
          </div>
        )}
      </div>
    </section>
  );
};
