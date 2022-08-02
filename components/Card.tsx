/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';

import ThemesSwitch from './ThemesSwitch';

interface CardProps {
    dataUser: any;
}

const Card: FC<CardProps> = ({ dataUser }: any) => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex justify-center items-center min-h-screen bg-white dark:bg-slate-900">
                <div className="flex flex-col w-[300px] bg-slate-100 dark:bg-slate-800 shadow-md rounded-2xl py-8">
                    <div className="mx-5 -mt-1 flex justify-between items-center">
                        <Link href="/">
                            <a className="bg-slate-300 dark:bg-slate-700 text-white hover:bg-sky-500 dark:hover:bg-sky-500 px-2 pb-1 rounded-md text-xl">&larr;</a>
                        </Link>
                        <ThemesSwitch />
                    </div>

                    {/* content */}
                    <div>
                        <div className="w-32 h-32 flex justify-center items-center mx-auto mb-4">
                            <img src={dataUser?.avatar_url} alt="Profile Picture" className="w-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold leading-[1.2em] text-xl text-gray-900 dark:text-white text-center mb-2">{dataUser?.name}</h1>
                            <span className="font-normal text-xs text-gray-700 dark:text-zinc-400 text-center mb-2">{dataUser?.bio}</span>
                            <a href={dataUser?.html_url} target="_blank" className="font-normal text-xs text-gray-700 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-500 text-center mb-5" rel="noreferrer">
                                @{dataUser?.login}
                            </a>
                        </div>
                    </div>
                    {/* content end */}

                    {/* Stats */}
                    <div className="flex justify-center items-center mb-5">
                        <div className="flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-700 dark:text-white mx-1 px-3 py-2 rounded-md">
                            <h1>{dataUser?.public_repos}</h1>
                            <span className="text-xs text-slate-700 dark:text-white">Repositori</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-700 dark:text-white mx-1 px-3 py-2 rounded-md">
                            <h1>{dataUser?.followers}</h1>
                            <span className="text-xs text-slate-700 dark:text-white">Pengikut</span>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-700 dark:text-white mx-1 px-3 py-2 rounded-md">
                            <h1>{dataUser?.following}</h1>
                            <span className="text-xs text-slate-700 dark:text-white">Mengikuti</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <a href={dataUser?.html_url} target="_blank" className="bg-slate-300 text-slate-700 hover:text-white dark:bg-slate-700 hover:bg-sky-500 dark:hover:bg-sky-500 dark:text-white px-3 py-2 rounded-md" rel="noreferrer">Halaman Github Saya</a>
                    </div>
                    {/* Stats End */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Card;
