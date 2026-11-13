/**
 * 手机氛围灯效果设置 - 多场景与多语言交互系统控制器 (DYNAMIC SOUND)
 */

// 1. 七国语言国际化字典 (i18n Dictionary)
const I18N_LOCALES = {
  'zh-CN': {
    page_home: '幻彩脉动',
    page_call: '来电',
    page_notification: '通知',
    page_charging: '充电',
    page_music: '音乐',
    page_power: '开关机',
    magic_pulse_switch: '幻彩脉动',
    magic_pulse_hint: '在低电量、省电模式、勿扰模式、睡眠模式下幻彩脉动功能不可用',
    active_time: '启用时段',
    active_time_all_day: '全天启用',
    brightness: '亮度',
    scene_party: '派对',
    scene_call: '来电',
    scene_notification: '通知',
    scene_charging: '充电',
    scene_music: '音乐',
    scene_power: '开关机',
    status_enabled: '已开启',
    status_disabled: '已关闭',
    effective_apps: '生效的应用',
    effect_title: '灯效',
    color_select: '颜色选择',
    effect_breathing: '呼吸',
    effect_pulsing: '脉动',
    effect_streamer: '流光',
    effect_waterflow: '流水',
    effect_color_rhythm: '彩色律动',
    effect_four_color: '四色律动',
    color_grass_green: '草绿',
    color_peach_orange: '浅橙',
    color_fog_blue: '灰蓝',
    color_cyan_blue: '青蓝',
    color_dark_green: '深绿',
    color_custom: '自定义',
    charging_duration: '充电时间显示时长',
    charging_duration_15s: '15秒',
    battery_adaptive: '根据电池电量变化',
    in_call_breathing: '通话中呼吸',
    page_active_time: '启用时段',
    active_time_scheduled: '定时启用',
    time_start: '开始',
    time_end: '结束',
  },
  'en-US': {
    page_home: 'Dynamic Pulse',
    page_call: 'Incoming Call',
    page_notification: 'Notification',
    page_charging: 'Charging',
    page_music: 'Music',
    page_power: 'Power On/Off',
    magic_pulse_switch: 'Dynamic Pulse',
    magic_pulse_hint: 'Dynamic Pulse is unavailable in low battery, power saving, DND, or sleep mode',
    active_time: 'Active Hours',
    active_time_all_day: 'All Day',
    brightness: 'Brightness',
    scene_party: 'Party',
    scene_call: 'Incoming Call',
    scene_notification: 'Notification',
    scene_charging: 'Charging',
    scene_music: 'Music',
    scene_power: 'Power On/Off',
    status_enabled: 'Enabled',
    status_disabled: 'Disabled',
    effective_apps: 'Applied Apps',
    effect_title: 'Light Effect',
    color_select: 'Color Selection',
    effect_breathing: 'Breathing',
    effect_pulsing: 'Pulsing',
    effect_streamer: 'Streamer',
    effect_waterflow: 'Water Flow',
    effect_color_rhythm: 'Color Rhythm',
    effect_four_color: '4-Color Rhythm',
    color_grass_green: 'Grass Green',
    color_peach_orange: 'Peach Orange',
    color_fog_blue: 'Haze Blue',
    color_cyan_blue: 'Cyan Blue',
    color_dark_green: 'Deep Green',
    color_custom: 'Custom',
    charging_duration: 'Charging Display Duration',
    charging_duration_15s: '15s',
    battery_adaptive: 'Adaptive to Battery Level',
    in_call_breathing: 'Breathe During Call',
    page_active_time: 'Active Schedule',
    active_time_scheduled: 'Scheduled',
    time_start: 'Start',
    time_end: 'End',
  },
  'de-DE': {
    page_home: 'Farbpulsieren',
    page_call: 'Eingehender Anruf',
    page_notification: 'Benachrichtigung',
    page_charging: 'Laden',
    page_music: 'Musik',
    page_power: 'Ein-/Ausschalten',
    magic_pulse_switch: 'Farbpulsieren',
    magic_pulse_hint: 'Farbpulsieren ist im Energiespar-, Nicht-Stören- oder Schlafmodus nicht verfügbar',
    active_time: 'Aktive Zeit',
    active_time_all_day: 'Ganztägig',
    brightness: 'Helligkeit',
    scene_party: 'Party',
    scene_call: 'Eingehender Anruf',
    scene_notification: 'Benachrichtigung',
    scene_charging: 'Laden',
    scene_music: 'Musik',
    scene_power: 'Ein-/Ausschalten',
    status_enabled: 'Aktiviert',
    status_disabled: 'Deaktiviert',
    effective_apps: 'Angewendete Apps',
    effect_title: 'Lichteffekt',
    color_select: 'Farbauswahl',
    effect_breathing: 'Atmung',
    effect_pulsing: 'Pulsieren',
    effect_streamer: 'Lichtstrom',
    effect_waterflow: 'Fließend',
    effect_color_rhythm: 'Farbrhythmus',
    effect_four_color: '4-Farben-Rhythmus',
    color_grass_green: 'Grasgrün',
    color_peach_orange: 'Pfirsich-Orange',
    color_fog_blue: 'Dunstblau',
    color_cyan_blue: 'Zyanblau',
    color_dark_green: 'Dunkelgrün',
    color_custom: 'Benutzerdefiniert',
    charging_duration: 'Ladeanzeigedauer',
    charging_duration_15s: '15 Sek.',
    battery_adaptive: 'Akkustand-abhängig',
    in_call_breathing: 'Atmen während Anruf',
    page_active_time: 'Aktivierungszeitraum',
    active_time_scheduled: 'Zeitgesteuert',
    time_start: 'Start',
    time_end: 'Ende',
  },
  'es-ES': {
    page_home: 'Pulso dinámico',
    page_call: 'Llamada entrante',
    page_notification: 'Notificación',
    page_charging: 'Carga',
    page_music: 'Música',
    page_power: 'Encendido/Apagado',
    magic_pulse_switch: 'Pulso dinámico',
    magic_pulse_hint: 'El pulso dinámico no está disponible en batería baja, ahorro de energía, no molestar o modo sueño',
    active_time: 'Horario activo',
    active_time_all_day: 'Todo el día',
    brightness: 'Brillo',
    scene_party: 'Fiesta',
    scene_call: 'Llamada entrante',
    scene_notification: 'Notificación',
    scene_charging: 'Carga',
    scene_music: 'Música',
    scene_power: 'Encendido/Apagado',
    status_enabled: 'Activado',
    status_disabled: 'Desactivado',
    effective_apps: 'Aplicaciones activas',
    effect_title: 'Efecto de luz',
    color_select: 'Selección de color',
    effect_breathing: 'Respiración',
    effect_pulsing: 'Pulsación',
    effect_streamer: 'Estela',
    effect_waterflow: 'Flujo continuo',
    effect_color_rhythm: 'Ritmo multicolor',
    effect_four_color: 'Ritmo 4 colores',
    color_grass_green: 'Verde hierba',
    color_peach_orange: 'Naranja melocotón',
    color_fog_blue: 'Azul bruma',
    color_cyan_blue: 'Azul cian',
    color_dark_green: 'Verde oscuro',
    color_custom: 'Personalizado',
    charging_duration: 'Duración de pantalla de carga',
    charging_duration_15s: '15 s',
    battery_adaptive: 'Cambiar según nivel de batería',
    in_call_breathing: 'Respiración en llamada',
    page_active_time: 'Horario de activación',
    active_time_scheduled: 'Programado',
    time_start: 'Inicio',
    time_end: 'Fin',
  },
  'ru-RU': {
    page_home: 'Динамический пульс',
    page_call: 'Входящий вызов',
    page_notification: 'Уведомление',
    page_charging: 'Зарядка',
    page_music: 'Музыка',
    page_power: 'Вкл/Выкл питания',
    magic_pulse_switch: 'Динамический пульс',
    magic_pulse_hint: 'Динамический пульс недоступен при низком заряде, в режиме энергосбережения, «Не беспокоить» или «Сон»',
    active_time: 'Время работы',
    active_time_all_day: 'Весь день',
    brightness: 'Яркость',
    scene_party: 'Вечеринка',
    scene_call: 'Входящий вызов',
    scene_notification: 'Уведомление',
    scene_charging: 'Зарядка',
    scene_music: 'Музыка',
    scene_power: 'Вкл/Выкл питания',
    status_enabled: 'Включено',
    status_disabled: 'Отключено',
    effective_apps: 'Применяемые приложения',
    effect_title: 'Световой эффект',
    color_select: 'Выбор цвета',
    effect_breathing: 'Дыхание',
    effect_pulsing: 'Пульсация',
    effect_streamer: 'Световой поток',
    effect_waterflow: 'Течение',
    effect_color_rhythm: 'Цветной ритм',
    effect_four_color: '4-цветный ритм',
    color_grass_green: 'Травяной зеленый',
    color_peach_orange: 'Персиковый',
    color_fog_blue: 'Туманно-синий',
    color_cyan_blue: 'Циановый',
    color_dark_green: 'Темно-зеленый',
    color_custom: 'Пользовательский',
    charging_duration: 'Время отображения зарядки',
    charging_duration_15s: '15 сек',
    battery_adaptive: 'Изменение по уровню заряда',
    in_call_breathing: 'Дыхание во время вызова',
    page_active_time: 'Период активности',
    active_time_scheduled: 'По расписанию',
    time_start: 'Начало',
    time_end: 'Конец',
  },
  'fr-FR': {
    page_home: 'Pulsation dynamique',
    page_call: 'Appel entrant',
    page_notification: 'Notification',
    page_charging: 'Charge',
    page_music: 'Musique',
    page_power: 'Marche/Arrêt',
    magic_pulse_switch: 'Pulsation dynamique',
    magic_pulse_hint: 'Pulsation dynamique indisponible en batterie faible, économie d’énergie, Ne pas déranger ou veille',
    active_time: 'Plage horaire',
    active_time_all_day: 'Toute la journée',
    brightness: 'Luminosité',
    scene_party: 'Fête',
    scene_call: 'Appel entrant',
    scene_notification: 'Notification',
    scene_charging: 'Charge',
    scene_music: 'Musique',
    scene_power: 'Marche/Arrêt',
    status_enabled: 'Activé',
    status_disabled: 'Désactivé',
    effective_apps: 'Applications actives',
    effect_title: 'Effet lumineux',
    color_select: 'Sélection de couleur',
    effect_breathing: 'Respiration',
    effect_pulsing: 'Pulsation',
    effect_streamer: 'Filet de lumière',
    effect_waterflow: 'Ruissellement',
    effect_color_rhythm: 'Rythme couleur',
    effect_four_color: 'Rythme 4 couleurs',
    color_grass_green: 'Vert herbe',
    color_peach_orange: 'Orange pêche',
    color_fog_blue: 'Bleu brume',
    color_cyan_blue: 'Bleu cyan',
    color_dark_green: 'Vert foncé',
    color_custom: 'Personnalisé',
    charging_duration: 'Durée d’affichage de charge',
    charging_duration_15s: '15 s',
    battery_adaptive: 'Adapter selon niveau de batterie',
    in_call_breathing: 'Respiration pendant l’appel',
    page_active_time: "Période d'activation",
    active_time_scheduled: 'Planifié',
    time_start: 'Début',
    time_end: 'Fin',
  },
  'ja-JP': {
    page_home: 'ダイナミックパルス',
    page_call: '着信',
    page_notification: '通知',
    page_charging: '充電',
    page_music: '音楽',
    page_power: '電源オン/オフ',
    magic_pulse_switch: 'ダイナミックパルス',
    magic_pulse_hint: '低バッテリー、省電力、おやすみ、サイレントモード時は利用できません',
    active_time: '有効時間帯',
    active_time_all_day: '終日',
    brightness: '明るさ',
    scene_party: 'パーティー',
    scene_call: '着信',
    scene_notification: '通知',
    scene_charging: '充電',
    scene_music: '音楽',
    scene_power: '電源オン/オフ',
    status_enabled: 'オン',
    status_disabled: 'オフ',
    effective_apps: '適用アプリ',
    effect_title: '点灯エフェクト',
    color_select: 'カラー選択',
    effect_breathing: '呼吸',
    effect_pulsing: 'パルス',
    effect_streamer: 'ストリーマー',
    effect_waterflow: '流水',
    effect_color_rhythm: 'カラーリズム',
    effect_four_color: '4色リズム',
    color_grass_green: 'グラスグリーン',
    color_peach_orange: 'ピーチオレンジ',
    color_fog_blue: 'フォグブルー',
    color_cyan_blue: 'シアンブルー',
    color_dark_green: 'ディープグリーン',
    color_custom: 'カスタム',
    charging_duration: '充電表示時間',
    charging_duration_15s: '15秒',
    battery_adaptive: 'バッテリー残量に連動',
    in_call_breathing: '通話中呼吸',
    page_active_time: '有効時間帯',
    active_time_scheduled: 'スケジュール有効',
    time_start: '開始',
    time_end: '終了',
  }
};

