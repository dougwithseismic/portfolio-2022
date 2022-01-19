module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: ['1rem', '190%'],
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': ['24px', '45px'],
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      hero: '10rem',
      jumbo: ['160px', '110%'],
    },
    fontFamily: {
      sans: ['rift', 'sans-serif'],
      serif: ['neue-haas-grotesk-text', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      faintGrey: '#909090',
      lightGrey: '#ADADAD',
      brightOrange: '#FF6200',
      cardGrey: '#121212',
      white: 'white',
    },
    extend: {
      container: {
        center: true,
      },
      spacing: {
        '1560': '1560px',
      },
    },
  },
  plugins: [],
}
