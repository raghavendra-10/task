import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import UserDetails from './components/UserDetails';
import Main from './components/Main';
import Patients from './components/Patients';
import store from './components/state/Store'; 


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/main" element={<Main />} />
        <Route path="/patients" element={<Patients />} />
     
      </Routes>
    </Router>
  </Provider>
  );
};

export default App;