// 2. 全局应用与场景独立状态
const state = {
  lang: 'zh-CN',
  currentPage: 'home',
  globalBrightness: 80,
  activeStyle: 'blue',
  pulseOpt: 'opt_d',
  scenes: {
    home: {
      enabled: true,
      partyEnabled: true,
      effect: 'color_rhythm',
      color: '#00a838'
    },
    call: {
      enabled: true,
      effect: 'breathing',
      color: '#00e600',
      colorKey: 'color_grass_green',
      inCallBreathe: true,
      inCallColor: '#00e600',
      inCallColorKey: 'color_grass_green'
    },
    notification: {
      enabled: true,
      effect: 'breathing',
      color: '#00e600',
      colorKey: 'color_grass_green'
    },
    charging: {
      enabled: true,
      effect: 'waterflow',
      color: '#00a838',
      duration: '15s',
      batteryAdaptive: true
    },
    music: {
      enabled: true,
      effect: 'color_rhythm',
      color: '#00a838'
    },
    power: {
      enabled: true,
      effect: 'pulsing',
      color: '#00a838'
    }
  },
  schedule: {
    mode: 'scheduled',
    startTime: '14:26',
    endTime: '23:00'
  }
};

// 3. 初始化
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('lang') && I18N_LOCALES[params.get('lang')]) {
    state.lang = params.get('lang');
    const select = document.getElementById('langSelect');
    if (select) select.value = state.lang;
    const desktopSelect = document.getElementById('desktopLangSelect');
    if (desktopSelect) desktopSelect.value = state.lang;
  }

  if (params.has('page') && state.scenes[params.get('page')]) {
    state.currentPage = params.get('page');
  }

  if (params.has('brightness')) {
    const b = parseInt(params.get('brightness'), 10);
    if (!isNaN(b) && b >= 20 && b <= 100) {
      state.globalBrightness = b;
    }
  }

  if (params.has('master')) {
    const m = params.get('master').toLowerCase();
    if (m === '0' || m === 'false' || m === 'off') {
      state.scenes.home.enabled = false;
      const sw = document.getElementById('switch_master');
      if (sw) sw.checked = false;
    }
  }

  // 初始化各场景的动效和颜色
  initAllScenes();

  // 设置初始页面导航
  navigateTo(state.currentPage);
  updateLanguageDisplay();
  startRealtimeClock();
  setGlobalBrightness(state.globalBrightness);
  toggleMasterPulse(state.scenes.home.enabled);

  // 绑定所有胶囊滚动容器的双向羽化渐隐监听
  initAllScrollersOverflow();
});

