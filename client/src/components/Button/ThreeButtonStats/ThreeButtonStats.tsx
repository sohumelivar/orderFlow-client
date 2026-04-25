import { getStatsAllTime, getStatsLastMonth, getStatsLastWeek } from '../../../api/stats';
import { useStatsStore } from '../../../store/statsStore';
import './ThreeButtonStats.css';
import { CustomMonthSelect } from '../../CustomMonthSelect/CustomMonthSelect';
import { CustomYearSelect } from '../../CustomYearSelect/CustomYearSelect';
import { useTimeFilterStore } from '../../../store/timeFilterStore';

export const ThreeButtonStats = () => {
    const setStats = useStatsStore((state) => state.setStats);
    const lastWeekIsActive = useTimeFilterStore((state) => state.lastWeekIsActive);
    const lastMonthIsActive = useTimeFilterStore((state) => state.lastMonthIsActive);
    const allTimeIsActive = useTimeFilterStore((state) => state.allTimeIsActive);
    const setLastWeekIsActive = useTimeFilterStore((state) => state.setLastWeekIsActive);
    const setLastMonthIsActive = useTimeFilterStore((state) => state.setLastMonthIsActive);
    const setAllTimeIsActive = useTimeFilterStore((state) => state.setAllTimeIsActive);
    const setMonthIsActive = useTimeFilterStore((state) => state.setMonthIsActive);
    const setYearIsActive = useTimeFilterStore((state) => state.setYearIsActive);
    
    
    const handleStatsLastWeek = async () => {
        setLastWeekIsActive(true);
        setLastMonthIsActive(false);
        setAllTimeIsActive(false);
        setMonthIsActive(false);
        setYearIsActive(false);
        const data = await getStatsLastWeek();
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        setLastWeekIsActive(false);
        setLastMonthIsActive(true);
        setAllTimeIsActive(false);
        setMonthIsActive(false);
        setYearIsActive(false);
        const data = await getStatsLastMonth();
        setStats(data);
    };

      const handleStatsAllTime = async () => {
        setLastWeekIsActive(false);
        setLastMonthIsActive(false);
        setAllTimeIsActive(true);
        setMonthIsActive(false);
        setYearIsActive(false);
        const data = await getStatsAllTime();
        setStats(data);
    };
    
    return (
        <div className='threeButtonWrapp'>
            <div className='firstLabel'>
                <button className={`threeButtonStats ButtonStatsLastWeek ${lastWeekIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsLastWeek}>LAST WEEK</button>
                <button className={`threeButtonStats ButtonStatsLastMonth ${lastMonthIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsLastMonth}>LAST MONTH</button>
                <button className={`threeButtonStats ButtonStatsAllTime ${allTimeIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsAllTime}>ALL TIME</button>
            </div>
            <div className='secondLabel'>
                <CustomMonthSelect />
                <CustomYearSelect />
            </div>
        </div>
    );
};
