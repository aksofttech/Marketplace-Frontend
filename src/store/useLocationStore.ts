import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LocationState {
  lat: number | null;
  lng: number | null;
  name: string;
  state: string;
  isDetected: boolean;
  setLocation: (lat: number, lng: number, name: string, state: string, isDetected?: boolean) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      lat: null,
      lng: null,
      name: 'Mumbai',
      state: 'Maharashtra',
      isDetected: false,
      setLocation: (lat, lng, name, state, isDetected = false) =>
        set({ lat, lng, name, state, isDetected }),
      clearLocation: () =>
        set({ lat: null, lng: null, name: 'Mumbai', state: 'Maharashtra', isDetected: false }),
    }),
    {
      name: 'user-location-storage', // name of the item in the storage (must be unique)
    }
  )
);
