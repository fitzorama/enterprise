import { Tabs } from '../../../src/components/tabs/tabs';

const tabsHTML = require('../../../app/views/components/tabs/example-index.html');
const svg = require('../../../src/components/icons/svg.html');

let tabsEl;
let tabsPanelEl;
let svgEl;
let tabsObj;

describe('Tabs API', () => {
  beforeEach(() => {
    tabsEl = null;
    tabsPanelEl = null;
    svgEl = null;
    tabsObj = null;
    document.body.insertAdjacentHTML('afterbegin', svg);
    document.body.insertAdjacentHTML('afterbegin', tabsHTML);
    tabsEl = document.body.querySelector('.tab-container');
    tabsPanelEl = document.body.querySelector('.tab-panel-container');
    svgEl = document.body.querySelector('.svg-icons');
    tabsEl.classList.add('no-init');
    tabsObj = new Tabs(tabsEl);
  });

  afterEach(() => {
    tabsObj.destroy();
    tabsEl.parentNode.removeChild(tabsEl);
    tabsPanelEl.parentNode.removeChild(tabsPanelEl);
    svgEl.parentNode.removeChild(svgEl);
  });

  it('Should be defined on jQuery object', () => {
    expect(tabsObj).toEqual(jasmine.any(Object));
  });

  it('Should not update href to #test-anchor', () => {
    tabsObj.handleOutboundLink('#test-anchor');

    expect(window.location).toEqual(window.location);
  });

  it('Should not have animated bar', () => {
    expect(tabsObj.hasAnimatedBar()).toBeTruthy();
  });

  it('Should not have more button', () => {
    expect(tabsObj.hasMoreButton()).toBeFalsy();
  });

  it('Should have more button at 400px', () => {
    tabsEl.style.width = '400px';
    $('body').triggerHandler('resize');

    expect(tabsObj.hasMoreButton()).toBeTruthy();
  });

  it('Should not be in responsive mode', () => {
    expect(tabsObj.isInResponsiveMode()).toBeFalsy();
  });

  it('Should not have module tabs', () => {
    expect(tabsObj.isModuleTabs()).toBeFalsy();
  });

  it('Should not have vertical tabs', () => {
    expect(tabsObj.isVerticalTabs()).toBeFalsy();
  });

  it('Should not have header tabs', () => {
    expect(tabsObj.isHeaderTabs()).toBeFalsy();
  });

  it('Should have scrollable tab panels', () => {
    expect(tabsObj.isScrollableTabs()).toBeTruthy();
  });

  it('Should not have hidden tabs', () => {
    expect(tabsObj.isHidden()).toBeFalsy();
  });

  it('Should not have nested tabs', () => {
    expect(tabsObj.isNested()).toBeFalsy();
  });

  it('Should have #tabs-normal-attachments as active tab', () => {
    expect(tabsObj.isActive('#tabs-normal-attachments')).toBeTruthy();
  });

  it('Should not have #tabs-normal-contacts as active tab', () => {
    expect(tabsObj.isActive('#tabs-normal-contacts')).toBeFalsy();
  });

  it('Should not be nested in layout tabs', () => {
    expect(tabsObj.isNestedInLayoutTabs()).toBeFalsy();
  });

  it('Should determine if obj is a tab', () => {
    const tabItem = jQuery('.tab.is-selected');
    const tabFirstItem = jQuery('.tab:first');

    expect(tabsObj.isTab(tabItem)).toBeTruthy();
    expect(tabsObj.isTab(tabFirstItem)).toBeTruthy();
  });

  it('Should determine if obj is a not a tab', () => {
    const tabItem = jQuery('body');

    expect(tabsObj.isTab(tabItem)).toBeFalsy();
  });

  it('Should determine if obj is a or anchor', () => {
    const tabItem = jQuery('.tab.is-selected');
    const tabItemAnchor = jQuery('.tab.is-selected a');
    const tabFirstItem = jQuery('.tab:first');

    expect(tabsObj.isAnchor(tabItem)).toBeFalsy();
    expect(tabsObj.isAnchor(tabFirstItem)).toBeFalsy();
    expect(tabsObj.isAnchor(tabItemAnchor)).toBeTruthy();
  });

  it('Should return jQuery anchor of respective tab', () => {
    const tabItemAnchor = jQuery('.tab.is-selected a');

    expect(tabsObj.getAnchor('tabs-normal-attachments')).toEqual(tabItemAnchor);
    expect(tabsObj.getAnchor('#tabs-normal-attachments')).toEqual(tabItemAnchor);
    expect(tabsObj.getAnchor('body').length).toBeFalsy();
  });

  it('Should return jQuery panel of respective tab', () => {
    const tabItemPanel = jQuery('#tabs-normal-attachments');

    expect(tabsObj.getPanel('tabs-normal-attachments')).toEqual(tabItemPanel);
    expect(tabsObj.getPanel('body').length).toBeFalsy();
  });

  it('Should return jQuery previous available tab', () => {
    const tabSecondItem = jQuery('.tab:nth-of-type(2)');
    tabsObj.activate('#tabs-normal-opportunities');

    expect(tabsObj.getPreviousTab('tabs-normal-attachments')).toEqual(tabSecondItem);
  });

  it('Should return jQuery previous tab, and activate it', () => {
    const activatedTabEl = tabsObj.activatePreviousTab('tabs-normal-attachments');

    expect(activatedTabEl).toEqual(jQuery('.tab.is-selected'));
  });

  it('Should activate tab', () => {
    tabsObj.activate('#tabs-normal-contracts');

    expect(document.querySelector('.tab.is-selected').innerText).toEqual('Contracts');
  });

  it('Should select tab, and return jQuery previous available tab', () => {
    const tabAttachments = jQuery('.tab:nth-of-type(3)');
    tabsObj.activate('#tabs-normal-opportunities');
    tabsObj.activate('#tabs-normal-contacts');

    expect(tabsObj.getPreviousTab('#tabs-normal-contacts')[0]).toEqual(tabAttachments[0]);
  });

  it('Should fetch content that will display inside a tab, return a promise', () => {
    const href = 'http://localhost:9876';
    const externalRes = tabsObj.callSource(href, true);

    expect(externalRes).toEqual(jasmine.any(Object));
  });

  it('Should not fetch content, and should return false', () => {
    const localRes = tabsObj.callSource();

    expect(localRes).toBeFalsy();
  });

  it('Should add new tab', () => {
    const tab = tabsObj.add();

    expect(tab).toEqual(jasmine.any(Object));
  });

  it('Should add new tab, and set tab name', () => {
    const tab = tabsObj.add('tabs-normal-weird', { name: 'weird', content: 'Weirdness' }, 1);

    expect(tab.anchors.length).toEqual(6);
    expect(tab.element[0].querySelectorAll('.tab')[1].innerText).toEqual('weird');
  });
});
