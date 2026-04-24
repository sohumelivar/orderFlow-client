import { useEffect, useState } from 'react';
import './Stats.css';

export const StatsPage = () => {
    const [initData, setInitData] = useState<string>('');

    useEffect(() => {
        const data = window.Telegram?.WebApp?.initData;
        setInitData(data || '');
    }, []);

    const handleCopy = async (): Promise<void> => {
        try {
            await navigator.clipboard.writeText(initData);
            console.log('copied');
        } catch (error) {
            console.log('copy error:', error);
        };
    };

    return (
        <div>
            <textarea
                value={initData}
                readOnly
                rows={6}
                style={{ width: '100%' }}
            />
            <button onClick={handleCopy}>
                Copy initData
            </button>
        </div>
    );
};
