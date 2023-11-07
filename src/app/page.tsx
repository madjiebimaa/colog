'use client';

import ColorFilter from '@/components/ColorFilter';
import ColorModal from '@/components/ColorModal';
import ColorPalette from '@/components/ColorPalette';
import Footer from '@/components/Footer';
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
      className="min-h-screen flex flex-col sm:flex-row gap-10 p-5"
    >
      <section className="w-full sm:max-w-[300px] sm:h-screen flex flex-col justify-between sm:sticky sm:top-5 sm:overflow-hidden">
        <div className="flex flex-col gap-8">
          <Header />
          <ColorFilter />
        </div>
        <Footer />
      </section>
      <section className="grid flex-1 grid-cols-auto-fit gap-4">
        {vinilexColors.map((vinilexColor) => (
          <ColorPalette key={vinilexColor.id} color={vinilexColor} />
        ))}
      </section>
    </main>
  );
}
