'use client';

import ReactDOM from 'react-dom';

// https://github.com/vercel/next.js/discussions/57877
// Preload lets you tell the browser about critical resources that you want to load as soon as possible, before they are discovered in HTML. This is especially useful for resources that are not easily discoverable, such as fonts included in stylesheets, background images, or resources loaded from a script.
export function PreloadResources() {
  ReactDOM.preload('sprite.svg', { as: 'image' });
  return null;
}
