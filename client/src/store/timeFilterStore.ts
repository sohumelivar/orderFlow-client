import { create } from "zustand";

type TimeFilterState = {
    currentYear: number;
    lastWeekIsActive: boolean;
    lastMonthIsActive: boolean;
    allTimeIsActive: boolean;
    monthIsActive: boolean;
    yearIsActive: boolean;
    setTimeFilter: (timeFilterValue: string) => void;
    resetCurrentYear: () => void;
};

export const useTimeFilterStore = create<TimeFilterState>((set) => {
    return (
        {
        currentYear: new Date().getFullYear(),
        lastWeekIsActive: false,
        lastMonthIsActive: false,
        allTimeIsActive: true,
        monthIsActive: false,
        yearIsActive: false,
    
        setTimeFilter: (timeFilterValue: string) => 
            set((state) => {
                const timeFilters = Object.fromEntries(Object.entries(state).filter(([_, value]) => typeof value === 'boolean').map(([key]) => (
                    [
                        key,
                        key === timeFilterValue
                    ]
                )));
                return {...state, ...timeFilters};
            }),
  
        resetCurrentYear: () =>
            set({currentYear: new Date().getFullYear(), yearIsActive: false}),
        }
    );
});
