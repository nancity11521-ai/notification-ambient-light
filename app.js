/**
 * 氛围灯通知灯效设置 - 多语言交互原型控制器 (DYNAMIC SOUND 光环版)
 */

// 1. 多语言国际化字典 (i18n Dictionary)
const I18N_LOCALES = {
  'zh-CN': {
    notification_title: '通知',
    notification_switch: '通知',
    effective_apps: '生效的应用',
    effect_title: '灯效',
    color_select: '颜色选择',
    effect_breathing: '呼吸',
    effect_pulsing: '脉动',
    effect_streamer: '流光',
    effect_waterflow: '流水',
    effect_color_rhythm: '彩色律动',
    effect_four_color: '四色律动',
    effect_blinking: '脉动',
    color_grass_green: '草绿',
    color_peach_orange: '浅橙',
    color_fog_blue: '灰蓝',
    color_cyan_blue: '青蓝',
    color_dark_green: '深绿',
    color_custom: '自定义'
  },
  'en-US': {
    notification_title: 'Notification',
    notification_switch: 'Notification',
    effective_apps: 'Applied Apps',
    effect_title: 'Light Effect',
    color_select: 'Color Selection',
    effect_breathing: 'Breathing',
    effect_pulsing: 'Pulsing',
    effect_streamer: 'Streamer',
    effect_waterflow: 'Water Flow',
    effect_color_rhythm: 'Color Rhythm',
    effect_four_color: '4-Color Rhythm',
    effect_blinking: 'Pulsing',
    color_grass_green: 'Grass Green',
    color_peach_orange: 'Peach Orange',
    color_fog_blue: 'Haze Blue',
    color_cyan_blue: 'Cyan Blue',
    color_dark_green: 'Deep Green',
    color_custom: 'Custom'
  },
  'de-DE': {
    notification_title: 'Benachrichtigung',
    notification_switch: 'Benachrichtigung',
    effective_apps: 'Angewendete Apps',
    effect_title: 'Lichteffekt',
    color_select: 'Farbauswahl',
    effect_breathing: 'Atmung',
    effect_pulsing: 'Pulsieren',
    effect_streamer: 'Lichtstrom',
    effect_waterflow: 'Fließend',
    effect_color_rhythm: 'Farbrhythmus',
    effect_four_color: '4-Farben-Rhythmus',
    effect_blinking: 'Pulsieren',
    color_grass_green: 'Grasgrün',
    color_peach_orange: 'Pfirsich-Orange',
    color_fog_blue: 'Dunstblau',
    color_cyan_blue: 'Zyanblau',
    color_dark_green: 'Dunkelgrün',
    color_custom: 'Benutzerdefiniert'
  },
  'es-ES': {
    notification_title: 'Notificación',
    notification_switch: 'Notificación',
    effective_apps: 'Aplicaciones activas',
    effect_title: 'Efecto de luz',
    color_select: 'Selección de color',
    effect_breathing: 'Respiración',
    effect_pulsing: 'Pulsación',
    effect_streamer: 'Estela',
    effect_waterflow: 'Flujo continuo',
    effect_color_rhythm: 'Ritmo multicolor',
    effect_four_color: 'Ritmo 4 colores',
    effect_blinking: 'Pulsación',
    color_grass_green: 'Verde hierba',
    color_peach_orange: 'Naranja melocotón',
    color_fog_blue: 'Azul bruma',
    color_cyan_blue: 'Azul cian',
    color_dark_green: 'Verde oscuro',
    color_custom: 'Personalizado'
  },
  'ru-RU': {
    notification_title: 'Уведомление',
    notification_switch: 'Уведомление',
    effective_apps: 'Применяемые приложения',
    effect_title: 'Световой эффект',
    color_select: 'Выбор цвета',
    effect_breathing: 'Дыхание',
    effect_pulsing: 'Пульсация',
    effect_streamer: 'Световой поток',
    effect_waterflow: 'Течение',
    effect_color_rhythm: 'Цветной ритм',
    effect_four_color: '4-цветный ритм',
    effect_blinking: 'Пульсация',
    color_grass_green: 'Травяной зеленый',
    color_peach_orange: 'Персиковый',
    color_fog_blue: 'Туманно-синий',
    color_cyan_blue: 'Циановый',
    color_dark_green: 'Темно-зеленый',
    color_custom: 'Пользовательский'
  },
  'fr-FR': {
    notification_title: 'Notification',
    notification_switch: 'Notification',
    effective_apps: 'Applications actives',
    effect_title: 'Effet lumineux',
    color_select: 'Sélection de couleur',
    effect_breathing: 'Respiration',
    effect_pulsing: 'Pulsation',
    effect_streamer: 'Filet de lumière',
    effect_waterflow: 'Ruissellement',
    effect_color_rhythm: 'Rythme couleur',
    effect_four_color: 'Rythme 4 couleurs',
    effect_blinking: 'Pulsation',
    color_grass_green: 'Vert herbe',
    color_peach_orange: 'Orange pêche',
    color_fog_blue: 'Bleu brume',
    color_cyan_blue: 'Bleu cyan',
    color_dark_green: 'Vert foncé',
    color_custom: 'Personnalisé'
  },
  'ja-JP': {
    notification_title: '通知',
    notification_switch: '通知',
    effective_apps: '適用アプリ',
    effect_title: '点灯エフェクト',
    color_select: 'カラー選択',
    effect_breathing: '呼吸',
    effect_pulsing: 'パルス',
    effect_streamer: 'ストリーマー',
    effect_waterflow: '流水',
    effect_color_rhythm: 'カラーリズム',
    effect_four_color: '4色リズム',
    effect_blinking: 'パルス',
    color_grass_green: 'グラスグリーン',
    color_peach_orange: 'ピーチオレンジ',
    color_fog_blue: 'フォグブルー',
    color_cyan_blue: 'シアンブルー',
    color_dark_green: 'ディープグリーン',
    color_custom: 'カスタム'
  }
};

