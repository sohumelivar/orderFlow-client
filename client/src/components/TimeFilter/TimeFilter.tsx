import { getStatsAllTime, getStatsLastMonth, getStatsLastWeek } from '../../api/stats';
import { useStatsStore } from '../../store/statsStore';
import { useTimeFilterStore } from '../../store/timeFilterStore';
import './TimeFilter.css';

export const TimeFilter = () => {
    const setStats = useStatsStore((state) => state.setStats);
    const setTimeFilter = useTimeFilterStore((state) => state.setTimeFilter);
    const resetCurrentYear = useTimeFilterStore((state) => state.resetCurrentYear);
    const currentYear = useTimeFilterStore((state) => state.currentYear);
    const lastWeekIsActive = useTimeFilterStore((state) => state.lastWeekIsActive);
    const lastMonthIsActive = useTimeFilterStore((state) => state.lastMonthIsActive);
    const allTimeIsActive = useTimeFilterStore((state) => state.allTimeIsActive);
    const monthIsActive = useTimeFilterStore((state) => state.monthIsActive);
    const yearIsActive = useTimeFilterStore((state) => state.yearIsActive);
    const state = useTimeFilterStore((state) => state);


    
    const handleStatsLastWeek = async () => {
        setTimeFilter('lastWeekIsActive');
        const data = await getStatsLastWeek();
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        setTimeFilter('lastMonthIsActive');
        const data = await getStatsLastMonth();
        setStats(data);
    };

    const handleStatsAllTime = async () => {
        setTimeFilter('allTimeIsActive');
        const data = await getStatsAllTime();
        setStats(data);
    };

    return (
        <div className={`timeFilterWrap`}>
            <div className={`threeButtonWrap first001`}>
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
            <div className={`threeButtonWrap second001`}>

                <div className={`monthWrap`}>
                    <div className={`timeFilterBtn`}>ONE</div>
                    <div className={`timeFilterBtn`}>TWO</div>
                    <div className={`timeFilterBtn`}>THREE</div>
                </div>



                <div className={`yearWrap`}>{`YEAR`}</div>
            </div>
        </div>
    );
};
