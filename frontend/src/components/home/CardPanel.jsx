import React from 'react';
import PatientCard from './PatientCard';
import MedicationCard from './MedicationCard';
import AdminCard from './AdminCard';
import AnalyticsCard from './Analytics';

const CardPanel = () => {
  return (
   <section style={{display: 'flex', justifyContent: 'space-between'}}>
    <PatientCard/>
    <MedicationCard />
    <AnalyticsCard />
    <AdminCard />
   </section>
  )
}

export default CardPanel