// 当前应用状态（默认选中深绿，对齐新设计稿）
const state = {
  lang: 'zh-CN',
  effect: 'breathing',
  color: '#00a838',
  colorKey: 'color_dark_green',
  notificationEnabled: true,
  layoutMode: 'scroll',
  activeStyle: 'blue',
  pulseOpt: 'opt_d' // 默认选定方案4 (能量脉冲节拍柱)
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 支持 URL 参数快速指定状态 (?lang=de-DE&mode=grid&effect=pulsing&style=island)
  const params = new URLSearchParams(window.location.search);
  if (params.has('lang') && I18N_LOCALES[params.get('lang')]) {
    state.lang = params.get('lang');
  }
  if (params.has('mode')) {
    state.layoutMode = params.get('mode');
  }
  if (params.has('effect')) {
    state.effect = params.get('effect');
  }
  if (params.has('style')) {
    state.activeStyle = params.get('style');
  }

  if (params.has('pulse_opt')) {
    state.pulseOpt = params.get('pulse_opt');
    switchPulseIcon(state.pulseOpt);
  }

  if (params.has('color')) {
    state.color = params.get('color');
    const matchingCircle = document.querySelector(`.color-circle-btn[data-color="${state.color}"]`);
    if (matchingCircle) {
      document.querySelectorAll('#colorPresetsRow .color-circle-btn').forEach(b => b.classList.remove('active'));
      matchingCircle.classList.add('active');
      state.colorKey = matchingCircle.getAttribute('data-name-key') || 'color_custom';
    }
  }

  applyLayoutMode(state.layoutMode);
  setActiveStyle(state.activeStyle);
  updateLanguageDisplay();
  applyEffect(state.effect);
  selectEffect(state.effect);
  applyHaloColor(state.color);
  startRealtimeClock();
  initColorWheelDrag();

  // 监听胶囊容器横向滚动事件，动态控制左/右双向羽化渐隐
  const track = document.getElementById('capsulesTrack');
  if (track) {
    track.addEventListener('scroll', checkCapsuleOverflow, { passive: true });
  }
});

/**
 * 实时更新状态栏时间
 */
function startRealtimeClock() {
  const timeElem = document.getElementById('statusTime');
  const update = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    if (timeElem) timeElem.textContent = `${h}:${m}`;
  };
  update();
  setInterval(update, 30000);
}

