import React, { useState } from 'react';
import UserDetails from './UserDetails'; // Import UserDetails component
import logo from "../assests/download.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserInjured, faCalendar, faList, faVideo, faPhone, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import Patients from './Patients';

const Main = () => {
  const navigate = useNavigate();  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);

    if (menuItem === 'logout') {

      navigate('/');
    }
  };
  return (
    <>
      <nav className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center px-9">
          <button id="menu-button" className="lg:hidden" onClick={toggleSidebar}>
            <i className="fas fa-bars text-cyan-500 text-lg"></i>
          </button>
          <div className="ml-1">
            <img src={logo} alt="logo" className="w-60" />
          </div>
          <div className="space-x-4">
            <button>
              <i className="fas fa-bell text-cyan-500 text-lg"></i>
            </button>
            <button>
              <i className="fas fa-user text-cyan-500 text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      <div className={`lg:flex ${sidebarVisible ? '' : 'hidden'}`}>
        <div className="lg:block py-6 w-64 bg-blue-600 border border-5 min-h-screen">
          {/* Sidebar Items */}
          <a href="#" className={` px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'home' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('home')}>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'patients' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('patients')}>
            <FontAwesomeIcon icon={faUserInjured} />
            <span>Patients</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'appointments' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('appointments')}>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Appointments</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'todo' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('todo')}>
            <FontAwesomeIcon icon={faList} />
            <span>To-Do</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'videos' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('videos')}>
            <FontAwesomeIcon icon={faVideo} />
            <span>Wellness Videos</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'callLogs' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('callLogs')}>
            <FontAwesomeIcon icon={faPhone} />
            <span>Call Logs</span>
          </a>
          <a href="#" className={`px-4 py-3 my-3 flex items-center space-x-4 rounded-lg text-white ${selectedMenuItem === 'logout' ? 'bg-blue-400' : 'hover:bg-blue-400'}`} onClick={() => handleMenuItemClick('logout')}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </a>
        </div>

        <div className="w-full px-6 py-8">
          {selectedMenuItem === 'home' && <UserDetails />}
          {selectedMenuItem === 'patients' && <Patients />}
        
        </div>
      </div>
    </>
  );
};

export default Main;
