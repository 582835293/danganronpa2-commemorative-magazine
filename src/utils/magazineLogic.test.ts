import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TOTAL_MAGAZINE_PAGES,
  clampPage,
  getSpreadPages,
  getNextPage,
  getPrevPage,
  formatFolioRange,
  filterPages,
  filterCharacters,
  evaluateDebateShot,
  calculateReadingProgress,
  resolveAssetUrl
} from './magazineLogic.ts';
import { MAGAZINE_PAGES } from '../data/magazinePages.ts';
import { CHARACTERS_DATA } from '../data/charactersData.ts';

test('MAGAZINE_PAGES strictly contains 50 sequential pages from 1 to 50', () => {
  assert.equal(MAGAZINE_PAGES.length, TOTAL_MAGAZINE_PAGES);
  assert.equal(TOTAL_MAGAZINE_PAGES, 50);
  MAGAZINE_PAGES.forEach((page, index) => {
    assert.equal(page.pageNumber, index + 1, `Page at index ${index} should have pageNumber ${index + 1}`);
    assert.ok(page.title.length > 4, `Page ${page.pageNumber} must have a title`);
    assert.ok(page.heroImage.startsWith('/assets/'), `Page ${page.pageNumber} must use local official asset`);
    assert.ok(page.bodyColumns.length >= 2, `Page ${page.pageNumber} must have at least 2 body columns`);
  });
});

test('CHARACTERS_DATA contains all 18 Danganronpa 2 profiles with valid magazine page links', () => {
  assert.equal(CHARACTERS_DATA.length, 18);
  for (const char of CHARACTERS_DATA) {
    assert.ok(char.portrait.startsWith('/assets/chars/'), `Character ${char.id} must have a local portrait`);
    assert.ok(char.magazinePage >= 1 && char.magazinePage <= 50, `Character ${char.id} must link to valid page`);
    assert.equal(char.hopeShards.length, 5, `Character ${char.id} must have 5 Hope Shard stages`);
  }
});

test('getSpreadPages and navigation work accurately in spread and single modes', () => {
  assert.deepEqual(getSpreadPages(1, 'spread'), [1]);
  assert.deepEqual(getSpreadPages(2, 'spread'), [2, 3]);
  assert.deepEqual(getSpreadPages(3, 'spread'), [2, 3]);
  assert.deepEqual(getSpreadPages(48, 'spread'), [48, 49]);
  assert.deepEqual(getSpreadPages(50, 'spread'), [50]);

  assert.equal(getNextPage(1, 'spread'), 2);
  assert.equal(getNextPage(2, 'spread'), 4);
  assert.equal(getNextPage(3, 'spread'), 4);
  assert.equal(getNextPage(48, 'spread'), 50);
  assert.equal(getNextPage(50, 'spread'), 50);

  assert.equal(getPrevPage(50, 'spread'), 48);
  assert.equal(getPrevPage(4, 'spread'), 2);
  assert.equal(getPrevPage(2, 'spread'), 1);
  assert.equal(getPrevPage(1, 'spread'), 1);

  assert.deepEqual(getSpreadPages(15, 'single'), [15]);
  assert.equal(getNextPage(15, 'single'), 16);
  assert.equal(getPrevPage(15, 'single'), 14);
  assert.equal(clampPage(999), 50);
  assert.equal(clampPage(-5), 1);
});

test('formatFolioRange formats single and double page spreads properly', () => {
  assert.equal(formatFolioRange([1]), 'P.01 / 50');
  assert.equal(formatFolioRange([14, 15]), 'P.14–15 / 50');
  assert.equal(formatFolioRange([50]), 'P.50 / 50');
});

test('filterPages and filterCharacters filter accurately by category and search query', () => {
  const trialPages = filterPages(MAGAZINE_PAGES, 'trials', '');
  assert.equal(trialPages.length, 12); // Pages 31..42
  const nagitoPages = filterPages(MAGAZINE_PAGES, 'all', '狛枝');
  assert.ok(nagitoPages.length >= 3);

  const survivors = filterCharacters(CHARACTERS_DATA, 'survivor', '');
  assert.equal(survivors.length, 5); // Hajime, Fuyuhiko, Kazuichi, Sonia, Akane
  const chiakiSearch = filterCharacters(CHARACTERS_DATA, 'all', '七海');
  assert.equal(chiakiSearch.length, 1);
  assert.equal(chiakiSearch[0].id, 'chiaki');
});

test('evaluateDebateShot validates Truth Bullets and statement weak points', () => {
  const trialPage = MAGAZINE_PAGES.find((p) => p.pageNumber === 32);
  assert.ok(trialPage?.interactiveTrial);
  const trial = trialPage.interactiveTrial;

  const wrongStatement = evaluateDebateShot(trial, 'b1_skewer', 's1');
  assert.equal(wrongStatement.success, false);
  assert.equal(wrongStatement.reason, 'wrong_statement');

  const wrongBullet = evaluateDebateShot(trial, 'b1_goggles', 's2');
  assert.equal(wrongBullet.success, false);
  assert.equal(wrongBullet.reason, 'wrong_bullet');

  const hit = evaluateDebateShot(trial, 'b1_skewer', 's2');
  assert.equal(hit.success, true);
  assert.equal(hit.reason, 'hit');
});

test('calculateReadingProgress tracks unique visited pages out of 50', () => {
  const prog = calculateReadingProgress([1, 2, 3, 2, 50]);
  assert.equal(prog.count, 4);
  assert.equal(prog.percentage, 8);
});

test('resolveAssetUrl converts leading slash paths to relative GitHub Pages paths', () => {
  assert.equal(resolveAssetUrl('/assets/cg/header.jpg'), './assets/cg/header.jpg');
  assert.equal(resolveAssetUrl('./assets/chars/hajime.jpg'), './assets/chars/hajime.jpg');
  assert.equal(resolveAssetUrl('assets/cg/cg_01.jpg'), './assets/cg/cg_01.jpg');
});

