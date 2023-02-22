import React, { useContext } from 'react';

interface Selection {
  selectedMenu: undefined | string,

  setSelectMenu(val: string | undefined): void
}

export const SelectedMenuContext = React.createContext<Selection>({
  selectedMenu: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  setSelectMenu: (_: string | undefined) => undefined,
});

export const useSelectedMenu = () => useContext(SelectedMenuContext);
