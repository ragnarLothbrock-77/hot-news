import webpack from 'webpack';
import { buildPlugins } from './builds/buildPlugins';
import { type webpackBuildOptions } from './types/webpackConfigTypes';
import { buildLoaders } from './builds/buildLoaders';
import { buildResolver } from './builds/buildResolver';


export function buildWebpackConfig(options: webpackBuildOptions): webpack.Configuration {
  const { mode, paths, } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name][contenthash].js',
      path: paths.output,
      clean: true
    },
    devtool: 'inline-source-map',
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolver(),
  }
}