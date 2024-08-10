import { FC } from 'react';
import Link from 'next/link';

import { User } from '@/interfaces/user';
import ThemesSwitch from '@/components/Common/ThemesSwitch';

type Props = {
  dataUser: User;
};

const ContainerGithub: FC<Props> = ({ dataUser }) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col w-[350px] bg-slate-100 dark:bg-neutral-800 shadow-md rounded-2xl py-8">
            <div className="flex items-center justify-between mx-5 -mt-1">
              <Link
                href="/"
                className="px-2 pb-1 text-xl rounded-md text-slate-900 hover:text-white dark:text-zinc-50 bg-slate-300 dark:bg-neutral-700 hover:bg-sky-500 dark:hover:bg-sky-600"
              >
                &larr;
              </Link>
              <ThemesSwitch />
            </div>

            {/* content */}
            <div>
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4">
                <img
                  src={dataUser?.avatar_url}
                  alt="Profile Picture"
                  className="object-cover w-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold leading-[1.2em] text-xl text-gray-900 dark:text-white text-center mb-2">
                  {dataUser?.name}
                </h1>
                <span className="mb-2 text-xs font-normal text-center text-gray-700 dark:text-zinc-400">
                  {dataUser?.bio}
                </span>
                <a
                  href={dataUser?.html_url}
                  target="_blank"
                  className="mb-5 text-xs font-normal text-center text-gray-700 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-500"
                  rel="noreferrer"
                >
                  @{dataUser?.login}
                </a>
              </div>
            </div>
            {/* content end */}

            {/* Stats */}
            <div className="flex items-center justify-center mb-5">
              <div className="flex flex-col items-center justify-center px-3 py-2 mx-1 rounded-md bg-slate-300 dark:bg-neutral-700 dark:text-zinc-50">
                <h1>{dataUser?.public_repos}</h1>
                <span className="text-xs text-slate-900 dark:text-zinc-50">
                  Repositori
                </span>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2 mx-1 rounded-md bg-slate-300 dark:bg-neutral-700 dark:text-zinc-50">
                <h1>{dataUser?.followers}</h1>
                <span className="text-xs text-slate-900 dark:text-zinc-50">
                  Pengikut
                </span>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2 mx-1 rounded-md bg-slate-300 dark:bg-neutral-700 dark:text-zinc-50">
                <h1>{dataUser?.following}</h1>
                <span className="text-xs text-slate-900 dark:text-zinc-50">
                  Mengikuti
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a
                href={dataUser?.html_url}
                target="_blank"
                className="px-3 py-2 rounded-md bg-slate-300 text-slate-900 hover:text-white dark:bg-neutral-700 hover:bg-sky-500 dark:hover:bg-sky-600 dark:text-zinc-50"
                rel="noreferrer"
              >
                Halaman Github Saya
              </a>
            </div>
            {/* Stats End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerGithub;
