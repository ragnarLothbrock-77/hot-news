export type WebpackBuildModes = 'development' | 'production';

export interface WebpackPathes {
  html: string,
  src: string,
  public: string,
  entry: string,
  output: string,
}

export interface WebpackBuildOptions {
  mode: WebpackBuildModes,
  paths: WebpackPathes,
  isDev: boolean,
  port: number,
  analyze: boolean
}

export interface WebpackBuildEnv {
  mode: WebpackBuildModes,
  port: number,
  analyze: boolean
}