/**
 * 初始化所有场景的初始状态、动效与拾色
 */
function initAllScenes() {
  Object.keys(state.scenes).forEach(sceneId => {
    const scData = state.scenes[sceneId];
    if (scData.effect) {
      applySceneEffectToMockup(sceneId, scData.effect);
    }
    if (scData.color) {
      applyHaloColor(scData.color);
    }
  });
}

/**
 * 页面平滑路由切换
 */
function navigateTo(pageId) {
  if (!state.scenes[pageId] && pageId !== 'home' && pageId !== 'active_time') return;
  state.currentPage = pageId;

  // 1. 切换视图显隐
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });
  const targetView = document.getElementById(`view_${pageId}`);
  if (targetView) {
    targetView.classList.add('active');
    targetView.scrollTop = 0;
  }

  // 2. 控制顶部导航栏显隐（主页隐藏导航栏直入硬件模块，二级页面显示返回箭头与标题）
  const navBar = document.getElementById('mainNavBar');
  if (navBar) {
    navBar.style.display = pageId === 'home' ? 'none' : 'flex';
  }
  const btnBack = document.getElementById('btnNavBack');
  if (btnBack) {
    btnBack.style.display = pageId === 'home' ? 'none' : 'flex';
  }

  // 3. 动态更新顶部标题
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const titleElem = document.getElementById('navTitle');
  if (titleElem) {
    titleElem.textContent = dict[`page_${pageId}`] || '幻彩脉动';
  }

  // 4. 同步侧边栏控制台激活按钮
  document.querySelectorAll('.page-picker-toggles .mode-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const curNavBtn = document.getElementById(`btnNav_${pageId}`);
  if (curNavBtn) curNavBtn.classList.add('active');

  // 5. 更新状态栏胶囊与当前场景的发光环颜色动效
  if (state.scenes[pageId]) {
    applyHaloColor(state.scenes[pageId].color || '#00e600');
    applySceneEffectToMockup(pageId, state.scenes[pageId].effect);
  }
  updateStatusChips();

  // 6. 检查胶囊溢出状态
  setTimeout(() => {
    checkCapsuleOverflowForScene(pageId);
  }, 50);
}

