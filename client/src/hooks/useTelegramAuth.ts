import { useEffect, useState } from 'react';
import { authWithTelegram } from '../api/auth';
import { tokenService } from '../api/token';
import { getInitData } from '../utils/getInitData';

export const useTelegramAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (tg) {
            tg.ready();
            tg.expand();
            (tg as any).disableVerticalSwipes?.();
        }

        const token = tokenService.getToken();

        if (token) {
            setIsAuthorized(true);
            return;
        }

        const initData = getInitData();

        if (!initData) {
            setError(new Error('Telegram initData is not available'));
            return;
        }

        setIsLoading(true);

        authWithTelegram(initData)
            .then(() => {
            setIsAuthorized(true);
            })
            .catch((err) => {
            setError(err);
            })
            .finally(() => {
            setIsLoading(false);
            });
    }, []);

    return { isLoading, isAuthorized, error };
};