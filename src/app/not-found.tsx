import { FC } from 'react';

import ContainerNotFound from '@/components/Containers/ErrorPage/NotFound';

export const metadata = {
  title: 'Halaman Tidak Ditemukan - Naufal Akbar Nugroho',
  description:
    'Halaman yang Anda cari tidak ditemukan. Coba periksa kembali URL yang Anda masukkan.',
};

const NotFound: FC = () => {
  return <ContainerNotFound />;
};

export default NotFound;
