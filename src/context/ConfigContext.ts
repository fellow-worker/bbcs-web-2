import React from 'react';
import Config from 'types/Config';

const ConfigContext = React.createContext<Config>(undefined as unknown as Config);

export default ConfigContext;
