import { getStatsAllTime,
    getStatsLastMonth,
    getStatsLastWeek,
    getStatsMonth,
    getStatsYear,
} from '../../api/stats';
import { useStatsStore } from '../../store/statsStore';
import { useTimeFilterStore } from '../../store/timeFilterStore';
import './TimeFilter.css';
import { getArrayMonths } from '../../utils/getArrayMonths';
import { getArrayYears } from '../../utils/getArrayYears';
import React, { useEffect, useState } from 'react';

export const TimeFilter = () => {
    const setStats = useStatsStore((state) => state.setStats);
    const setTimeFilter = useTimeFilterStore((state) => state.setTimeFilter);
    const lastWeekIsActive = useTimeFilterStore((state) => state.lastWeekIsActive);
    const lastMonthIsActive = useTimeFilterStore((state) => state.lastMonthIsActive);
    const allTimeIsActive = useTimeFilterStore((state) => state.allTimeIsActive);
    const monthIsActive = useTimeFilterStore((state) => state.monthIsActive);
    const yearIsActive = useTimeFilterStore((state) => state.yearIsActive);
    const currentYear = useTimeFilterStore((state) => state.currentYear);
    const [month, setMonth] = useState('MONTH');
    const [year, setYear] = useState('YEAR');
    const setMonthHidden = useTimeFilterStore((state) => state.setMonthHidden);
    const setYearHidden = useTimeFilterStore((state) => state.setYearHidden);

    useEffect(() => {
        setTimeFilter('allTimeIsActive');
    }, [])

    

    const handleStatsLastWeek = async () => {
        setTimeFilter('lastWeekIsActive');
        const data = await getStatsLastWeek();
        setYear('YEAR');
        setMonth('MONTH');
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        setTimeFilter('lastMonthIsActive');
        const data = await getStatsLastMonth();
        setMonth('MONTH');
        setYear('YEAR');
        setStats(data);
    };

    const handleStatsAllTime = async () => {
        setTimeFilter('allTimeIsActive');
        const data = await getStatsAllTime();
        setMonth('MONTH');
        setYear('YEAR');
        setStats(data);
    };

    const handleStatsMonth = () => {
        setTimeFilter('monthIsActive');
        if (monthIsActive) {
            setTimeFilter('allTimeIsActive');
        }
    };

    const handleStatsYear = () => {
        setTimeFilter('yearIsActive');
        if (yearIsActive) {
            setTimeFilter('allTimeIsActive');
        }
    };

    const handleMonth = async (e: React.MouseEvent<HTMLDivElement>) => {
        const selectedMonth = e.currentTarget.textContent;
        const monthId = Number(e.currentTarget.dataset.monthId);
        setMonth(selectedMonth);
        if (year === 'YEAR') {
            setYear(String(currentYear));
        }
        setMonthHidden();
        const data = await getStatsMonth(monthId, currentYear);
        setStats(data);
    };

    const handleYear = async (e: React.MouseEvent<HTMLDivElement>) => {
        const selectedYear = e.currentTarget.textContent;
        setYear(selectedYear);
        setYearHidden();
        const data = await getStatsYear(Number(selectedYear));
        setStats(data);
    };

    const arrayMonths = getArrayMonths(currentYear);
    const arrayYears = getArrayYears();

    return (
        <div className={`timeFilterWrap`}>
            <div className={`first001`}>
                <button 
                    className={`timeFilterBtn ${lastWeekIsActive ? 'activeTimeFilter' : ''}`}
                    onClick={handleStatsLastWeek}>
                        {`LAST WEEK`}
                </button>
                <button 
                    className={`timeFilterBtn ${lastMonthIsActive ? 'activeTimeFilter' : ''}`}
                    onClick={handleStatsLastMonth}>
                        {`LAST MONTH`}
                </button>
                <button 
                    className={`timeFilterBtn ${allTimeIsActive ? 'activeTimeFilter' : ''}`}
                    onClick={handleStatsAllTime}>
                        {`ALL TIME`}
                </button>
            </div>
            <div className={`second001`}>
                <div className={`monthWrap`}>
                    <div className={`monthSelect ${monthIsActive ? 'activeTimeFilter' : ''}`} onClick={handleStatsMonth}>{month}</div>
                    <div className={`monthDropdown`}>
                        {arrayMonths && arrayMonths.map((el, i) => (
                            <div 
                                className={`monthSelect ${monthIsActive ? '' : 'hiddenMonth'}`}
                                key={`${el}_${i}`}
                                onClick={handleMonth}
                                data-month-id={i + 1}>
                                    {el}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`yearWrap`}>
                    <div className={`yearSelect ${yearIsActive ? 'activeTimeFilter' : ''}`} onClick={handleStatsYear}>{year}</div>
                    <div className={`yearDropdown`}>
                        {arrayYears && arrayYears.map((el, i) => (
                            <div 
                                className={`yearSelect ${yearIsActive ? '' : 'hiddenMonth'}`}
                                key={`${el}_${i}`}
                                onClick={handleYear}>
                                    {el}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
