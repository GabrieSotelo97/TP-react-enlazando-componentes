import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Routes, Route} from 'react-router-dom'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link to='/'>
                    <a className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></a>
                </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link to='Pages'>
                    <a className="nav-link collapsed" >
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                
                <li className="nav-item">
                <Link to="Movies">
                    <a className="nav-link" >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                        </Link>
                </li>
                
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                <Link to='Table'>
                    <a className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

                
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route path='/'  element={<ContentWrapper />} />
                <Route path='Pages' element={<ContentRowCenter />} />
                <Route path='Movies' element={<ContentRowMovies />} />
                <Route path='Table' element={<Chart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>



            
        </React.Fragment>
    )
}
export default SideBar;