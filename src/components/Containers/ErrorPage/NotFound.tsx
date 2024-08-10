import { FC } from 'react';
import Link from 'next/link';

const ContainerNotFound: FC = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap-reverse items-center justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold uppercase text-slate-900 dark:text-zinc-50 md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-2xl font-bold text-center text-slate-900 dark:text-zinc-50 md:text-3xl sm:text-left">
                Halaman Tidak Ditemukan
              </h1>

              <p className="mb-8 text-center text-slate-500 dark:text-zinc-50 md:text-lg sm:text-left">
                Halaman yang Anda cari tidak ditemukan. Coba periksa kembali URL
                yang Anda masukkan.
              </p>

              <Link
                href="/"
                className="inline-block px-5 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-lg outline-none bg-sky-500 hover:bg-sky-600 focus-visible:ring ring-sky-500 active:bg-sky-500 md:text-base"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-10 lg:mb-0">
              <img
                src="/assets/svg/undraw_not_found.svg"
                loading="lazy"
                alt="Error Page"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerNotFound;
