import {clinics} from '../../assets/data/clinics';
import ClinicCard from '../../components/Clinics/ClinicCard';

const Clinics = () => {
  return (
  <>
  <section className = 'bg-[#40968c]'>
    <div className = 'container text-center'>
      <h2 className = 'heading text-white'> Find A Clinic </h2>
      <div className = 'max-w-[570px] mt-[30px] mx-auto bg-[#c9f0f2] rounded-md flex items-center justify-between'>
        <input type = "search" className = 'pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-[#40968c] font-bold' placeholder = 'Search For A Clinic Here' />
        <button className = 'btn mt-0 rounded-[0px] rounded-r-md bg-[#026a6e]'> Search </button>
      </div>
    </div>
  </section>

  <section>
    <div className = 'container'>
      <div className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
          {clinics.map ((clinic) => (
              <ClinicCard key = {clinic.id} clinic = {clinic}/> 
              ))}
      </div>
    </div>
  </section>
  </>
  );
};

export default Clinics;