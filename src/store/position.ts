import { create } from 'zustand';

type PositionState = {
  pagePosition: { x: number; y: number };
};

type PositionActions = {
  actions: {
    setPagePosition: (x: number, y: number) => void;
  };
};

const initialState: PositionState = {
  pagePosition: {
    x: 0,
    y: 0,
  },
};

const cursorStore = create<PositionState & PositionActions>()((set) => ({
  ...initialState,
  actions: {
    setPagePosition: (x, y) => set({ pagePosition: { x, y } }),
  },
}));

export const usePagePosition = () => cursorStore((state) => state.pagePosition);
export const usePositionActions = () => cursorStore((state) => state.actions);
