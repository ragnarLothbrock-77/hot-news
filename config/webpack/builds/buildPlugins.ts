import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { WebpackBuildOptions } from '../types/webpackConfigTypes';


export function buildPlugins({ paths }: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin()
  ]
}