/**
 * 返回到主首页
 */
function goBackToHome() {
  navigateTo('home');
}

// 各场景明确允许的专属灯效配置表
const SCENE_ALLOWED_EFFECTS = {
  call: ['breathing', 'pulsing'],
  notification: ['breathing', 'pulsing'],
  charging: ['waterflow', 'streamer'],
  music: ['color_rhythm', 'four_color', 'breathing'],
  power: ['breathing', 'pulsing']
};

/**
 * 选择各场景的灯效（严格遵循各场景支持的灯效列表）
 */
function selectSceneEffect(sceneId, effectName) {
  const scData = state.scenes[sceneId];
  if (!scData || !scData.enabled) return;

  const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
  if (allowed && !allowed.includes(effectName)) {
    return;
  }

  scData.effect = effectName;

  // 1. 更新当前场景内胶囊的高亮选中态
  const track = document.getElementById(`capsulesTrack_${sceneId}`);
  if (track) {
    track.querySelectorAll('.capsule-btn').forEach(btn => {
      const isCur = btn.getAttribute('data-effect') === effectName;
      btn.classList.toggle('active', isCur);
      if (isCur) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // 2. 更新该场景顶部 DYNAMIC SOUND 设备动效
  applySceneEffectToMockup(sceneId, effectName);

  // 3. 同步联动颜色选择中的光环预设选中态（单色 vs 彩色 vs 四色）
  ['main', 'incall'].forEach(subKey => {
    const boxId = `${sceneId}_${subKey}`;
    const presetsRow = document.getElementById(`colorPresets_${boxId}`);
    if (presetsRow) {
      if (effectName === 'color_rhythm') {
        presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
        const rainbowBtn = presetsRow.querySelector('.color-ring-btn.ring-rainbow');
        if (rainbowBtn) rainbowBtn.classList.add('active');
      } else if (effectName === 'four_color') {
        presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
        const fourBtn = presetsRow.querySelector('.color-ring-btn.ring-four-color');
        if (fourBtn) fourBtn.classList.add('active');
      } else {
        const curColor = subKey === 'incall' ? scData.inCallColor : scData.color;
        presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-color') === curColor);
        });
      }
    }
  });

  // 4. 更新提示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hintElem = document.getElementById(`effectHint_${sceneId}`);
  if (hintElem && dict[`effect_${effectName}`]) {
    hintElem.textContent = dict[`effect_${effectName}`];
  }

  updateStatusChips();
}

/**
 * 应用动效类名到具体场景的设备发光环
 */
function applySceneEffectToMockup(sceneId, effectName) {
  const mockup = document.getElementById(`mockup_${sceneId}`);
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

  const scData = state.scenes[sceneId];
  if (!scData || !scData.enabled) {
    mockup.classList.add('fx-off');
    return;
  }

  mockup.classList.add(`fx-${effectName}`);
}

/**
 * 点击颜色选择中的多色圆环（彩色律动 / 四色律动）
 */
function selectSceneColorRing(sceneId, ringType, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  const boxId = `${sceneId}_${subKey}`;
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = presetsRow.querySelector(`.color-ring-btn.ring-${ringType}`);
    if (targetBtn) targetBtn.classList.add('active');
  }

  const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
  if (ringType === 'rainbow') {
    if (allowed && allowed.includes('color_rhythm')) {
      selectSceneEffect(sceneId, 'color_rhythm');
    }
  } else if (ringType === 'four_color') {
    if (allowed && allowed.includes('four_color')) {
      selectSceneEffect(sceneId, 'four_color');
    }
  }
}

