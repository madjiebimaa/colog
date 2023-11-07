'use client';

import ColorFilter from '@/components/ColorFilter';
import ColorModal from '@/components/ColorModal';
import ColorPalette from '@/components/ColorPalette';
import Header from '@/components/Header';
import { useBackgroundColor, useIsColorModalShow } from '@/store/color';
import vinilexColors from './data/vinilex-colors.json';

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
      <section className="flex flex-col gap-8">
        <Header />
        <ColorFilter />
      </section>
      <section className="grid grid-cols-2 gap-4">
        {vinilexColors.map((vinilexColor) => (
          <ColorPalette key={vinilexColor.id} color={vinilexColor} />
        ))}
      </section>
    </main>
  );
}
