'use client';

import { Color } from '@/lib/types';
import { useRef, useState } from 'react';
import Tools from './Tools';

interface ColorPaletteProps {
  color: Color;
}

export default function ColorPalette({ color }: ColorPaletteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [colorText, setColorText] = useState(color.name);

  return (
    <div
      ref={ref}
      className="group/color-palette flex flex-col justify-center items-center gap-2"
    >
      <div
        onMouseEnter={() => setColorText(color.hexCode)}
        onMouseLeave={() => setColorText(color.name)}
        style={{
          backgroundColor: color.hexCode,
        }}
        className="h-24 w-24 rounded-full shadow-md hover:scale-110 transition ease-in-out delay-150 duration-300"
      />
      <p className="text-center text-gray-900">{colorText}</p>
      <div className="flex invisible group-hover/color-palette:visible bg-gray-200 rounded-full p-1">
        <Tools paletteRef={ref} hexCode={color.hexCode} />
      </div>
    </div>
  );
}
