'use client';

import { useColorActions, useFullColor } from '@/store/color';
import { usePagePosition } from '@/store/position';

export default function ColorModal() {
  const fullColor = useFullColor();
  const colorActions = useColorActions();
  const { x, y } = usePagePosition();

  const handleClick = () => {
    colorActions.zoomInColor();
    setTimeout(() => {
      window.scrollTo({ left: x, top: y, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: fullColor }}
      className="h-screen w-screen fixed z-50 cursor-pointer overflow-hidden"
    />
  );
}
