export const getInitData = (): string => {
  const initData = window.Telegram?.WebApp?.initData;

  if (initData) {
    return initData;
  }

  return import.meta.env.VITE_DEV_INIT_DATA ?? '';
};