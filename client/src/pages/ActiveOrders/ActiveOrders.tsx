import { useEffect } from 'react';
import { testRequest } from '../../api/test';


export const ActiveOrdersPage = () => {
    useEffect(() => {
        testRequest()
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>Active Orders</div>
    );
};