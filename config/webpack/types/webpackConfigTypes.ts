export type webpackBuildModes = 'development' | 'production';

export interface webpackPathes {
  html: string,
  src: string,
  public: string,
  entry: string,
  output: string,
}

export interface webpackBuildOptions {
  mode: webpackBuildModes,
  paths: webpackPathes,
  isDev: boolean
}