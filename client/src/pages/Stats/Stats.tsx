import './Stats.css';
import { useStatsAllTime } from '../../hooks/useStatsAllTime';
import { useStatsStore } from '../../store/statsStore';
import TrendingUp from '../../assets/icons/trending-up.svg?react';
import Wallet from '../../assets/icons/wallet.svg?react';
import Alert from '../../assets/icons/triangle-alert.svg?react';
import Clock from '../../assets/icons/clock.svg?react';
import { TimeFilter } from '../../components/TimeFilter/TimeFilter';
import { PayDebt } from '../../components/PayDebt/PayDebt';

export const StatsPage = () => {
    const stats = useStatsStore((state) => state.stats);
    useStatsAllTime();

    if (!stats) {
        return (
            <div>...loading</div>
        );
    };

    return (
        <div>
            <div className='headerWrapper'>
                    <div className='active-page-header'>
                        DASHBOARD
                    </div>
            </div>


            <div className='totalBlockWrapp'>
                
                <div className={`totalCompletedBlock`}>
                    <div className={`iconWrapp`}>
                        <TrendingUp className='totalCompletedIcon'/>
                    </div>
                    <div className='infoWrapp'>
                        <div className={`titleBlockStats`}>TOTAL COMPLETED</div>
                        <div className={`valueBlockStats`}>{`₪ ${stats?.summary.total_completed}`}</div>
                    </div>
                </div>

                <div className={`totalPaidBlock`}>
                    <div className={`iconWrapp`}>
                        <Wallet className='totalPaidIcon'/>
                    </div>
                    <div className='infoWrapp'>
                        <div className={`titleBlockStats`}>TOTAL PAID</div>
                        <div className={`valueBlockStats`}>{`₪ ${stats?.summary.total_paid}`}</div>
                    </div>
                </div>

            </div>


            <div className='paymentsWrapp'>

                <div className={`outstandingDebtBlock`}>
                    <div className={`iconWrapp`}>
                        <Alert className='outstandingDebtIcon'/>
                    </div>
                    <div className='infoWrapp'>
                        <div className={`titleBlockStats`}>OUTSTANDING DEBT</div>
                        <div className={`valueBlockStats`}>{`₪ ${stats?.summary.outstanding_debt <= 0 ? stats?.summary.outstanding_debt : `-${stats?.summary.outstanding_debt}`}`}</div>
                    </div>
                </div>

                <div className={`pendingPaymentsBlock`}>
                    <div className={`iconWrapp`}>
                        <Clock className='pendingPaymentsIcon' />
                    </div>
                    <div className='infoWrapp'>
                        <div className={`titleBlockStats`}>PENDING PAYMENTS</div>
                        <div className={`valueBlockStats`}>{`₪ ${stats?.summary?.pendingPaymentsTotal}`}</div>
                    </div>
                </div>

            </div>
            <TimeFilter />
            <PayDebt />

        </div>
    );
};
