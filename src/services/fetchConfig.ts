import Config from 'types/Config';

export default async () => {
  const url = `${process.env.PUBLIC_URL}/config.json`;
  const response = await fetch(url);
  return await response.json() as Config;
};
