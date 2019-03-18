const { src, dest, series } = require('gulp');
const panini = require('panini');

function build(cb){
  try {
    return src('src/pages/**/*.html')
      .pipe(panini({
        root: 'src/pages/',
        layouts: 'src/layouts/',
        partials: 'src/partials/',
        helpers: 'src/helpers/',
        data: 'src/data/'
      }))
      .pipe(dest('build'));
  } catch (e) {
    console.error(e);
  }
  cb();
};

function copyAssets(cb){
  return src('src/pages/assets/**/*.*')
    .pipe(dest('build/assets'));
  cb();
}

exports.default = series(build, copyAssets)
