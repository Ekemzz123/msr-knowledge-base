/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html;
  jest.resetModules();
  require('../src/script.js');
});

test('page has four navigation tabs', () => {
  expect(document.querySelectorAll('.tab-btn').length).toBe(4);
});

test('Data Sources tab is shown by default', () => {
  expect(document.getElementById('data-sources').classList).toContain('active');
});

test('clicking a tab shows its section and hides the others', () => {
  document.querySelector('[data-tab="collection-methods"]').click();
  expect(document.getElementById('collection-methods').classList).toContain('active');
  expect(document.getElementById('data-sources').classList).not.toContain('active');
});

test('clicked tab button is highlighted', () => {
  const btn = document.querySelector('[data-tab="publication-venues"]');
  btn.click();
  expect(btn.classList).toContain('active');
});

test('Data Sources table lists all 7 sources', () => {
  expect(document.querySelectorAll('#data-sources tbody tr').length).toBe(7);
});