import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import EntriesTable from '../components/home/EntriesTable';
import EntriesCard from '../components/home/EntriesCard';
import  Hero  from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import  Footer  from '../components/Footer';
import PatientCard from '../components/home/PatientCard'
import MedicationCard from '../components/home/MedicationCard';
import AdminCard from '../components/home/AdminCard';
import CardPanel from '../components/home/CardPanel';

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/entries')
      .then((response) => {
        setEntries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
       <Header />
      <Hero /> 
      <CardPanel />
      
      {/* <div style={{ backgroundColor: 'rgb(243, 227, 227);', height: '160px' }}>
      </div> */}
      {/* THIS IS ENTRIES TABLE  */}
      {/* <div className='flex justify-between items-center '>
        <h1 className='text-3xl my-8'>Entries</h1>
        <div className="nav-button">
            <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
        </div>
        <Link to='/entries/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <EntriesTable entries={entries} />
      ) : (
        <EntriesCard entries={entries} />
      )}
      <Footer /> */}
    </div>
  );
};

export default Home;
