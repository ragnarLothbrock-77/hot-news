import type { RuleSetRule } from 'webpack';
import { WebpackBuildOptions } from '../types/webpackConfigTypes';
import { cssLoader } from '../loaders/cssLoader';
import { svgrLoader } from '../loaders/svgrLoader';

export function buildLoaders({ isDev }: WebpackBuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const scssLoader = cssLoader(isDev);

  const svgLoader = svgrLoader();

  const svgInlineLoader = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/ // import svg inline: *.svg?url
  }

  const fileLoader = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource'
  }

  const fontsLoader = {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline'
  }

  return [
    babelLoader,
    tsLoader,
    scssLoader,
    svgLoader,
    svgInlineLoader,
    fileLoader,
    fontsLoader
  ]
}
