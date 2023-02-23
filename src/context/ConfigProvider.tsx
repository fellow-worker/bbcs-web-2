import React, { FC, PropsWithChildren } from 'react';
import useFetch from 'hooks/useFetch';
import fetchConfig from 'services/fetchConfig';
import ConfigContext from './ConfigContext';

export const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const config = useFetch(fetchConfig);

  if (!config) return null;
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
