import { useEffect, useState } from 'react';
import { authWithTelegram } from '../api/auth';
import { tokenService } from '../api/token';

export const useTelegramAuth = (initData: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const token = tokenService.getToken();

        if (token) {
            setIsAuthorized(true);
            return;
        }

        setIsLoading(true);

        authWithTelegram({initData})
            .then(() => {
                setIsAuthorized(true);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [initData]);

    return { isLoading, isAuthorized, error };
};