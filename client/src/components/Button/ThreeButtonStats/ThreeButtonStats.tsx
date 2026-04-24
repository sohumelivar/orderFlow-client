import { getStatsAllTime, getStatsLastMonth, getStatsLastWeek } from '../../../api/stats';
import { useStatsStore } from '../../../store/statsStore';
import './ThreeButtonStats.css';

export const ThreeButtonStats = () => {
    const setStats = useStatsStore((state) => state.setStats);

    const handleStatsLastWeek = async () => {
        const data = await getStatsLastWeek();
        setStats(data);
    };

    const handleStatsLastMonth = async () => {
        const data = await getStatsLastMonth();
        setStats(data);
    };

      const handleStatsAllTime = async () => {
        const data = await getStatsAllTime();
        setStats(data);
    };
    
    return (
        <div className='threeButtonWrapp'>
            <button className={`threeButtonStats ButtonStatsLastWeek `} onClick={handleStatsLastWeek}>LAST WEEK</button>
            <button className={`threeButtonStats ButtonStatsLastMonth `} onClick={handleStatsLastMonth}>LAST MONTH</button>
            <button className={`threeButtonStats ButtonStatsAllTime `} onClick={handleStatsAllTime}>ALL TIME</button>
        </div>
    );
};