/**
 * 场景内点击纯色中空环预设
 */
function selectSceneColor(sceneId, colorHex, colorKey, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  if (subKey === 'incall') {
    scData.inCallColor = colorHex;
    scData.inCallColorKey = colorKey;
  } else {
    scData.color = colorHex;
    scData.colorKey = colorKey;
    // 若原先是彩色律动或四色律动，切换到纯色时恢复单色呼吸效果（若支持）或首选允许效果
    if (scData.effect === 'color_rhythm' || scData.effect === 'four_color') {
      const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
      const fallbackEffect = (allowed && allowed.includes('breathing')) ? 'breathing' : (allowed ? allowed[0] : 'breathing');
      scData.effect = fallbackEffect;
      applySceneEffectToMockup(sceneId, fallbackEffect);
      const track = document.getElementById(`capsulesTrack_${sceneId}`);
      if (track) {
        track.querySelectorAll('.capsule-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-effect') === fallbackEffect);
        });
      }
    }
  }

  // 1. 更新预设圆环高亮
  const boxId = `${sceneId}_${subKey}`;
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-color') === colorHex);
    });
  }

  // 2. 同步更新色轮把手
  updateWheelThumb(boxId, colorHex);

  // 3. 更新提示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hint = document.getElementById(`colorHint_${boxId}`);
  if (hint && dict[colorKey]) {
    hint.textContent = dict[colorKey];
  }

  // 4. 应用颜色到发光环及胶囊联动描边
  applyHaloColor(colorHex);
  updateStatusChips();
}

/**
 * 在色轮上取色
 */
