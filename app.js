'use strict';

const ENTRIES = [
  {
    id: 'metals', title: '有色金属研究框架', kind: '主站', groups: ['metals'], featured: true,
    url: 'https://gsy1005.github.io/metals-framework/', description: '铜、铝、锌、铅、镍、锡、锂、硅全产业链研究框架。',
    tags: ['8 品种', '550+ 图表', '产业链'],
    keywords: '金属 有色 铜 铝 锌 铅 镍 锡 锂 硅 cu al zn pb ni sn lc si 价格 供应 库存 需求 进出口 成本 平衡表 知识星球 信息速递 youse jinshu'
  },
  {
    id: 'macro', title: '宏观研究工作台', kind: '主站', groups: ['macro'], featured: true,
    url: 'https://gsy1005.github.io/research-workbench/reports/daily_latest.html?v=20261027-author-clean', description: '流动性、债市、外汇、海外持仓与宏观数据工作台。',
    tags: ['日报', 'FedWatch', '海外宏观'],
    keywords: '宏观 流动性 债市 美债 外汇 汇率 cftc 持仓 fedwatch 非农 cpi ppi gdp pce 特朗普 研报 hongguan macro daily'
  },
  {
    id: 'zsxq-live', title: '知识星球汇总面板', kind: '专题', groups: ['metals', 'macro'],
    url: 'https://gsy1005.github.io/metals-framework/zsxq.html', description: '方向雷达、外资研报精选与五类信息流时间线。',
    tags: ['方向雷达', '研报 PDF', '每日更新'],
    keywords: '知识星球 小作文 信息流 研报 纪要 外资 pdf 方向 多空 情绪 观点 xingqiu zsxq'
  },
  {
    id: 'zsxq-panel', title: '星球分类面板', kind: '专题', groups: ['metals', 'macro'],
    url: 'https://gsy1005.github.io/metals-framework/zsxq-panel/', description: '按研报、产业、宏观、权益和观点分类检索。',
    tags: ['分类检索', '产业快讯', '观点讨论'],
    keywords: '知识星球 小作文 分类 研报纪要 产业快讯 宏观外汇 权益策略 观点讨论 xingqiu zsxq'
  },
  {
    id: 'xs-panel', title: '有色截面配置', kind: '策略', groups: ['metals', 'strategy'],
    url: 'https://gsy1005.github.io/metals-framework/xs-panel/', description: '六品种截面多空打分、日频信号与当前持仓。',
    tags: ['多空信号', '每日持仓', '策略'],
    keywords: '有色 截面 多空 配置 策略 信号 持仓 回测 cu al zn pb ni sn xs celue'
  },
  {
    id: 'caibao', title: '财报入库平台', kind: '财报', groups: ['metals', 'financials'],
    url: 'https://gsy1005.github.io/caibao-hub/', description: '全球有色企业季度产量、公司指引与披露日历。',
    tags: ['季度产量', '公司指引', '披露日历'],
    keywords: '财报 产量 公司 企业 季报 年报 指引 披露 日历 铜 铝 锌 铅 镍 锡 锂 硅 caibao caiwu'
  },
  {
    id: 'tin', title: '锡息相关', kind: '品种', groups: ['metals'],
    url: 'https://amiya866.github.io/tin-insight/', description: '锡单品种行情、技术面、市场情绪与政策跟踪。',
    tags: ['沪锡 / 伦锡', '技术分析', '情绪'],
    keywords: '锡 沪锡 伦锡 sn lme 行情 价格 技术面 情绪 政策 库存 xi tin'
  },
  {
    id: 'tin-weekly-research', title: '锡研究周报', kind: '品种', groups: ['metals'],
    url: location.hostname.endsWith('github.io') ? 'https://gsy1005.github.io/tin-research/weekly_full.html' : './tin/index.html', description: '锡周度研究、三周期技术分析、供需平衡与全年情景测算。',
    tags: ['完整周报', '技术分析', '情景平衡'],
    keywords: '锡 周报 研究 技术分析 平衡表 全年 情景 库存 供给 需求 AI 耗锡 sn tin weekly technical balance'
  },
  {
    id: 'nickel', title: '镍市瞭望', kind: '品种', groups: ['metals'],
    url: 'https://gsy1005.github.io/nickel-panel/', description: '镍与不锈钢供需、库存、成本、政策和技术分析。',
    tags: ['镍', '不锈钢', '产业监测'],
    keywords: '镍 镍铁 不锈钢 印尼 ni 供需 库存 成本 政策 技术 nie nickel'
  },
  {
    id: 'data-panel', title: '数据接口总面板', kind: '数据', groups: ['metals', 'data'],
    url: 'https://gsy1005.github.io/metals-framework/data-panel/', description: '多数据源指标查询、时序图表与数据下载。',
    tags: ['SMM', 'Mysteel', '百川 / iFinD'],
    keywords: '数据 接口 指标 查询 时序 图表 下载 smm mysteel 百川 盈孚 ifind 现货 库存 产量 价格 shuju data'
  },
  {
    id: 'metal-news', title: '金属信息速递', kind: '直达', groups: ['metals'],
    url: 'https://gsy1005.github.io/metals-framework/#/m/news', description: '官方研报、分品种星球条目与有色权益策略。',
    tags: ['信息流', '官方研报', '分品种'],
    keywords: '金属 信息 速递 新闻 快讯 资讯 研报 知识星球 小作文 权益 xinxi news'
  },
  {
    id: 'metal-supply', title: '金属供应模块', kind: '直达', groups: ['metals'],
    url: 'https://gsy1005.github.io/metals-framework/#/m/supply', description: '矿山产量、冶炼开工、供应扰动与公司产量。',
    tags: ['矿山', '冶炼', '供应扰动'],
    keywords: '金属 供应 矿山 矿产量 冶炼 开工率 扰动 事故 减产 复产 公司 财报 gongying supply'
  },
  {
    id: 'metal-price', title: '金属价格模块', kind: '直达', groups: ['metals'],
    url: 'https://gsy1005.github.io/metals-framework/#/m/price', description: '内外盘价格、升贴水、月差与跨市场比价。',
    tags: ['内外盘', '升贴水', '月差'],
    keywords: '金属 价格 行情 lme shfe 内外盘 升水 贴水 月差 比价 基差 jiage price'
  },
  {
    id: 'direction', title: '星球方向雷达', kind: '直达', groups: ['metals', 'macro'],
    url: 'https://gsy1005.github.io/metals-framework/zsxq.html', description: '近 30 天多空表态统计，观察方向相对偏移。',
    tags: ['多空方向', '市场情绪', '30 天'],
    keywords: '星球 方向 雷达 看多 看空 多空 情绪 观点 市场 direction sentiment'
  },
  {
    id: 'macro-daily', title: '宏观研究日报', kind: '直达', groups: ['macro'],
    url: 'https://gsy1005.github.io/research-workbench/reports/report.html', description: '九维结论、证伪雷达、流动性与外资研报观点。',
    tags: ['每日更新', '九维结论', '研报观点'],
    keywords: '宏观 日报 每日 九维 证伪 雷达 流动性 债市 外汇 外资 研报 观点 ribao daily report'
  },
  {
    id: 'macro-data', title: '宏观数据发布面板', kind: '直达', groups: ['macro', 'data'],
    url: 'https://gsy1005.github.io/research-workbench/reports/report.html', description: '非农、CPI、PPI、GDP、PCE 与分项贡献。',
    tags: ['非农 / CPI', 'GDP / PCE', '分项贡献'],
    keywords: '宏观 数据 发布 非农 cpi ppi gdp pce 通胀 就业 分项 贡献 bls bea fedwatch data'
  }
];

