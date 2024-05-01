// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';
/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
  ],

  theme: {
    extend: {},
  },

  plugins: [
    // 4. Append the Skeleton plugin (after other plugins)
		skeleton({
      themes: { preset: [ "gold-nouveau" ] }
    })
  ],
};

module.exports = config;
