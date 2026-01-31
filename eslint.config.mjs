import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  // Global ignores
  { ignores: ['dist', 'node_modules', '.astro', '.output', 'src/env.d.ts'] },

  // Base JS config
  js.configs.recommended,

  // TypeScript configs
  ...tseslint.configs.recommended,

  // Astro configs
  ...eslintPluginAstro.configs.recommended
);
