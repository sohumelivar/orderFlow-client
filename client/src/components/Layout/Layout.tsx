import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { useTelegramAuth } from '../../hooks/useTelegramAuth';

import './Layout.css';

export const Layout = () => {
  const { error } = useTelegramAuth();

  if (error) {
    console.error('Telegram auth error:', error);
  }

  return (
  <>
    <main className="layout">
      <Outlet />
    </main>
    <Navbar />
  </>
  );
};