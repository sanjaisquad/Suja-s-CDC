const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/SnapRibbon.jsx'],
  bundle: true,
  outfile: 'js/snap-ribbon.bundle.js',
  format: 'iife',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx'
  }
}).then(() => {
  console.log('Successfully bundled SnapRibbon into js/snap-ribbon.bundle.js');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
