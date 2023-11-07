'use client';

import { Noto_Sans_Mono } from 'next/font/google';
import { BsGithub } from 'react-icons/bs';

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <header className="flex flex-col gap-4">
      <p className={`${notoSansMono.className} text-sm text-gray-900`}>
        <b className="font-bold">Colog </b>
        is your one-stop destination for all things paint, providing a curated
        selection of wall colors from renowned manufacturers.
      </p>
      <div className="flex gap-2">
        <button className="shrink-0 bg-gray-200 hover:bg-gray-300 rounded-full p-1">
          <BsGithub size={18} className="text-gray-900" />
        </button>
        <button className="shrink-0 bg-gray-200 hover:bg-gray-300 rounded-full p-1 px-3 text-xs text-gray-900 font-semibold">
          Become a contributor
        </button>
      </div>
    </header>
  );
}
