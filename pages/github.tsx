import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Card from '../components/Card';

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://api.github.com/users/nuflakbrr', {method: 'GET'});
    const data = await res.json();

    return {
        props: {
          data,
        },
    };
};

const Github: FC = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>Github - Naufal Akbar Nugroho</title>
            </Head>

            <main className='bg-white dark:bg-[#1a1a1a]'>
                <Card dataUser={data} />
            </main>
        </>
    );
};

export default Github;
