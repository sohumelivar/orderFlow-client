import { useEffect } from "react";
import { getStatsAllTime } from "../api/stats";
import { useStatsStore } from "../store/statsStore";

export const useStatsAllTime = () => {
    const setStats = useStatsStore((state) => state.setStats);

    useEffect(() => {
            getStatsAllTime()
                .then((data) => {
                    setStats(data);
                })
                .catch((error) => {
                    console.error('Failed to load stats all time:', error);
                });
    }, [setStats]);
};
