
import {create} from 'zustand';
import {v4 as uuidv4} from 'uuid'
import type { DraftPatient, Patient } from './types';

type PatientState = {
    patients: Patient[],
    addPatient:(data:DraftPatient) => void
}

//Esta funcion transforma un DraftPatient (Sin ID) en un Patient completo agregandole un ID con uuidv4
const createPatient = (patient:DraftPatient):Patient => {
    return {
        ...patient,
        id: uuidv4()
    }
}

//Creo y exporto un hook personalizado usePatientStore para modificar/leer el estado en todos los componentes
export const usePatientStore = create<PatientState>((set) => ({
    
    patients: [],
    
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients:[...state.patients, newPatient]
        }))
    }
}))