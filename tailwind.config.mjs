import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enables toggle via a 'dark' class on the body/html
  theme: {
    extend: {
      colors: {
        // Semantic names mapped to CSS variables
        primary: 'var(--color-primary)', // Orange #ff9900
        secondary: 'var(--color-secondary)', // Blue #1e90ff

        // Backgrounds
        bg: {
          main: 'var(--color-bg-main)',
          card: 'var(--color-bg-card)',
        },

        // Text
        text: {
          main: 'var(--color-text-main)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
      },
      fontFamily: {
        // The "Editorial" Font Stack
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [typography],
};
