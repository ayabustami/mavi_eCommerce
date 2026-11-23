import { create } from 'zustand'

export const UseThemeStore = create((set,get) => ({
  mode: localStorage.getItem('mode') || 'light',

  toggleMode: () =>{
      const currentMode =get().mode;
      const newMode = currentMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode);
      set({ mode: newMode }) ;
    }
}))