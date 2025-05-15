import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient}:PatientDetailsProps) {

    //Estas son 2 formas de acceder al estado global Ambas Valen
    const deletePatient = usePatientStore((state) => state.deletePatient);
    const {getPatientById} = usePatientStore();


  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl" >       
       <PatientDetailItem label="Id" data={patient.id}/>
       <PatientDetailItem label="Nombre" data={patient.name}/>
       <PatientDetailItem label="Propietario" data={patient.caretaker}/>
       <PatientDetailItem label="email" data={patient.email}/>
       <PatientDetailItem label="Fecha Alta" data={patient.date.toString()}/>
       <PatientDetailItem label="Síntomas" data={patient.symptoms}/>

       <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
            type="button"
            className="p-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}
        >
            Editar
        </button>

        <button
            type="button"
            className="p-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => deletePatient(patient.id)}
        >
            Eliminar
        </button>
       </div>
    </div>
  )
}
