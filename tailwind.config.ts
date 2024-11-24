import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.3s ease-out',
        'fade-in-top': 'fadeInTop 0.3s ease-in',
        'fadeIn': "fadeIn 0.2s ease-in-out forwards",
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '100' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
