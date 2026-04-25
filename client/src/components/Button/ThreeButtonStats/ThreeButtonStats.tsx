import { useState } from 'react';
import { getStatsAllTime, getStatsLastMonth, getStatsLastWeek } from '../../../api/stats';
import { useStatsStore } from '../../../store/statsStore';
import './ThreeButtonStats.css';

export const ThreeButtonStats = () => {
    const setStats = useStatsStore((state) => state.setStats);
    const [lastWeekIsActive, setLastWeekIsActive] = useState<boolean>(false);
    const [lastMonthIsActive, setLastMonthIsActive] = useState<boolean>(false);
    const [allTimeIsActive, setAllTimeIsActive] = useState<boolean>(true)

    const handleStatsLastWeek = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setLastWeekIsActive(true);
        setLastMonthIsActive(false);
        setAllTimeIsActive(false);
        const data = await getStatsLastWeek();
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        setLastWeekIsActive(false);
        setLastMonthIsActive(true);
        setAllTimeIsActive(false);
        const data = await getStatsLastMonth();
        setStats(data);
    };

      const handleStatsAllTime = async () => {
        setLastWeekIsActive(false);
        setLastMonthIsActive(false);
        setAllTimeIsActive(true);
        const data = await getStatsAllTime();
        setStats(data);
    };
    
    return (
        <div className='threeButtonWrapp'>
            <button className={`threeButtonStats ButtonStatsLastWeek ${lastWeekIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsLastWeek}>LAST WEEK</button>
            <button className={`threeButtonStats ButtonStatsLastMonth ${lastMonthIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsLastMonth}>LAST MONTH</button>
            <button className={`threeButtonStats ButtonStatsAllTime ${allTimeIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleStatsAllTime}>ALL TIME</button>
        </div>
    );
};
