import path from 'path';
import { WebpackPathes } from '../webpack/types/webpackConfigTypes';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { cssLoader } from '../webpack/loaders/cssLoader';
import { svgrLoader } from '../webpack/loaders/svgrLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: WebpackPathes = {
    entry: '',
    output: '',
    public: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(cssLoader(true));
  config.module.rules.push(fontsLoader);

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule;
  })

  config.module.rules.push(svgrLoader() as RuleSetRule);

  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true
  }));

  return config;
}

// remove svg from existing rule
// config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
//   if (
//     String(rule.test) ===
//     String(
//       /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
//     )
//   ) {
//     return {
//       ...rule,
//       test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
//     };
//   }

//   return rule;
// });

// // use svgr for svg files
// config.module.rules.push({
//   test: /\.svg$/i,
//   issuer: /\.[jt]sx?$/,
//   use: ['@svgr/webpack'],
// });
