import { months } from '../constants/months';

export const getArrayMonths = (year: number): string[] => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const monthsCount = year === currentYear ? currentMonth : 12;
    return months.slice(0, monthsCount);
};