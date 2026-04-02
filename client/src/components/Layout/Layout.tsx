import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Navbar } from '../Navbar/Navbar';
import { getInitData } from '../../utils/getInitData';
import { authWithTelegram } from '../../api/auth';
import { tokenService } from '../../api/token';

import './Layout.css';

export const Layout = () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();
    }

    const token = tokenService.getToken();
    if (token) return;

    const initData = getInitData();
    if (!initData) {
      console.log('No Telegram initData');
      return;
    }

    authWithTelegram({ initData })
      .then((data) => {
        console.log('Background auth success:', data);
      })
      .catch((error) => {
        console.error('Background auth error:', error);
      });
  }, []);

  return (
    <>
      <main className="layout">
        <Outlet />
      </main>
        <div style={{ color: 'white', fontSize: 12 }}>
        {window.Telegram?.WebApp?.initData || 'NO INIT DATA'}
        </div>
      <Navbar />
    </>
  );
};