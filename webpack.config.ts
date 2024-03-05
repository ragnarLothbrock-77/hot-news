import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import type { WebpackBuildEnv, WebpackPathes } from './config/webpack/types/webpackConfigTypes';

export default (env: WebpackBuildEnv) => {
  const paths: WebpackPathes = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build')
  }

  const isDev = env.mode === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode ?? 'development',
    paths,
    isDev,
    port: PORT,
    analyze: env.analyze
  });

  return config;
}