const FILTER_TITLES = {
  all: '全部入口', favorites: '我的收藏', recent: '最近访问',
  metals: '金属研究', macro: '宏观研究', data: '数据查询',
  financials: '财报与产量', strategy: '策略信号'
};
const STORAGE_KEYS = { favorites: 'research-hub-favorites', recent: 'research-hub-recent' };
const validIds = new Set(ENTRIES.map(entry => entry.id));

function readStoredList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? [...new Set(value.filter(id => validIds.has(id)))] : [];
  } catch (_) {
    return [];
  }
}

function writeStoredList(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* 隐私模式下仍可使用搜索 */ }
}

let favorites = new Set(readStoredList(STORAGE_KEYS.favorites));
let recent = readStoredList(STORAGE_KEYS.recent);
let currentFilter = 'all';
let query = '';

const grid = document.getElementById('entryGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const libraryTitle = document.getElementById('libraryTitle');
const filterButtons = [...document.querySelectorAll('[data-filter]')];

function normalizedText(entry) {
  return `${entry.title} ${entry.description} ${entry.tags.join(' ')} ${entry.keywords}`.toLowerCase();
}

function visibleEntries() {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let entries = ENTRIES.filter(entry => {
    if (currentFilter === 'favorites' && !favorites.has(entry.id)) return false;
    if (currentFilter === 'recent' && !recent.includes(entry.id)) return false;
    if (!['all', 'favorites', 'recent'].includes(currentFilter) && !entry.groups.includes(currentFilter)) return false;
    const text = normalizedText(entry);
    return tokens.every(token => text.includes(token));
  });
  if (currentFilter === 'recent' && !query) {
    entries = entries.sort((a, b) => recent.indexOf(a.id) - recent.indexOf(b.id));
  }
  return entries;
}

function starIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 17.03l-5.5 2.89 1.05-6.12L3.1 9.47l6.15-.9Z"/></svg>';
}

