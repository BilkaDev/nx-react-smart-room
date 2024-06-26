declare global {
  type TConfig = {
    appUrl: string;
  };

  const env: TConfig;
}

export const getEnv = () => ({
  appUrl: import.meta.env['VITE_NX_APP_URL'] || env?.appUrl || '',
});
