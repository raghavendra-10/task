import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPatients } from './state/actions';
import axios from 'axios';

const Patients = ({ patients, setPatients }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, [setPatients]);
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Patients</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="px-6 py-4 whitespace-nowrap">{patient.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
    patients: state.patients.patients,
  });
  
  const mapDispatchToProps = {
    setPatients,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Patients);