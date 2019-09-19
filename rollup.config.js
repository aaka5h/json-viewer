import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from "rollup-plugin-typescript2";

const env = process.env.NODE_ENV;

const config = {
  input: 'packages/index.ts',
  output: {
    file: 'lib/json-viewer.js',
    format: 'esm',
    indent: false
  },
  plugins:[
    nodeResolve(),
    typescript()
  ]
};

export default config;