function pickSceneWheelColor(e, sceneId, subKey = 'main') {
  const scData = state.scenes[sceneId];
  if (!scData) return;

  const boxId = `${sceneId}_${subKey}`;
  const box = document.getElementById(`colorWheel_${boxId}`);
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

  const clampedDist = Math.min(dist, maxRadius - 2);
  const angleRad = Math.atan2(dy, dx);
  const thumbX = cx + Math.cos(angleRad) * clampedDist;
  const thumbY = cy + Math.sin(angleRad) * clampedDist;

  const thumb = document.getElementById(`wheelThumb_${boxId}`);
  const thumbCore = document.getElementById(`thumbCore_${boxId}`);
  if (thumb) {
    thumb.style.left = `${(thumbX / rect.width) * 100}%`;
    thumb.style.top = `${(thumbY / rect.height) * 100}%`;
  }

  let deg = (angleRad * 180) / Math.PI;
  if (deg < 0) deg += 360;

  const sat = Math.min(1, dist / maxRadius);
  const pickedHex = hslToHex(deg, sat * 100, 50);

  if (subKey === 'incall') {
    scData.inCallColor = pickedHex;
    scData.inCallColorKey = 'color_custom';
  } else {
    scData.color = pickedHex;
    scData.colorKey = 'color_custom';
    if (scData.effect === 'color_rhythm' || scData.effect === 'four_color') {
      const allowed = SCENE_ALLOWED_EFFECTS[sceneId];
      const fallbackEffect = (allowed && allowed.includes('breathing')) ? 'breathing' : (allowed ? allowed[0] : 'breathing');
      scData.effect = fallbackEffect;
      applySceneEffectToMockup(sceneId, fallbackEffect);
      const track = document.getElementById(`capsulesTrack_${sceneId}`);
      if (track) {
        track.querySelectorAll('.capsule-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-effect') === fallbackEffect);
        });
      }
    }
  }

  if (thumbCore) thumbCore.style.backgroundColor = pickedHex;

  // 联动快捷圆环选中态
  const presetsRow = document.getElementById(`colorPresets_${boxId}`);
  if (presetsRow) {
    presetsRow.querySelectorAll('.color-ring-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-color') === pickedHex);
    });
  }

  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const hint = document.getElementById(`colorHint_${boxId}`);
  if (hint) hint.textContent = dict['color_custom'] || '自定义';

  applyHaloColor(pickedHex);
  updateStatusChips();
}

function updateWheelThumb(boxId, colorHex) {
  const presetPositions = {
    '#00e600': { left: '35%', top: '90%' },
    '#ffa850': { left: '80%', top: '74%' },
    '#4ca8ff': { left: '22%', top: '30%' },
    '#00f5e6': { left: '16%', top: '55%' }
  };
  const pos = presetPositions[colorHex] || { left: '35%', top: '90%' };
  const thumb = document.getElementById(`wheelThumb_${boxId}`);
  const thumbCore = document.getElementById(`thumbCore_${boxId}`);
  if (thumb) {
    thumb.style.left = pos.left;
    thumb.style.top = pos.top;
  }
  if (thumbCore) {
    thumbCore.style.backgroundColor = colorHex;
  }
}

/**
 * 幻彩脉动总开关
 * 关闭时：示意图不亮（发光环熄灭 + 切换至未通电物理网罩），其他区域全部置灰并禁用操作
 */
function toggleMasterPulse(checked) {
  state.scenes.home.enabled = checked;
  const viewHome = document.getElementById('view_home');
  const mockup = document.getElementById('mockup_home');
  const mockupImg = mockup ? mockup.querySelector('.device-clean-img') : null;

  if (viewHome) {
    viewHome.classList.toggle('master-off', !checked);
  }

  if (mockup) {
    mockup.classList.toggle('fx-off', !checked);
  }

  if (mockupImg) {
    mockupImg.src = checked ? './assets/device_clean.png' : './assets/device_clean_off.png';
  }

  // 禁用/启用受控控件
  const partySwitch = document.getElementById('switch_party');
  if (partySwitch) partySwitch.disabled = !checked;
  const slider = document.getElementById('homeBrightnessSlider');
  if (slider) slider.disabled = !checked;
  document.querySelectorAll('#masterControlledContent button').forEach(btn => btn.disabled = !checked);
}

/**
 * 启用时段点击拦截（总开关关闭时禁止进入）
 */
function handleActiveTimeRowClick() {
  if (!state.scenes.home.enabled) return;
  navigateTo('active_time');
}

/**
 * 场景行点击拦截（总开关关闭时禁止进入）
 */
function handleSceneRowClick(sceneId) {
  if (!state.scenes.home.enabled) return;
  navigateTo(sceneId);
}

/**
 * 派对模式开关
 */
function togglePartyMode(checked) {
  state.scenes.home.partyEnabled = checked;
  const mockup = document.getElementById('mockup_home');
  if (mockup) {
    if (checked) {
      mockup.classList.remove('fx-off');
      mockup.classList.add('fx-color_rhythm');
    } else {
      mockup.classList.remove('fx-color_rhythm');
      mockup.classList.add('fx-breathing');
    }
  }
}

/**
 * 场景开关切换 (来电, 通知, 充电, 音乐, 开关机)
 */
function toggleSceneSwitch(sceneId, checked) {
  const scData = state.scenes[sceneId];
  if (!scData) return;
  scData.enabled = checked;

  // 更新首页状态指示文案
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const statusElem = document.getElementById(`statusText_${sceneId}`);
  if (statusElem) {
    statusElem.textContent = checked ? (dict['status_enabled'] || '已开启') : (dict['status_disabled'] || '已关闭');
  }

  // 更新当前页面设备环状态
  const mockup = document.getElementById(`mockup_${sceneId}`);
  if (mockup) {
    if (!checked) {
      mockup.classList.add('fx-off');
    } else {
      mockup.classList.remove('fx-off');
      applySceneEffectToMockup(sceneId, scData.effect);
    }
  }
}

