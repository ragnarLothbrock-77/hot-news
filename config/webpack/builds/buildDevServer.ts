import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackBuildOptions } from '../types/webpackConfigTypes';

export function buildDevServer({ port }: WebpackBuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}