/**
 * 切换多语言
 */
function switchLanguage(langCode) {
  if (!I18N_LOCALES[langCode]) return;
  state.lang = langCode;
  updateLanguageDisplay();
}

/**
 * 将当前语言应用到所有带 data-i18n 的元素
 */
function updateLanguageDisplay() {
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // 更新提示性文本
  const effectKey = `effect_${state.effect}`;
  const hintElem = document.getElementById('currentEffectHint');
  if (hintElem && dict[effectKey]) {
    hintElem.textContent = dict[effectKey];
  }

  const colorLabelElem = document.getElementById('currentColorLabel');
  if (colorLabelElem) {
    colorLabelElem.textContent = dict[state.colorKey] || state.color;
  }

  // 调试状态更新
  const chipEffect = document.getElementById('chipEffect');
  const chipColor = document.getElementById('chipColor');
  if (chipEffect) chipEffect.textContent = `灯效: ${dict[effectKey] || state.effect}`;
  if (chipColor) chipColor.textContent = `颜色: ${dict[state.colorKey] || state.color}`;

  setTimeout(checkCapsuleOverflow, 50);
}

/**
 * 切换灯效排版模式 (支持 5 大优雅模式)
 */
function setLayoutMode(mode) {
  state.layoutMode = mode;
  applyLayoutMode(mode);

  const btnMap = {
    scroll: 'btnModeScroll',
    grid: 'btnModeGrid',
    cards: 'btnModeCards',
    segmented: 'btnModeSegmented',
    carousel: 'btnModeCarousel'
  };

  Object.values(btnMap).forEach(id => {
    const b = document.getElementById(id);
    if (b) b.classList.remove('active');
  });

  const activeBtn = document.getElementById(btnMap[mode]);
  if (activeBtn) activeBtn.classList.add('active');
}

function applyLayoutMode(mode) {
  const scroller = document.getElementById('capsulesScrollerWrap');
  if (!scroller) return;

  scroller.classList.remove(
    'layout-scroll',
    'layout-grid',
    'layout-cards',
    'layout-segmented',
    'layout-carousel'
  );
  scroller.classList.add(`layout-${mode}`);

  checkCapsuleOverflow();
}

function checkCapsuleOverflow() {
  const scroller = document.getElementById('capsulesScrollerWrap');
  const track = document.getElementById('capsulesTrack');
  if (!scroller || !track) return;
  
  if (state.layoutMode === 'scroll') {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const hasOverflow = maxScroll > 2;

    scroller.classList.toggle('has-overflow', hasOverflow);
    // 当向右滑动超过 3px 时，左边缘淡入羽化渐隐遮罩
    scroller.classList.toggle('mask-left', hasOverflow && scrollLeft > 3);
    // 当未滑到最右边缘时，右边缘保持羽化渐隐遮罩
    scroller.classList.toggle('mask-right', hasOverflow && scrollLeft < maxScroll - 3);
  } else {
    scroller.classList.remove('has-overflow', 'mask-left', 'mask-right');
  }
}

/**
 * 切换选中状态的优雅视觉风格
 */
function setActiveStyle(styleName) {
  state.activeStyle = styleName;
  const wrap = document.getElementById('capsulesScrollerWrap');
  if (wrap) {
    wrap.classList.remove('active-style-blue', 'active-style-island', 'active-style-soft');
    wrap.classList.add(`active-style-${styleName}`);
  }

  ['btnStyleBlue', 'btnStyleIsland', 'btnStyleSoft'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.remove('active');
  });
  const curBtnMap = { blue: 'btnStyleBlue', island: 'btnStyleIsland', soft: 'btnStyleSoft' };
  const curBtn = document.getElementById(curBtnMap[styleName]);
  if (curBtn) curBtn.classList.add('active');
}

/**
 * 选择效果（呼吸、闪烁、彩色律动、4色律动）
 */
