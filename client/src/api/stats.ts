import type { StatisticsType } from '../types/stats.types';
import { api } from './axios';

type StatsResponse = StatisticsType;

export const getStatsAllTime = async (): Promise<StatsResponse> => {
    const response = await api.get('/stats/?period=all_time');
    return response.data;
};

export const getStatsLastWeek = async (): Promise<StatsResponse> => {
    const response = await api.get('/stats/?period=last_week');
    return response.data;
};

export const getStatsLastMonth = async (): Promise<StatsResponse> => {
    const response = await api.get('/stats/?period=last_month');
    return response.data;
};
