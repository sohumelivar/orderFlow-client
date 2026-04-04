import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { useTelegramAuth } from '../../hooks/useTelegramAuth';

import './Layout.css';

export const Layout = () => {
	useTelegramAuth();

	return (
		<>
			<main className="layout">
				<Outlet />
			</main>
			<Navbar />
		</>
	);
};
