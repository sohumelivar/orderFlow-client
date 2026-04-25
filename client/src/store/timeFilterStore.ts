import { create } from "zustand";

type TimeFilterState = {
    currentYear: number;
    lastWeekIsActive: boolean;
    lastMonthIsActive: boolean;
    allTimeIsActive: boolean;
    monthIsActive: boolean;
    yearIsActive: boolean;
    setLastWeekIsActive: (value: boolean) => void;
    setLastMonthIsActive: (value: boolean) => void;
    setAllTimeIsActive: (value: boolean) => void;
    setMonthIsActive: (value: boolean) => void;
    setYearIsActive: (value: boolean) => void;
    setCurrentYear: (value: number) => void;
    resetCurrentYear: () => void;
};

export const useTimeFilterStore = create<TimeFilterState>((set) => ({
    currentYear: new Date().getFullYear(),
    lastWeekIsActive: false,
    lastMonthIsActive: false,
    allTimeIsActive: true,
    monthIsActive: false,
    yearIsActive: false,

    setLastWeekIsActive: (value: boolean) =>
        set({lastWeekIsActive: value}),

    setLastMonthIsActive: (value: boolean) =>
        set({lastMonthIsActive: value}),

    setAllTimeIsActive: (value: boolean) =>
        set({allTimeIsActive: value}),

    setMonthIsActive: (value: boolean) =>
        set({monthIsActive: value}),

    setYearIsActive: (value: boolean) =>
        set({yearIsActive: value}),

    setCurrentYear: (value: number) =>
        set({currentYear: value}),

    resetCurrentYear: () =>
        set({currentYear: new Date().getFullYear(), yearIsActive: false}),

}));