function toggleInCallBreathe(checked) {
  state.scenes.call.inCallBreathe = checked;
}

function toggleBatteryAdaptive(checked) {
  state.scenes.charging.batteryAdaptive = checked;
}

/**
 * 全局亮度调节（线条实时跟随 + 顶部灯光亮度和光晕毫秒级实时驱动）
 */
function handleBrightnessInput(val) {
  const num = parseFloat(val);
  state.globalBrightness = Math.round(num);

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'none';
  }

  updateSliderTrackLine(num);
  applyHaloBrightness(num);
  updateStatusChips();
}

/**
 * 释放滑块时吸附到最近的 5 档档位 (20%, 40%, 60%, 80%, 100%)
 */
function handleBrightnessChange(val) {
  const num = parseFloat(val);
  const nearest = Math.max(20, Math.min(100, Math.round(num / 20) * 20));

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'width 0.2s cubic-bezier(0.2, 0, 0.2, 1)';
  }

  setBrightnessGear(nearest);
}

/**
 * 档位设定（点击太阳图标或吸附归位）
 */
function setBrightnessGear(val) {
  const num = Math.max(20, Math.min(100, parseInt(val, 10)));
  state.globalBrightness = num;

  const slider = document.getElementById('homeBrightnessSlider');
  if (slider) {
    slider.value = num;
  }

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    fillLine.style.transition = 'width 0.2s cubic-bezier(0.2, 0, 0.2, 1)';
  }

  updateSliderTrackLine(num);
  applyHaloBrightness(num);
  updateStatusChips();
}

function setGlobalBrightness(val) {
  setBrightnessGear(val);
}

/**
 * 更新胶囊滑块蓝色填充线条与圆点状态 (1:1对齐参考图：同心圆钮嵌入蓝色端头)
 */
function updateSliderTrackLine(val) {
  const num = parseFloat(val);
  const ratio = Math.max(0, Math.min(1, (num - 20) / 80));

  const fillLine = document.getElementById('sliderFillLine');
  if (fillLine) {
    // 胶囊高度 24px，圆角半径 12px；白色圆钮直径 12px，两边内边距 6px
    // 最小宽度为 24px (20% 档)，最大为 100% (100% 档)
    fillLine.style.width = `calc(24px + (100% - 24px) * ${ratio})`;
  }
}

/**
 * 驱动顶部发光环真实灯光亮度和范围跟随调节
 */
function applyHaloBrightness(num) {
  const factor = Math.max(0, Math.min(1, (num - 20) / 80)); // 0.0 ~ 1.0

  // 视觉参数阶梯：20% 时微弱柔暗，100% 时高亮炫目漫射
  const brightnessVal = (0.32 + factor * 0.88).toFixed(3); // 0.32 ~ 1.20
  const opacityVal = (0.22 + factor * 0.78).toFixed(3);    // 0.22 ~ 1.00
  const glowScaleVal = (0.65 + factor * 0.55).toFixed(3);  // 0.65 ~ 1.20
  const glowOpacity = (0.20 + factor * 0.80).toFixed(3);   // 0.20 ~ 1.00

  document.documentElement.style.setProperty('--device-halo-brightness', brightnessVal);
  document.documentElement.style.setProperty('--device-halo-opacity', opacityVal);
  document.documentElement.style.setProperty('--device-halo-glow-scale', glowScaleVal);
  document.documentElement.style.setProperty('--brightness-pct', `${Math.round(num)}%`);

  // 直接驱动所有场景的 emitter 与 ambient glow
  document.querySelectorAll('.halo-ring-emitter').forEach(emitter => {
    emitter.style.opacity = opacityVal;
    emitter.style.filter = `brightness(${brightnessVal})`;
  });

  document.querySelectorAll('.halo-ambient-glow').forEach(glow => {
    glow.style.transform = `scale(${glowScaleVal})`;
    glow.style.opacity = glowOpacity;
  });
}

/**
 * 设置全局 CSS 颜色变量（驱动描边随选色动态联动）
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
 * 切换多语言
 */
function switchLanguage(langCode) {
  if (!I18N_LOCALES[langCode]) return;
  state.lang = langCode;

  const desktopSelect = document.getElementById('desktopLangSelect');
  if (desktopSelect) desktopSelect.value = langCode;

  document.querySelectorAll('.sheet-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === langCode);
  });

  updateLanguageDisplay();
}

/**
 * 移动端语言选择底部抽屉
 */
function toggleLanguageSheet(show) {
  const backdrop = document.getElementById('langModalBackdrop');
  if (!backdrop) return;
  if (show === undefined) {
    show = !backdrop.classList.contains('active');
  }
  if (show) {
    backdrop.style.display = 'flex';
    void backdrop.offsetWidth;
    backdrop.classList.add('active');
  } else {
    backdrop.classList.remove('active');
    setTimeout(() => {
      if (!backdrop.classList.contains('active')) {
        backdrop.style.display = 'none';
      }
    }, 250);
  }
}

