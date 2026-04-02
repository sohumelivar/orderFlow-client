import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Navbar } from '../Navbar/Navbar';
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

    const initData = tg?.initData;;
    if (!initData) {
      console.log('No Telegram initData');
      return;
    }

    authWithTelegram( initData )
      .then((data) => {
        console.log('Background auth success:', data);
      })
      .catch((error) => {
        console.error('Background auth error:', error);
      });
  }, []);

  return (
    // <>
    //   <main className="layout">
    //     <Outlet />
    //   </main>
    //     <div style={{ color: 'white', fontSize: 12 }}>
    //     {window.Telegram?.WebApp?.initData || 'NO INIT DATA'}
    //     </div>
    //   <Navbar />
    // </>
    <>
    <div
      style={{
        position: 'fixed',
        top: 10,
        left: 10,
        right: 10,
        zIndex: 99999,
        background: 'red',
        color: 'white',
        fontSize: 12,
        padding: 10,
        wordBreak: 'break-all',
      }}
    >
      TG: {String(!!window.Telegram)}
      <br />
      WA: {String(!!window.Telegram?.WebApp)}
      <br />
      INIT: {window.Telegram?.WebApp?.initData || 'NO INIT DATA'}
    </div>

    <main className="layout">
      <Outlet />
    </main>

    <Navbar />
  </>
  );
};