export const svgrLoader = () => {
  return {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack'
      }
    ],
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }
  }
}
