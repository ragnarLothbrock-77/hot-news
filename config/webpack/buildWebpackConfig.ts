import webpack from 'webpack';
import { buildPlugins } from './builds/buildPlugins';
import type { WebpackBuildOptions } from './types/webpackConfigTypes';
import { buildLoaders } from './builds/buildLoaders';
import { buildResolver } from './builds/buildResolver';
import { buildDevServer } from './builds/buildDevServer';


export function buildWebpackConfig(options: WebpackBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name][contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolver(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}