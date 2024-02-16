import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { WebpackBuildOptions } from '../types/webpackConfigTypes';


export function buildPlugins({ paths }: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
      chunkFilename: 'css/[name].[contenthash:6].css'
    })
  ]
}