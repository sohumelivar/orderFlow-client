import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { useTelegramAuth } from '../../hooks/useTelegramAuth';
import { getInitData } from '../../utils/getInitData';

export const Layout = () => {
    const initData = getInitData();
    const { isLoading, isAuthorized, error } = useTelegramAuth(initData);

    if (isLoading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Authorization error</div>;
    }

    return (
        <>
            <main>
                <Outlet />
            </main>
            <Navbar />
        </>
    );
};