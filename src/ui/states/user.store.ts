import { create } from 'zustand';

type userData = {
    userId: string | null;
    setUserId: (id: number) => void;
}

const useUserStore = create<userData>((set) => ({
    userId: null,
    setUserId: (id: number) => set({userId: String(id)}),
}));

export default useUserStore