import './CustomEditOrdeTubeSelect.css';
import { pipePairs } from '../../constants/pipePairs';

export const CustomEditOrdeTubeSelect = () => {
    
    return (
        <div className='tubeWrap'>
                <div className={`tubeSize`}>TUBE SIZE</div>
                <div className={`tubeOptions`}>{"tubeSizeInput"}</div>
                <div className={`tubeDropwown`}>
                    {pipePairs.map((el) => (
                        <div key={el.display_name} className={`tubeOptions optionsColor`}>{el.display_name}</div>
                    ))}
                </div>
        </div>
    );
};
