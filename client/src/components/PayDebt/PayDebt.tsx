import './PayDebt.css';
import { userRole } from '../../api/userRole';

export const PayDebt = () => {
    const role = userRole.getUserRole();

    return (
        <div>
            {role === 'manufacturer' ?
            <div className={`manufacturerWrap`}>
                <button className={`manufacturerBtn`}>
                    {`PENDING PAYMENTS`}
                </button>
            </div>  
            : 
            <div className={`ownerWrap`}>
                <button>
                    TEST
                </button>
            </div>  
            }
        </div>
    );
};