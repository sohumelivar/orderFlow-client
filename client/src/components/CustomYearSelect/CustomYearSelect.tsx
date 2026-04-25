import { useTimeFilterStore } from '../../store/timeFilterStore';
import { getArrayYears } from '../../utils/getArrayYears';
import './CustomYearSelect.css';

export const CustomYearSelect = () => {
    const setLastWeekIsActive = useTimeFilterStore((state) => state.setLastWeekIsActive);
    const setLastMonthIsActive = useTimeFilterStore((state) => state.setLastMonthIsActive);
    const setAllTimeIsActive = useTimeFilterStore((state) => state.setAllTimeIsActive);
    const setMonthIsActive = useTimeFilterStore((state) => state.setMonthIsActive);
    const setYearIsActive = useTimeFilterStore((state) => state.setYearIsActive);
    const yearIsActive = useTimeFilterStore((state) => state.yearIsActive);
    
    const yearsArray = getArrayYears();

    const handleCustomYearSelect = () => {
        console.log('yearIsActive', yearIsActive);
        
        setLastWeekIsActive(false);
        setLastMonthIsActive(false);
        setAllTimeIsActive(false);
        setMonthIsActive(false);
        setYearIsActive(true);
    };

    return (
        <div className={`yearsSelectWrap ${yearIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleCustomYearSelect}>
            CUSTOM YEAR
        </div>
    );
};
