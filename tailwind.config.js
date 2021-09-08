module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      screens: {
        'xs': '450px',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'bottom': '0 0 100px 100px'
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'cadmium-green': '#097969',
      'jungle-green': '#2AAA8A',
      'emerald': '#50C878'
    }),
  },
  variants: {
    extend: {},
  }
}
