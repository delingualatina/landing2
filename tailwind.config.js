/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#0e041d',
        'card-purple': 'rgba(26, 10, 42, 0.7)',
        'neon-purple': '#c723f5',
        'neon-green': '#00ff66',
        'neon-cyan': '#00d2ff',
        'card-bg': 'rgba(30, 10, 45, 0.65)',
        'card-border': 'rgba(199, 35, 245, 0.25)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s infinite alternate',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(199, 35, 245, 0.4)' },
          '100%': { boxShadow: '0 0 35px rgba(199, 35, 245, 0.8), 0 0 15px rgba(0, 255, 102, 0.5)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
};
