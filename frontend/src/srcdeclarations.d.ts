declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module '*.png' {
  const value: any; // In a modern setup, this value will be the image path/URL string
  export default value;
}

/// <reference types="vite/client" />