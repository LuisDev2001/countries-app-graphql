import { create } from "zustand"
import { devtools } from "zustand/middleware"

export interface State {
  currencies: string[]
}

export interface Action {
  updateCurrencies: (currency: string[]) => void
}

export const useCurrencyStore = create<State & Action>()(devtools((set) => ({
  currencies: [],
  updateCurrencies: (payload) => set(() => ({ currencies: payload })),
})))


