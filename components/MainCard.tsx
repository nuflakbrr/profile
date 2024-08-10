/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaGlobeAsia, FaEnvelope } from 'react-icons/fa';

import ThemesSwitch from './ThemesSwitch';

const Me = '/p.jpg'

const MainCard: FC = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-[300px] bg-slate-100 dark:bg-neutral-800 shadow-md rounded-2xl py-6">
                    <div className="flex justify-end px-5">
                        <ThemesSwitch />
                    </div>
                    
                    {/* content */}
                    <div>
                        <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4">
                            <img src={Me} alt="Profile Picture" className="object-cover w-full rounded-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="font-semibold leading-[1.2em] text-xl text-slate-900 dark:text-zinc-50 text-center mb-2">Naufal Akbar Nugroho</h1>
                            <span className="mb-5 text-xs font-normal text-center text-slate-700 dark:text-zinc-400">Pemuda Yang Pengen Jadi Fullstack Developer</span>
                        </div>
                    </div>
                    {/* content end */}

                    {/* link */}
                    <ul className="flex items-center justify-center mb-5">
                        <li>
                            <Link href="/github">
                                <a className="flex items-center justify-center mx-1 rounded-full h-9 w-9 bg-slate-300/70 dark:bg-neutral-700 text-slate-900 dark:text-zinc-50 dark:hover:bg-sky-600 hover:bg-sky-500 hover:text-zinc-50">
                                    <FaGithub className="text-2xl" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kbrnugroho" target="_blank" rel="noreferrer" className="flex items-center justify-center mx-1 rounded-full h-9 w-9 bg-slate-300/70 dark:bg-neutral-700 text-slate-900 dark:text-zinc-50 dark:hover:bg-sky-600 hover:bg-sky-500 hover:text-zinc-50">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://nuflakbrr.github.io" target="_blank" rel="noreferrer" className="flex items-center justify-center mx-1 rounded-full h-9 w-9 bg-slate-300/70 dark:bg-neutral-700 text-slate-900 dark:text-zinc-50 dark:hover:bg-sky-600 hover:bg-sky-500 hover:text-zinc-50">
                                <FaGlobeAsia className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:naufalakbar378@gmail.com" target="_blank" rel="noreferrer" className="flex items-center justify-center mx-1 rounded-full h-9 w-9 bg-slate-300/70 dark:bg-neutral-700 text-slate-900 dark:text-zinc-50 dark:hover:bg-sky-600 hover:bg-sky-500 hover:text-zinc-50">
                                <FaEnvelope className="text-2xl" />
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center justify-center">
                        <a href="https://saweria.co/NOPALLLL" target="_blank" id="donate" rel="noreferrer" className="text-base font-normal underline text-slate-900 dark:text-zinc-400 dark:hover:text-sky-600 hover:text-sky-500">Yuk Donate!</a>
                    </div>
                    {/* link end */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default MainCard;
