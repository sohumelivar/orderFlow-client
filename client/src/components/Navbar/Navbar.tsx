import './Navbar.css';
import { NavLink } from 'react-router-dom';
import OrdersIcon from '../../assets/icons/clipboard-list.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';
import SquareCheckIcon from '../../assets/icons/square-check.svg?react';
import ChartNoAxesIcon from '../../assets/icons/chart-no-axes-combined.svg?react';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} >
                <OrdersIcon />
                <span>ORDERS</span>
            </NavLink >

            <NavLink to="/create" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} >
                <PlusIcon />
                <span>CREATE</span>
            </NavLink >

            <NavLink to="/completed" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} >
                <SquareCheckIcon />
                <span>DONE</span>
            </NavLink >

            <NavLink to="/stats" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} >
                <ChartNoAxesIcon />
                <span>STATS</span>
            </NavLink >
        </nav>
    );
};