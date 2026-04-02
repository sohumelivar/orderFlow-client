import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { useTelegramAuth } from '../../hooks/useTelegramAuth';
import { getInitData } from '../../utils/getInitData';
import './Layout.css';

export const Layout = () => {
    const initData = getInitData();
    const { isLoading, error } = useTelegramAuth(initData);

    if (isLoading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Authorization error</div>;
    }

    return (
        <>
            <main className="layout">
                <Outlet />
            </main>
            <div>{initData}</div>
            <Navbar />
        </>
    );
};