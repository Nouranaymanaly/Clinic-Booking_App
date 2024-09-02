import doctorImg01 from "../images/clinic-img01.png";
import doctorImg02 from "../images/clinic-img02.png";
import doctorImg03 from "../images/clinic-img03.png";

export const clinics = [
  {
    id: "01",
    name: "Cairo Clinic",
    clinicType: "Clinical Hub",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 400,
    address: "ABC, CAIRO, EGYPT",
  },
  {
    id: "02",
    name: "Giza Clinic",
    clinicType: "Clinical Hub",
    avgRating: 4.8,
    totalRating: 328,
    photo: doctorImg02,
    totalPatients: 500,
    address: "ABC, GIZA, EGYPT",
  },
  {
    id: "03",
    name: "Old Cairo Clinic",
    clinicType: "Private Clinic",
    avgRating: 4.8,
    totalRating: 97,
    photo: doctorImg03,
    totalPatients: 200,
    address: "ABC, OLD CAIRO, EGYPT",
  },
];
