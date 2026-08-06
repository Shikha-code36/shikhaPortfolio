/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        schema: {
          bg: '#0b0e13',
          raised: '#11151c',
          raised2: '#131720',
          border: '#232833',
          soft: '#1c2029',
          text: '#dfe6ee',
          heading: '#f2f5f8',
          dim: '#9aa4b2',
          faint: '#6b7280',
          faint2: '#565f6b',
          accent: '#59d9b3',
          accentdim: '#2c5a4c',
          amber: '#e3b341',
          red: '#ff7b72',
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
