module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'auth-bg': "url('/auth-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
