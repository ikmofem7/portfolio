declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.svg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.png';

declare module 'react/jsx-runtime' {
  const content: string;
  export default content;
}
