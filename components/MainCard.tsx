/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaGlobeAsia, FaEnvelope } from 'react-icons/fa';

import ThemesSwitch from './ThemesSwitch';

const Me = '/pe.jpg'

const MainCard: FC = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex justify-center items-center min-h-screen bg-white dark:bg-slate-900">
                <div className="flex flex-col w-[300px] bg-slate-100 dark:bg-slate-800 shadow-md rounded-2xl py-6">
                    <div className="flex justify-end px-5">
                        <ThemesSwitch />
                    </div>
                    
                    {/* content */}
                    <div>
                        <div className="w-32 h-32 flex justify-center items-center mx-auto mb-4">
                            <img src={Me} alt="Profile Picture" className="w-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold leading-[1.2em] text-xl text-gray-900 dark:text-white text-center mb-2">Naufal Akbar Nugroho</h1>
                            <span className="font-normal text-xs text-gray-700 dark:text-zinc-400 text-center mb-5">Pemuda Yang Pengen Jadi Fullstack Developer</span>
                        </div>
                    </div>
                    {/* content end */}

                    {/* link */}
                    <ul className="flex justify-center items-center mb-5">
                        <li>
                            <Link href="/github">
                                <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-50 dark:hover:bg-sky-500 hover:bg-sky-500 hover:text-zinc-50">
                                    <FaGithub className="text-2xl" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kbrnugroho" target="_blank" rel="noreferrer" className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-50 dark:hover:bg-sky-500 hover:bg-sky-500 hover:text-zinc-50">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://naufalakbar.me" target="_blank" rel="noreferrer" className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-50 dark:hover:bg-sky-500 hover:bg-sky-500 hover:text-zinc-50">
                                <FaGlobeAsia className="text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:naufalakbar378@gmail.com" target="_blank" rel="noreferrer" className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-50 dark:hover:bg-sky-500 hover:bg-sky-500 hover:text-zinc-50">
                                <FaEnvelope className="text-2xl" />
                            </a>
                        </li>
                    </ul>

                    <div className="flex justify-center items-center">
                        <a href="https://saweria.co/NOPALLLL" target="_blank" id="donate" rel="noreferrer" className="font-normal text-base text-slate-600 dark:text-zinc-400 dark:hover:text-sky-500 hover:text-sky-500 underline">Yuk Donate!</a>
                    </div>
                    {/* link end */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default MainCard;
