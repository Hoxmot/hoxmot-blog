import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  // Global ignores
  { ignores: ['dist', 'node_modules', '.astro', '.output', 'src/env.d.ts'] },

  // Base JS config
  js.configs.recommended,

  // TypeScript configs
  ...tseslint.configs.recommended,

  // Astro configs
  ...eslintPluginAstro.configs.recommended,

  // JSX A11y Config (Accessibility)
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,astro}'],
    ...jsxA11y.flatConfigs.recommended,
  }
);