function selectAppLanguage(langCode) {
  switchLanguage(langCode);
  toggleLanguageSheet(false);
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

  // 更新导航栏标题
  const titleElem = document.getElementById('navTitle');
  if (titleElem) {
    titleElem.textContent = dict[`page_${state.currentPage}`] || '幻彩脉动';
  }

  // 更新场景状态已开启/已关闭
  ['call', 'notification', 'charging', 'music', 'power'].forEach(sc => {
    const stElem = document.getElementById(`statusText_${sc}`);
    if (stElem) {
      const isEnabled = state.scenes[sc]?.enabled;
      stElem.textContent = isEnabled ? (dict['status_enabled'] || '已开启') : (dict['status_disabled'] || '已关闭');
    }
  });

  updateStatusChips();
}

/**
 * 更新左侧控制台的状态胶囊
 */
function updateStatusChips() {
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  const curScene = state.scenes[state.currentPage] || state.scenes.home;

  const chipPage = document.getElementById('chipPage');
  if (chipPage) chipPage.textContent = `页面: ${dict['page_' + state.currentPage] || state.currentPage}`;

  const chipEffect = document.getElementById('chipEffect');
  if (chipEffect) chipEffect.textContent = `灯效: ${dict['effect_' + curScene.effect] || curScene.effect || '呼吸'}`;

  const chipColor = document.getElementById('chipColor');
  if (chipColor) chipColor.textContent = `颜色: ${dict[curScene.colorKey] || curScene.color || '深绿'}`;

  const chipBrightness = document.getElementById('chipBrightness');
  if (chipBrightness) chipBrightness.textContent = `亮度: ${state.globalBrightness}%`;
}

/**
 * 监听所有胶囊滚动容器横向滚动事件，动态控制左/右双向羽化渐隐
 */
function initAllScrollersOverflow() {
  ['call', 'notification', 'charging', 'music', 'power'].forEach(sceneId => {
    const track = document.getElementById(`capsulesTrack_${sceneId}`);
    if (track) {
      track.addEventListener('scroll', () => {
        checkCapsuleOverflowForScene(sceneId);
      }, { passive: true });
    }
  });
}

function checkCapsuleOverflowForScene(sceneId) {
  const scroller = document.getElementById(`capsulesWrap_${sceneId}`);
  const track = document.getElementById(`capsulesTrack_${sceneId}`);
  if (!scroller || !track) return;

  const scrollLeft = track.scrollLeft;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const hasOverflow = maxScroll > 2;

  scroller.classList.toggle('has-overflow', hasOverflow);
  scroller.classList.toggle('mask-left', hasOverflow && scrollLeft > 3);
  scroller.classList.toggle('mask-right', hasOverflow && scrollLeft < maxScroll - 3);
}

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
 * 启用时段设置：切换全天启用 / 定时启用
 */
function setActiveTimeMode(mode) {
  state.schedule.mode = mode;
  const radioAllDay = document.getElementById('radio_all_day');
  const radioSched = document.getElementById('radio_scheduled');
  if (radioAllDay) radioAllDay.checked = (mode === 'all_day');
  if (radioSched) radioSched.checked = (mode === 'scheduled');

  const cardPicker = document.getElementById('card_time_picker');
  if (cardPicker) {
    cardPicker.style.display = (mode === 'scheduled') ? 'block' : 'none';
  }

  updateActiveTimeSummary();
}

/**
 * 触发时间修改
 */
function triggerTimeEdit(type) {
  const input = document.getElementById(`input_${type}_time`);
  if (!input) return;
  if (input.showPicker) {
    input.showPicker();
  } else {
    input.focus();
    input.click();
  }
}

/**
 * 更新设定的时间数值
 */
function updateScheduledTime(type, val) {
  if (!val) return;
  if (type === 'start') {
    state.schedule.startTime = val;
    const txt = document.getElementById('text_start_time');
    if (txt) txt.textContent = val;
  } else {
    state.schedule.endTime = val;
    const txt = document.getElementById('text_end_time');
    if (txt) txt.textContent = val;
  }
  updateActiveTimeSummary();
}

/**
 * 同步主首页上的启用时段摘要文案
 */
function updateActiveTimeSummary() {
  const summaryElem = document.getElementById('homeActiveTimeSummary');
  if (!summaryElem) return;
  const dict = I18N_LOCALES[state.lang] || I18N_LOCALES['zh-CN'];
  if (state.schedule.mode === 'all_day') {
    summaryElem.textContent = dict['active_time_all_day'] || '全天启用';
  } else {
    summaryElem.textContent = `${state.schedule.startTime} - ${state.schedule.endTime}`;
  }
}
