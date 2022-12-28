import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface PlayerState {
  shouldShowPlayer: boolean;
  toggleShowPlayer: () => void;
  setShouldShowPlayer: (shouldShowPlayer: boolean) => void;
  isMini: boolean;
  toggleMini: () => void;
  setIsMini: (isMini: boolean) => void;
}

const defaultState = {
  shouldShowPlayer: false,
  isMini: false,
};

const usePlayerState = create<PlayerState>((set) => ({
  ...defaultState,
  toggleShowPlayer: () => set((state) => ({ shouldShowPlayer: !state.shouldShowPlayer })),
  setShouldShowPlayer: (shouldShowPlayer: boolean) => set({ shouldShowPlayer }),
  toggleMini: () => set((state) => ({ isMini: !state.isMini })),
  setIsMini: (isMini: boolean) => set({ isMini }),
}));

if (process.env.NODE_ENV === 'development' && typeof document !== 'undefined') {
  mountStoreDevtool('Player Store', usePlayerState);
}

export default usePlayerState;