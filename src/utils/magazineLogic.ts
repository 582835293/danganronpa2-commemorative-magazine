import type { CharacterProfile } from '../data/charactersData.ts';
import type { InteractiveTrialDebate, MagazinePageData, MagazineSectionId } from '../data/magazinePages.ts';

export const TOTAL_MAGAZINE_PAGES = 50;

export type ReadingMode = 'spread' | 'single';

export function clampPage(page: number): number {
  if (!Number.isFinite(page)) return 1;
  return Math.max(1, Math.min(TOTAL_MAGAZINE_PAGES, Math.round(page)));
}

export function getSpreadPages(currentPage: number, mode: ReadingMode): number[] {
  const safe = clampPage(currentPage);
  if (mode === 'single') {
    return [safe];
  }
  if (safe === 1) {
    return [1];
  }
  if (safe === TOTAL_MAGAZINE_PAGES) {
    return [TOTAL_MAGAZINE_PAGES];
  }
  const leftPage = safe % 2 === 0 ? safe : safe - 1;
  const rightPage = Math.min(TOTAL_MAGAZINE_PAGES - 1, leftPage + 1);
  return leftPage === rightPage ? [leftPage] : [leftPage, rightPage];
}

export function getNextPage(currentPage: number, mode: ReadingMode): number {
  const safe = clampPage(currentPage);
  if (mode === 'single') {
    return clampPage(safe + 1);
  }
  if (safe === 1) {
    return 2;
  }
  if (safe >= TOTAL_MAGAZINE_PAGES - 1) {
    return TOTAL_MAGAZINE_PAGES;
  }
  const leftPage = safe % 2 === 0 ? safe : safe - 1;
  return clampPage(leftPage + 2);
}

export function getPrevPage(currentPage: number, mode: ReadingMode): number {
  const safe = clampPage(currentPage);
  if (mode === 'single') {
    return clampPage(safe - 1);
  }
  if (safe <= 1) {
    return 1;
  }
  if (safe <= 3) {
    return 1;
  }
  if (safe === TOTAL_MAGAZINE_PAGES) {
    return TOTAL_MAGAZINE_PAGES - 2; // 48 (shows 48-49)
  }
  const leftPage = safe % 2 === 0 ? safe : safe - 1;
  return clampPage(leftPage - 2);
}

export function padPageNumber(page: number): string {
  return String(clampPage(page)).padStart(2, '0');
}

export function formatFolioRange(pages: number[]): string {
  if (pages.length === 0) return 'P.01 / 50';
  if (pages.length === 1) {
    return `P.${padPageNumber(pages[0])} / ${TOTAL_MAGAZINE_PAGES}`;
  }
  return `P.${padPageNumber(pages[0])}–${padPageNumber(pages[pages.length - 1])} / ${TOTAL_MAGAZINE_PAGES}`;
}

export function filterPages(
  pages: MagazinePageData[],
  sectionFilter: MagazineSectionId | 'all',
  query: string
): MagazinePageData[] {
  const q = query.trim().toLowerCase();
  return pages.filter((p) => {
    const matchesSection = sectionFilter === 'all' || p.sectionId === sectionFilter;
    if (!matchesSection) return false;
    if (!q) return true;
    const haystack = [
      `p.${p.pageNumber}`,
      `第${p.pageNumber}页`,
      p.title,
      p.subtitle,
      p.kicker,
      p.leadParagraph,
      ...p.bodyColumns
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function filterCharacters(
  characters: CharacterProfile[],
  fateFilter: 'all' | 'survivor' | 'victim' | 'blackened' | 'mascot',
  query: string
): CharacterProfile[] {
  const q = query.trim().toLowerCase();
  return characters.filter((c) => {
    const matchesFate = fateFilter === 'all' || c.fateStatus === fateFilter;
    if (!matchesFate) return false;
    if (!q) return true;
    const haystack = [
      c.nameCn,
      c.nameJp,
      c.nameEn,
      c.talentCn,
      c.talentEn,
      c.cv,
      c.rosterNo
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export interface DebateShotResult {
  success: boolean;
  reason: 'hit' | 'wrong_statement' | 'wrong_bullet';
  message: string;
}

export function evaluateDebateShot(
  trial: InteractiveTrialDebate,
  selectedBulletId: string,
  statementId: string
): DebateShotResult {
  const targetStatement = trial.statements.find((s) => s.id === statementId);
  if (!targetStatement || !targetStatement.isTarget) {
    return {
      success: false,
      reason: 'wrong_statement',
      message: '这句发言没有明显破绽！请瞄准带有高光标记的矛盾词句发射言弹。'
    };
  }
  if (selectedBulletId !== trial.correctBulletId) {
    return {
      success: false,
      reason: 'wrong_bullet',
      message: '言弹与该证言不匹配！请仔细核对搜查卷宗，切换正确的言弹再试一次。'
    };
  }
  return {
    success: true,
    reason: 'hit',
    message: trial.breakthroughText
  };
}

export function calculateReadingProgress(visitedPages: number[]): {
  count: number;
  percentage: number;
} {
  const unique = new Set(
    visitedPages.filter((n) => Number.isInteger(n) && n >= 1 && n <= TOTAL_MAGAZINE_PAGES)
  );
  const count = unique.size;
  const percentage = Math.round((count / TOTAL_MAGAZINE_PAGES) * 100);
  return { count, percentage };
}

/**
 * Converts root-relative asset paths ('/assets/...') into relative paths ('./assets/...')
 * so that static deployments on GitHub Pages project subpaths (https://user.github.io/repo/)
 * and root domains both resolve all official CGs and character portraits without 404s.
 */
export function resolveAssetUrl(assetPath: string): string {
  if (!assetPath) return '';
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://') || assetPath.startsWith('./')) {
    return assetPath;
  }
  if (assetPath.startsWith('/')) {
    return `.${assetPath}`;
  }
  return `./${assetPath}`;
}

