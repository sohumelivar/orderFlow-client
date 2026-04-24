import { create } from 'zustand';
import type { StatisticsType } from '../types/stats.types';

type StatsState = {
    stats: StatisticsType | null;
    setStats: (stats: StatisticsType) => void;
};

export const useStatsStore = create<StatsState>((set) => ({
    stats: null,

    setStats: (stats: StatisticsType) =>
        set({stats}),
}));
