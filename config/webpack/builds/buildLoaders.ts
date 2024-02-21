import type { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackBuildOptions } from "../types/webpackConfigTypes";


export function buildLoaders({ isDev }: WebpackBuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
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

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ],
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }
  }

  const svgInlineLoader = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // import svg inline: *.svg?url 
  }


  const fileLoader = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
  }

  const fontsLoader = {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline'
  }

  // Depricated !
  // const fileLoader = {
  //   test: /\.(png|jpe?g|gif|woff2|woff|ttf|)$/i,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //     },
  //   ],
  // }


  return [
    babelLoader,
    tsLoader,
    scssLoader,
    svgrLoader,
    svgInlineLoader,
    fileLoader,
    fontsLoader
  ]
}