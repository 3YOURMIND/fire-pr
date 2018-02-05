import pkg from './package.json';
import uglify from 'rollup-plugin-uglify';

export default [
  // browser-friendly UMD build
  {
    input: 'index.js',
    output: {
      name: 'howLongUntilLunch',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [uglify()],
  },
  {
    input: 'index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [uglify()],
  },
];
