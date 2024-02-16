import type { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackBuildOptions } from "../types/webpackConfigTypes";


export function buildLoaders({ isDev }: WebpackBuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path].[name]__[local]' : '[hash:base64:5]'
          },
        },
      },
      "sass-loader"
    ],
  }


  return [
    tsLoader,
    scssLoader
  ]
}