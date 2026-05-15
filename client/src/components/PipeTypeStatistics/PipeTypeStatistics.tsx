import './PipeTypeStatistics.css';
import Chart from '../../assets/icons/chart-no-axes-combined.svg?react';
import { useStatsStore } from '../../store/statsStore';

export const PipeTypeStatistics = () => {
    const orders = useStatsStore((state) => state.stats?.pipe_type_statistics.orders);
    const total = useStatsStore((state) => state.stats?.pipe_type_statistics.total);
    
    return (
        <div className={`pipeTypeStatisticsWrap`}>
            <div className={`pipeTypeStatisticsTitle`}>
                <Chart className={`chartIcon`}/>
                <span className={`pipeTypeStatisticsName`}>{`PIPE TYPE STATISTICS`}</span>
            </div>
            <div className={`sheetTitle`}>
                <div className={`sizeTitle`}>{`SIZE`}</div>
                <div className={`qtyTitle`}>{`QTY`}</div>
                <div className={`metersTitle`}>{`METERS`}</div>
                <div className={`amountTitle`}>{`AMOUNT`}</div>
            </div>
            {orders && orders.map((el) => (
                <div key={`${el.amount}*${el.quantity}`} className={`sheetValues`}>
                    <div className={`sizeTitle stValue`}>{el.display_name}</div>
                    <div className={`qtyTitle qtValue`}>{el.quantity} pcs</div>
                    <div className={`metersTitle mValue`}>{el.total_meter} m</div>
                    <div className={`amountTitle aValue`}>{el.amount} ₪</div>
                </div>
            ))}
            <div className={`sheetValues lastBlock`}>
                    <div className={`sizeTitle stValue lastBlockValue`}>{`TOTAL`}</div>
                    <div className={`qtyTitle qtValue lastBlockValue`}>{total?.quantity} pcs</div>
                    <div className={`metersTitle mValue lastBlockValue`}>{total?.meter} m</div>
                    <div className={`amountTitle aValue lastBlockValue`}>{total?.amount} ₪</div>
            </div>
        </div>
    );
};
