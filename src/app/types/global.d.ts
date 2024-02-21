declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}


declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.webp"
declare module "*.gif"
declare module "*.woff"
declare module "*.woff2"
declare module "*.ttf"


declare const __IS_DEV__: boolean;