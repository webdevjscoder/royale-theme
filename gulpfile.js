const { src, dest } = require('gulp');
const panini = require('panini');

function defaultTask(cb){
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

exports.default = defaultTask;

