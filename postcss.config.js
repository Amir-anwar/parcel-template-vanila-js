module.exports = {
  plugins: [
    require('postcss-uncss')({
      html: [
        './src/**/*.html',
      ],
    }),
    require('autoprefixer'),
  ],
};
