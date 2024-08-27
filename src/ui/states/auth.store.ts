import { create } from 'zustand';


type authData = {
    isAuthenticated: boolean;
    checkedAuth: boolean;
    setAuthed: (authed: boolean) => void;
    setCheckedAuth: (hasChecked: boolean) => void;
}

const useAuthStore = create<authData>((set) => ({
    isAuthenticated: false,
    checkedAuth: false,
    setAuthed: (authed: boolean) => {
        set({ isAuthenticated: authed});
    },
    setCheckedAuth: (hasChecked: boolean) => {
        set({ isAuthenticated: hasChecked});
    }
}));

export default useAuthStore;