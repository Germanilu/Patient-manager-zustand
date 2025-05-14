
export type Patient = {
    id: string,
    name:string,
    caretaker: string,
    email:string,
    date:Date,
    symptoms:string
};

//Esto es como lo de arriba pero sin el id, el Omit te permite reutilizar un type omitiendo algo
export type DraftPatient = Omit<Patient,'id'>