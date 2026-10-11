// @ts-check

/**
 * Entry point. Wires the shell together; the dictionary and flowchart views
 * are filled in by steps 3 and 4 of milestone 1.
 */

import { initLayout } from './view/layout.js';

function start() {
  const shell = initLayout();

  // Placeholder until storage/store.js lands in step 2.
  shell.setProjectTitle('Dictionary Flowchart');
  shell.projectSwitcher.innerHTML = '<option>example</option>';

  // Step 1 checkpoint marker: proves ES modules loaded and executed.
  console.info('[dictionary-flowchart] shell ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
