import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { type webpackPathes } from './config/webpack/types/webpackConfigTypes';


const paths: webpackPathes = {
  html: path.resolve(__dirname, 'public', 'index.html'),
  public: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'build')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
});

export default config;