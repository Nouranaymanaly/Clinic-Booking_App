import React from 'react'
import {clinics} from '../../assets/data/clinics'
import ClinicCard from './ClinicCard'
const ClinicList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {clinics.map((clinic) =>(
             <ClinicCard key={clinic.id} clinic={clinic}  /> 
            ))}
    </div>
  )
}

export default ClinicList