function render() {
  const entries = visibleEntries();
  libraryTitle.textContent = FILTER_TITLES[currentFilter];
  resultCount.textContent = `${entries.length} 个入口`;
  clearSearch.hidden = !query;
  emptyState.hidden = entries.length > 0;
  grid.hidden = entries.length === 0;

  if (!entries.length) {
    const emptyTitle = document.getElementById('emptyTitle');
    const emptyText = document.getElementById('emptyText');
    if (currentFilter === 'favorites' && !query) {
      emptyTitle.textContent = '还没有收藏入口';
      emptyText.textContent = '点击卡片右上角的星标，常用入口就能集中在这里。';
    } else if (currentFilter === 'recent' && !query) {
      emptyTitle.textContent = '还没有访问记录';
      emptyText.textContent = '打开过的入口会显示在这里，方便下次继续。';
    } else {
      emptyTitle.textContent = '没有找到相关入口';
      emptyText.textContent = '换个关键词试试，例如“锡”“库存”或“日报”。';
    }
  }

  grid.innerHTML = entries.map(entry => {
    const isFavorite = favorites.has(entry.id);
    return `<article class="entry-card${entry.featured ? ' featured' : ''}">
      <button class="favorite-button" type="button" data-favorite="${entry.id}" aria-label="${isFavorite ? '取消收藏' : '收藏'}${entry.title}" aria-pressed="${isFavorite}">${starIcon()}</button>
      <a class="entry-link" href="${entry.url}" data-entry="${entry.id}">
        <div class="entry-top"><span class="entry-kind">${entry.kind}</span><span class="entry-group">${entry.groups.includes('strategy') ? '策略信号' : entry.groups.includes('financials') ? '财报数据' : entry.groups.includes('data') ? '数据查询' : entry.groups.includes('macro') && !entry.groups.includes('metals') ? '宏观' : '有色研究'}</span></div>
        <h3>${entry.title}</h3>
        <p class="entry-description">${entry.description}</p>
        <div class="entry-bottom"><div class="entry-tags">${entry.tags.map(tag => `<span>${tag}</span>`).join('')}</div><span class="entry-arrow" aria-hidden="true">→</span></div>
      </a>
    </article>`;
  }).join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  });
});

searchInput.addEventListener('input', () => { query = searchInput.value; render(); });
clearSearch.addEventListener('click', () => {
  query = '';
  searchInput.value = '';
  searchInput.focus();
  render();
});

document.getElementById('resetButton').addEventListener('click', () => {
  currentFilter = 'all';
  query = '';
  searchInput.value = '';
  filterButtons.forEach(button => {
    const active = button.dataset.filter === 'all';
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  render();
  searchInput.focus();
});

grid.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    writeStoredList(STORAGE_KEYS.favorites, [...favorites]);
    render();
    const replacement = grid.querySelector(`[data-favorite="${id}"]`);
    if (replacement) replacement.focus();
    return;
  }
  const link = event.target.closest('[data-entry]');
  if (link) {
    recent = [link.dataset.entry, ...recent.filter(id => id !== link.dataset.entry)].slice(0, 12);
    writeStoredList(STORAGE_KEYS.recent, recent);
  }
});

document.addEventListener('keydown', event => {
  const target = event.target;
  const isTyping = target.matches('input, textarea, select') || target.isContentEditable;
  if (event.key === '/' && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput && searchInput.value) {
    query = '';
    searchInput.value = '';
    render();
  }
});

let deferredInstallPrompt = null;
const installButton = document.getElementById('installButton');
const installDialog = document.getElementById('installDialog');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
  installButton.hidden = true;
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

installButton.addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if (choice.outcome === 'accepted') showToast('正在添加到桌面');
    deferredInstallPrompt = null;
  } else {
    installDialog.showModal();
  }
});

document.getElementById('closeDialog').addEventListener('click', () => installDialog.close());
document.getElementById('confirmDialog').addEventListener('click', () => installDialog.close());
installDialog.addEventListener('click', event => {
  if (event.target === installDialog) installDialog.close();
});
window.addEventListener('appinstalled', () => {
  installButton.hidden = true;
  showToast('研究总台已安装');
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname))) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

render();
