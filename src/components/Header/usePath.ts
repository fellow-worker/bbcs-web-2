import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter(c => !!c && c !== '');
  return paths.length > 0 ? paths[0] : undefined;
};
