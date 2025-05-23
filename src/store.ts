
import { create } from 'zustand';
//devtools: Necesario para ver zustand en Redux Devtools / persist: Necesario para estado persistente
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from './types';

type PatientState = {
  patients: Patient[],
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
  updatePatient: (data: DraftPatient) => void
}

//Esta funcion transforma un DraftPatient (Sin ID) en un Patient completo agregandole un ID con uuidv4
const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidv4()
  }
}

//Creo y exporto un hook personalizado usePatientStore para modificar/leer el estado en todos los componentes
//En su interior tengo todo el control del estado con las funciones para modificarlo y persist para mantener persistente el estado
export const usePatientStore = create<PatientState>()(
  devtools(
    persist((set) => ({
      patients: [],
      activeId: '',

      addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
          patients: [...state.patients, newPatient]
        }))
      },

      deletePatient: (id) => {
        set((state) => ({
          patients: state.patients.filter(patient => patient.id !== id)
        }))
      },

      getPatientById: (id) => {
        set(() => ({
          activeId: id
        }))
      },

      updatePatient: (data) => {
        set((state) => ({
          patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
          activeId: ''

        }))
      }
    }),
      {
        name: 'patient-storage',
      }
    )
  ))