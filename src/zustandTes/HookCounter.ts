import { create } from "zustand";

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounter = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => {
        if (state.count > 0) {
            return { count: state.count - 1 };
        }
        return { count: 0 };
    }),
}));