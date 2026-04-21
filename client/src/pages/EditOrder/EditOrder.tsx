import { CustomEditOrdeTubeSelect } from '../../components/CustomEditOrdeTubeSelect/CustomEditOrdeTubeSelect';
import './EditOrder.css';

export const EditOrder = () => {
    return (
        <div className='editOrderWrapper'>
            <div className='editOrderHeader'>
                {`EDIT ORDER`}
            </div>
            <CustomEditOrdeTubeSelect />
        </div>
    );
};
