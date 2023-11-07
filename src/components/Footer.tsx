'use client';

import { Noto_Sans_Mono } from 'next/font/google';

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Footer() {
  return (
    <p
      className={`${notoSansMono.className} text-center sm:text-left text-sm text-gray-900 pb-10`}
    >
      Colors from the <span className="underline">Nippon Paint</span> and{' '}
      <span className="underline">Dulux</span> &middot; Made by{' '}
      <span className="underline">Muhammad Adjie Bimaditya</span>
    </p>
  );
}
