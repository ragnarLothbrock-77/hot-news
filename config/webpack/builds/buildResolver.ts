import type { ResolveOptions } from "webpack";
import { WebpackBuildOptions } from "../types/webpackConfigTypes";


export function buildResolver({ paths }: WebpackBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules'],
    alias: {}
  }
}