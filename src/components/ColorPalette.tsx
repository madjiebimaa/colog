'use client';

import { Color } from '@/lib/types';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

interface ColorPaletteProps {
  color: Color;
}

export default function ColorPalette({ color }: ColorPaletteProps) {
  const [colorText, setColorText] = useState(color.name);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color.hexCode);
  };

  return (
    <div className="group/color-palette flex flex-col justify-center items-center gap-2">
      <div
        onMouseEnter={() => setColorText(color.hexCode)}
        onMouseLeave={() => setColorText(color.name)}
        style={{
          backgroundColor: color.hexCode,
        }}
        className="h-24 w-24 rounded-full cursor-pointer shadow-md hover:scale-110 transition ease-in-out delay-150 duration-300"
      />
      <p className="text-gray-900">{colorText}</p>
      <div className="flex invisible group-hover/color-palette:visible bg-gray-200 rounded-full p-1">
        <button
          onClick={handleCopyToClipboard}
          className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full py-1 px-2 text-xs text-gray-900 font-semibold"
        >
          <MdContentCopy size={18} className="text-gray-900" />
        </button>
      </div>
    </div>
  );
}
