module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#00FFAD',
        secondary: '#121A2E',
      },
    },
  },
  experimental: {
    applyComplexClasses: true,
  },
};
