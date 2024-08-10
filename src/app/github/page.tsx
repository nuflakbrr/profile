import { FC } from 'react';

import { User } from '@/interfaces/user';
import ContainerGithub from '@/components/Containers/Github/Github';

export async function fetchData(): Promise<User> {
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
