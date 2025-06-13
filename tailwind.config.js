/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "calistoga": ["Calistoga", "serif"],
        "inter": ["Inter", "sans-serif"],
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: 0,
          },
        },
        'move-tape-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-70%)',
          },
        },
        'move-tape-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(-30%)',
          },
        },
      },

      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'spin-slowest': 'spin 60s linear infinite',
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-tape-left': 'move-tape-left 40s linear infinite',
        'move-tape-right': 'move-tape-right 40s linear infinite',
        'bounce-slow': 'bounce-slow 4s ease-out infinite'
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      }
    }
  },
  plugins: [],
};
