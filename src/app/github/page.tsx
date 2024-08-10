import { FC } from 'react';

import ContainerGithub from '@/components/Containers/Github/Github';

async function fetchData() {
  const response = await fetch('https://api.github.com/users/nuflakbrr');

  if (response.ok) {
    return response.json();
  }

  throw new Error('Failed to fetch data');
}

const Github: FC = async () => {
  const data = await fetchData();

  return <ContainerGithub dataUser={data} />;
};

export default Github;
