


import { Outlet } from 'react-router-dom';
import Header from './Header';

const Mother = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mother;