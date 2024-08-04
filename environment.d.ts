declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        REACT_APP_RECIPE_SERVICE_URL: string;
      }
    }
  }
  
  export {};
  