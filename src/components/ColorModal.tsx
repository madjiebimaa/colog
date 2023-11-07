'use client';

import { useColorActions, useFullColor } from '@/store/color';

export default function ColorModal() {
  const fullColor = useFullColor();
  const colorActions = useColorActions();

  return (
    <div
      onClick={colorActions.zoomInColor}
      style={{ backgroundColor: fullColor }}
      className="h-screen w-screen fixed z-50 cursor-pointer overflow-hidden"
    />
  );
}
