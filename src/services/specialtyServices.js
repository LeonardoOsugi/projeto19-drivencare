import specialtyRepositories from "../repositories/specialtyRepositories.js";

async function specialty({name, type, doctor_id}){
    if(type !== "doctor") throw new Error('user not a doctor');

    await specialtyRepositories.specialty({name, doctor_id})
};

export default {
    specialty
}