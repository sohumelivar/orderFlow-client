import './Navbar.css';
import OrdersIcon from '../../assets/icons/clipboard-list.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';
import SquareCheckIcon from '../../assets/icons/square-check.svg?react';
import ChartNoAxesIcon from '../../assets/icons/chart-no-axes-combined.svg?react';


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-item">
                <OrdersIcon />
                <span>ORDERS</span>
            </div>

            <div className="nav-item">
                <PlusIcon />
                <span>CREATE</span>
            </div>

            <div className="nav-item">
                <SquareCheckIcon />
                <span>DONE</span>
            </div>

            <div className="nav-item">
                <ChartNoAxesIcon />
                <span>STATS</span>
            </div>
        </nav>
    );
};