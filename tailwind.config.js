module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        gray: {
          350: '#cccdd6'
        },

        dark: {
          300: '#9aa9bc',
          350: '#676b71',
          400: '#5f6266',
          500: '#55575b',
          600: '#2b2d30',
          700: '#3f4345',
          800: '#2c2f30',
          850: '#2C2F31',
          900: '#1d1f21',
        },

        purple: {
          1000: '#603f6e',
        },

        lush: {
          600: '#0ac278',
          700: '#09b570',
          800: '#079A60',
        }
      },

      spacing: {
        '108': '27rem',
        '128': '32rem',
        '132': '33rem',
      }
    },
  },
  plugins: [],
}
