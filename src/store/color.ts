import { create } from 'zustand';

type ColorState = {
  backgroundColor: string;
  fullColor: string;
  isColorModalShow: boolean;
};

type ColorActions = {
  actions: {
    changeBackgroundColor: (hexCode: string) => void;
    zoomOutColor: (hexCode: string) => void;
    zoomInColor: () => void;
  };
};

const initialState: ColorState = {
  backgroundColor: '#FFFFFF',
  fullColor: '#FFFFFF',
  isColorModalShow: false,
};

const colorStore = create<ColorState & ColorActions>()((set) => ({
  ...initialState,
  actions: {
    changeBackgroundColor: (hexCode) =>
      set((state) => ({
        backgroundColor:
          state.backgroundColor === hexCode
            ? initialState.backgroundColor
            : hexCode,
      })),
    zoomOutColor: (hexCode) =>
      set({ fullColor: hexCode, isColorModalShow: true }),
    zoomInColor: () => set({ isColorModalShow: false }),
  },
}));

export const useBackgroundColor = () =>
  colorStore((state) => state.backgroundColor);
export const useFullColor = () => colorStore((state) => state.fullColor);
export const useIsColorModalShow = () =>
  colorStore((state) => state.isColorModalShow);
export const useColorActions = () => colorStore((state) => state.actions);
