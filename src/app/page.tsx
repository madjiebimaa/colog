'use client';

import ColorPalette from '@/components/ColorPalette';
import { useBackgroundColor, useIsColorModalShow } from '@/store/color';
import { Noto_Sans_Mono } from 'next/font/google';
import { BsGithub } from 'react-icons/bs';
import vinilexColors from './data/vinilex-colors.json';
import ColorModal from '@/components/ColorModal';

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'] });

export default function Home() {
  const backgroundColor = useBackgroundColor();
  const isColorModalShow = useIsColorModalShow();

  return isColorModalShow ? (
    <ColorModal />
  ) : (
    <main
      style={{ backgroundColor }}
      className="min-h-screen flex flex-col gap-10 p-5"
    >
      <div className="flex flex-col gap-3">
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
      </div>
      <div className="flex justify-between items-center bg-gray-200 p-1 rounded-full">
        <button className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full p-4 text-gray-900 font-semibold">
          Nippon Paint
        </button>
        <button className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full p-4 text-gray-900 font-semibold">
          Dulux
        </button>
      </div>
      <section className="grid grid-cols-2 gap-4">
        {vinilexColors.map((vinilexColor) => (
          <ColorPalette key={vinilexColor.id} color={vinilexColor} />
        ))}
      </section>
    </main>
  );
}
