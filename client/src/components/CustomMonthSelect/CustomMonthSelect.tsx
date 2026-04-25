import { useTimeFilterStore } from '../../store/timeFilterStore';
import './CustomMonthSelect.css';

export const CustomMonthSelect = () => {
    const setLastWeekIsActive = useTimeFilterStore((state) => state.setLastWeekIsActive);
    const setLastMonthIsActive = useTimeFilterStore((state) => state.setLastMonthIsActive);
    const setAllTimeIsActive = useTimeFilterStore((state) => state.setAllTimeIsActive);
    const setMonthIsActive = useTimeFilterStore((state) => state.setMonthIsActive);
    const setYearIsActive = useTimeFilterStore((state) => state.setYearIsActive);
    const monthIsActive = useTimeFilterStore((state) => state.monthIsActive);

    const handleCustomMonthSelect = () => {
        setLastWeekIsActive(false);
        setLastMonthIsActive(false);
        setAllTimeIsActive(false);
        setMonthIsActive(true);
        setYearIsActive(false);
    };

    return (
        <div className={`monthSelectWrap ${monthIsActive ? 'statsButtonIsActive' : ''}`} onClick={handleCustomMonthSelect}>
            CUSTOM MONTH
        </div>
    );
};
