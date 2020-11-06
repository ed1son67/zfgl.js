import babel from 'rollup-plugin-babel';

export default {
  entry: './src/index.js',
  dest: 'zgl.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup'],
    }),
  ],
  format: 'umd',
  moduleName: 'zgl',
};
