/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wiso: {
          slate: '#0F171A',
          'slate-mid': '#162126',
          'slate-soft': '#1E2629',
          green: '#2E5A12',
          'green-mid': '#3B6E14',
          lime: '#99CC33',
          'lime-hover': '#86B628',
          'lime-tint': '#F1F7E4',
          surface: '#F6F7F5',
          border: '#DCE2DE',
          ink: '#172024',
          muted: '#4B575C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
