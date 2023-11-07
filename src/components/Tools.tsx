'use client';

import { useColorActions } from '@/store/color';
import { usePositionActions } from '@/store/position';
import { MouseEvent, RefObject, useState } from 'react';
import {
  MdCheck,
  MdContentCopy,
  MdFormatColorFill,
  MdZoomOutMap,
} from 'react-icons/md';

interface ToolsProps {
  paletteRef: RefObject<HTMLElement>;
  hexCode: string;
}

export default function Tools({ paletteRef, hexCode }: ToolsProps) {
  const [isCopied, setIsCopied] = useState(false);
  const colorActions = useColorActions();
  const positionActions = usePositionActions();

  const handleCopyToClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(hexCode);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const handleZoomOutColor = (event: MouseEvent<HTMLButtonElement>) => {
    if (paletteRef.current) {
      const colorPaletteWidth = paletteRef.current.offsetWidth;
      const colorPaletteHeight = paletteRef.current.offsetHeight;

      colorActions.zoomOutColor(hexCode);
      positionActions.setPagePosition(
        event.pageX - colorPaletteWidth,
        event.pageY - colorPaletteHeight
      );
    }
  };

  const handleChangeBackgroundColor = () => {
    colorActions.changeBackgroundColor(hexCode);
  };

  return (
    <>
      <button
        onClick={handleCopyToClipboard}
        className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full py-1 px-2 text-xs text-gray-900 font-semibold"
      >
        {isCopied ? (
          <MdCheck size={18} className="text-gray-900" />
        ) : (
          <MdContentCopy size={18} className="text-gray-900" />
        )}
      </button>
      <button
        onClick={handleZoomOutColor}
        className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full py-1 px-2 text-xs text-gray-900 font-semibold"
      >
        <MdZoomOutMap size={18} className="text-gray-900" />
      </button>
      <button
        onClick={handleChangeBackgroundColor}
        className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full py-1 px-2 text-xs text-gray-900 font-semibold"
      >
        <MdFormatColorFill size={18} className="text-gray-900" />
      </button>
    </>
  );
}
