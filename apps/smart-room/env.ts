declare global {
  type TConfig = {
    appUrl: string;
  };

  const env: TConfig;
}

const testConfig: TConfig = {
  appUrl: 'http://localhost:4200',
};

export const getEnv = () => {
  const config = import.meta.env.NODE_ENV === 'test' ? testConfig : env;
  return {
    appUrl: import.meta.env.VITE_NX_APP_URL || config?.appUrl || '',
  };
};
