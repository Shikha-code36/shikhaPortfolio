/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        schema: {
          bg: 'var(--schema-bg)',
          raised: 'var(--schema-raised)',
          raised2: 'var(--schema-raised2)',
          border: 'var(--schema-border)',
          soft: 'var(--schema-soft)',
          text: 'var(--schema-text)',
          heading: 'var(--schema-heading)',
          dim: 'var(--schema-dim)',
          faint: 'var(--schema-faint)',
          faint2: 'var(--schema-faint2)',
          accent: 'var(--schema-accent)',
          accentdim: 'var(--schema-accentdim)',
          amber: 'var(--schema-amber)',
          red: 'var(--schema-red)',
          oncolor: 'var(--schema-oncolor)',
        },
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
