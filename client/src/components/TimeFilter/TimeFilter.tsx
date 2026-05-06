import { getStatsAllTime, getStatsLastMonth, getStatsLastWeek } from '../../api/stats';
import { useStatsStore } from '../../store/statsStore';
import { useTimeFilterStore } from '../../store/timeFilterStore';
import './TimeFilter.css';
import { getArrayMonths } from '../../utils/getArrayMonths';
import { useState } from 'react';

export const TimeFilter = () => {
    const setStats = useStatsStore((state) => state.setStats);
    const setTimeFilter = useTimeFilterStore((state) => state.setTimeFilter);
    const resetCurrentYear = useTimeFilterStore((state) => state.resetCurrentYear);
    const lastWeekIsActive = useTimeFilterStore((state) => state.lastWeekIsActive);
    const lastMonthIsActive = useTimeFilterStore((state) => state.lastMonthIsActive);
    const allTimeIsActive = useTimeFilterStore((state) => state.allTimeIsActive);
    const monthIsActive = useTimeFilterStore((state) => state.monthIsActive);
    const yearIsActive = useTimeFilterStore((state) => state.yearIsActive);
    const state = useTimeFilterStore((state) => state);
    const currentYear = useTimeFilterStore((state) => state.currentYear);
    const [month, setMonth] = useState('MONTH');
    const setMonthHidden = useTimeFilterStore((state) => state.setMonthHidden);

    const handleStatsLastWeek = async () => {
        setTimeFilter('lastWeekIsActive');
        const data = await getStatsLastWeek();
        setMonth('MONTH')
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        setTimeFilter('lastMonthIsActive');
        const data = await getStatsLastMonth();
        setMonth('MONTH')
        setStats(data);
    };

    const handleStatsAllTime = async () => {
        setTimeFilter('allTimeIsActive');
        const data = await getStatsAllTime();
        setMonth('MONTH')
        setStats(data);
    };

    const handleStatsMonth = async () => {
        setTimeFilter('monthIsActive');
        if (monthIsActive) {
            setTimeFilter('allTimeIsActive');
        }
    };

    const handleMonth = (e: React.MouseEvent<HTMLDivElement>) => {
        const selectedMonth = e.currentTarget.textContent;
        setMonth(selectedMonth);
        setMonthHidden();
    };

    const arrayMonths = getArrayMonths(currentYear);

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
                                onClick={handleMonth}>
                                    {el}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`yearWrap`}>{`YEAR`}</div>
            </div>
        </div>
    );
};