function selectEffect(effectName) {
  if (!state.notificationEnabled) return;
  state.effect = effectName;

  document.querySelectorAll('.capsule-btn').forEach(btn => {
    const isCur = btn.getAttribute('data-effect') === effectName;
    btn.classList.toggle('active', isCur);
    if (isCur && state.layoutMode === 'scroll') {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  applyEffect(effectName);
  updateLanguageDisplay();
}

/**
 * 应用动效类名到设备发光环
 */
function applyEffect(effectName) {
  const mockup = document.querySelector('.device-mockup-new');
  if (!mockup) return;

  mockup.classList.remove(
    'fx-breathing',
    'fx-pulsing',
    'fx-streamer',
    'fx-waterflow',
    'fx-color_rhythm',
    'fx-four_color',
    'fx-blinking',
    'fx-off'
  );

  if (!state.notificationEnabled) {
    mockup.classList.add('fx-off');
    return;
  }

  mockup.classList.add(`fx-${effectName}`);
}

/**
 * 点击 5 款预设单色圆圈
 */
function selectPresetColor(btnElem, colorHex, nameKey) {
  if (!state.notificationEnabled) return;

  state.color = colorHex;
  state.colorKey = nameKey;

  document.querySelectorAll('#colorPresetsRow .color-circle-btn').forEach(b => b.classList.remove('active'));
  btnElem.classList.add('active');
  document.documentElement.style.setProperty('--selected-preset-ring', colorHex);

  // 同步更新色轮把手颜色与位置（根据固定预设色预估位置）
  const presetPositions = {
    '#55c800': { left: '26%', top: '78%' },
    '#fca86c': { left: '80%', top: '74%' },
    '#7ba5e4': { left: '22%', top: '30%' },
    '#61e3d7': { left: '16%', top: '55%' },
    '#00a838': { left: '32%', top: '84%' }
  };
  const pos = presetPositions[colorHex] || { left: '32%', top: '84%' };
  const thumb = document.getElementById('wheelThumb');
  const thumbCore = document.getElementById('thumbCore');
  if (thumb) {
    thumb.style.left = pos.left;
    thumb.style.top = pos.top;
  }
  if (thumbCore) {
    thumbCore.style.backgroundColor = colorHex;
  }

  applyHaloColor(colorHex);
  updateLanguageDisplay();
}

/**
 * 全彩拾色大圆盘点击与拖拽拾色
 */
function pickColorFromWheel(e) {
  if (!state.notificationEnabled) return;
  const box = document.getElementById('colorWheelBox');
  if (!box) return;

  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.hypot(dx, dy);
  const maxRadius = rect.width / 2;

  // 限制把手在圆盘边缘内
  const clampedDist = Math.min(dist, maxRadius - 2);
  const angleRad = Math.atan2(dy, dx);
  const thumbX = cx + Math.cos(angleRad) * clampedDist;
  const thumbY = cy + Math.sin(angleRad) * clampedDist;

  const thumb = document.getElementById('wheelThumb');
  const thumbCore = document.getElementById('thumbCore');
  if (thumb) {
    thumb.style.left = `${(thumbX / rect.width) * 100}%`;
    thumb.style.top = `${(thumbY / rect.height) * 100}%`;
  }

  // 顺时针色相映射 (3点钟=0deg 红, 6点钟=90deg 绿, 9点钟=180deg 青, 12点钟=270deg 紫)
  let deg = (angleRad * 180) / Math.PI;
  if (deg < 0) deg += 360;

  const sat = Math.min(1, dist / maxRadius);
  const pickedHex = hslToHex(deg, sat * 100, 50);

  state.color = pickedHex;
  state.colorKey = 'color_custom';

  if (thumbCore) {
    thumbCore.style.backgroundColor = pickedHex;
  }

  // 清除预设圆圈的选中状态
  document.querySelectorAll('#colorPresetsRow .color-circle-btn').forEach(b => b.classList.remove('active'));

  applyHaloColor(pickedHex);
  updateLanguageDisplay();
}

/**
 * 监听色盘触摸/拖拽操作
 */
function initColorWheelDrag() {
  const box = document.getElementById('colorWheelBox');
  if (!box) return;
  let isDragging = false;

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    pickColorFromWheel({ clientX, clientY });
  };

  box.addEventListener('mousedown', (e) => {
    isDragging = true;
    pickColorFromWheel(e);
  });
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', () => { isDragging = false; });

  box.addEventListener('touchstart', (e) => {
    isDragging = true;
    pickColorFromWheel(e.touches[0]);
  }, { passive: true });
  window.addEventListener('touchmove', handleMove, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
}

/**
 * 将当前拾取的颜色应用到 DYNAMIC SOUND 环形氛围灯
 */
function applyHaloColor(hexColor) {
  document.documentElement.style.setProperty('--active-halo-color', hexColor);
  const cleanHex = hexColor.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 168;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 56;
  document.documentElement.style.setProperty('--active-halo-rgb', `${r}, ${g}, ${b}`);
}

/**
 * HSL 转 HEX 工具函数
 */
function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * 通知总开关
 */
/**
 * 脉动 (Pulsing) 图标候选方案字典
 */
const PULSE_ICONS = {
  // 方案 A: 经典心电脉冲波 (ECG Pulse Wave)
  opt_a: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <defs>
      <linearGradient id="gradPulseA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <path d="M2 12h4l2.5-6.5 3.5 13 3-9 2 4h5" stroke="url(#gradPulseA)"/>
    <circle cx="8.5" cy="5.5" r="1.5" fill="url(#gradPulseA)"/>
  </svg>`,

  // 方案 B: 同心圆环脉冲波 (Concentric Ripple)
  opt_b: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.3" stroke-linecap="round">
    <defs>
      <linearGradient id="gradPulseB" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="3.2" fill="url(#gradPulseB)"/>
    <path d="M7 8a7 7 0 0 0 0 8M17 8a7 7 0 0 1 0 8" stroke="url(#gradPulseB)"/>
    <path d="M4 5a11 11 0 0 0 0 14M20 5a11 11 0 0 1 0 14" stroke="url(#gradPulseB)" stroke-opacity="0.5"/>
  </svg>`,

  // 方案 C: 环形内置心跳波 (Ring Pulse)
  opt_c: `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <defs>
      <linearGradient id="gradPulseC" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8.5" stroke="url(#gradPulseC)" stroke-width="1.8" stroke-opacity="0.32"/>
    <path d="M3.5 12h3.5l2-4.5 3 9 2.5-6.5 2 3.5h4" stroke="url(#gradPulseC)" stroke-width="2.4"/>
  </svg>`,

  // 方案 D: 能量脉冲节拍柱 (Pulse Equalizer)
  opt_d: `<svg viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="gradPulseD" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <rect x="3.5" y="9" width="3" height="6" rx="1.5" fill="url(#gradPulseD)" opacity="0.6"/>
    <rect x="8.5" y="4.5" width="3" height="15" rx="1.5" fill="url(#gradPulseD)"/>
    <rect x="13.5" y="7.5" width="3" height="9" rx="1.5" fill="url(#gradPulseD)" opacity="0.85"/>
    <rect x="18.5" y="10.5" width="3" height="3" rx="1.5" fill="url(#gradPulseD)" opacity="0.45"/>
  </svg>`,

  // 方案 E: 高能双折电脉冲 (Sharp Bolt)
  opt_e: `<svg viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="gradPulseE" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#gradPulseE)"/>
  </svg>`
};

/**
 * 切换脉动图标候选方案
 */
function switchPulseIcon(key) {
  const iconWrap = document.getElementById('pulsingIconWrap');
  if (iconWrap && PULSE_ICONS[key]) {
    iconWrap.innerHTML = PULSE_ICONS[key];
  }
  document.querySelectorAll('.pulse-opt-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-pulse-opt') === key);
  });
}

/**
 * 通知总开关
 */
function toggleNotification(enabled) {
  state.notificationEnabled = enabled;
  const mockup = document.querySelector('.device-mockup-new');
  
  if (!enabled) {
    if (mockup) mockup.classList.add('fx-off');
    document.querySelectorAll('.capsule-btn, .color-circle-btn, .color-wheel-box').forEach(btn => {
      btn.style.opacity = '0.35';
      btn.style.pointerEvents = 'none';
    });
  } else {
    if (mockup) mockup.classList.remove('fx-off');
    document.querySelectorAll('.capsule-btn, .color-circle-btn, .color-wheel-box').forEach(btn => {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    });
    applyEffect(state.effect);
  }
}
