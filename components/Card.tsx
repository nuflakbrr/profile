/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FaGithub, FaInstagram, FaGlobeAsia, FaEnvelope } from 'react-icons/fa';

const Me = '/p.jpg'

const Card: FC = () => {
  return (
    <section className="dark">
        <div className="container mx-auto">
            <div className="flex justify-center items-center min-h-screen bg-white dark:bg-slate-900">
                <div className="flex flex-col justify-center items-center w-[300px] bg-slate-100 dark:bg-slate-800 shadow-md rounded-2xl py-10">
                    {/* content */}
                    <div>
                        <div className="w-32 h-32 flex justify-center items-center mx-auto mb-4">
                            <img src={Me} alt="Profile Picture" className="w-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold leading-[1.2em] text-xl text-gray-900 dark:text-white text-center mb-2">Naufal Akbar Nugroho</h1>
                            <span className="font-normal text-xs text-gray-700 dark:text-zinc-400 text-center mb-5">UI/UX Enthusiast | Web Developer</span>
                        </div>
                    </div>
                    {/* content end */}

                    {/* link */}
                    <ul className="flex justify-center items-center mb-5">
                        <li>
                            <a href="https://github.com/nuflakbrr" target="_blank" rel="noreferrer" className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-50 dark:hover:bg-sky-500 hover:bg-sky-500 hover:text-zinc-50">
                                <FaGithub className="text-2xl" />
                            </a>
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

                    <a href="https://saweria.co/NOPALLLL" target="_blank" id="donate" rel="noreferrer" className="font-normal text-base text-slate-600 dark:text-zinc-400 dark:hover:text-sky-500 hover:text-sky-500 underline">Yuk Donate!</a>
                    {/* link end */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Card;
