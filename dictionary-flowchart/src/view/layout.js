// @ts-check

/**
 * App shell: header, panel tabs, and the two panel containers.
 *
 * Architecture rule (spec §4): this is the only layer that touches the DOM.
 * It exposes the panel elements so the dictionary and flowchart views can
 * render into them without querying the document themselves.
 */

/**
 * @typedef {Object} Shell
 * @property {HTMLElement}       dictionaryPanel  Container for the dictionary view.
 * @property {HTMLElement}       flowchartPanel   Container for the flowchart view.
 * @property {HTMLElement}       entryList        <ol> the entry list renders into.
 * @property {HTMLElement}       flowchartStage   Element cytoscape mounts to.
 * @property {HTMLInputElement}  searchInput
 * @property {HTMLSelectElement} sortSelect
 * @property {HTMLSelectElement} projectSwitcher
 * @property {HTMLElement}       trail
 * @property {HTMLButtonElement} recenterBtn
 * @property {(title: string) => void} setProjectTitle
 * @property {(panel: 'dictionary' | 'flowchart') => void} showPanel
 */

/**
 * Look up a required element, failing loudly rather than silently returning null.
 * @template {Element} T
 * @param {string} id
 * @returns {T}
 */
function required(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`layout: missing required element #${id}`);
  return /** @type {T} */ (/** @type {unknown} */ (el));
}

/**
 * Wire up the shell and return handles to its parts.
 * @returns {Shell}
 */
export function initLayout() {
  const dictionaryPanel = required('panel-dictionary');
  const flowchartPanel = required('panel-flowchart');
  const tabs = required('panel-tabs');
  const titleEl = required('project-title');

  /** @type {NodeListOf<HTMLButtonElement>} */
  const tabButtons = tabs.querySelectorAll('.panel-tabs__btn');

  /** @param {'dictionary' | 'flowchart'} panel */
  function showPanel(panel) {
    dictionaryPanel.classList.toggle('is-active', panel === 'dictionary');
    flowchartPanel.classList.toggle('is-active', panel === 'flowchart');

    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.panel === panel;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = btn.dataset.panel;
      if (panel === 'dictionary' || panel === 'flowchart') showPanel(panel);
    });
  });

  return {
    dictionaryPanel,
    flowchartPanel,
    entryList: required('entry-list'),
    flowchartStage: required('flowchart-stage'),
    searchInput: required('search-input'),
    sortSelect: required('sort-select'),
    projectSwitcher: required('project-switcher'),
    trail: required('trail'),
    recenterBtn: required('recenter-btn'),
    setProjectTitle(title) {
      titleEl.textContent = title;
      document.title = `${title} — Dictionary Flowchart`;
    },
    showPanel,
  };
}
