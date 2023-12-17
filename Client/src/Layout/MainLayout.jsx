import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Componants/Navbar/Navbar';
import FooterCard from '../Componants/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
            <div className='Fixed'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <FooterCard></FooterCard>
          
        </div>
    );
};

export default MainLayout;