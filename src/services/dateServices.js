import dateRepositories from "../repositories/dateRepositories.js";


async function createDate({date_disp, time_disp, doctor_id, type}){
    if(type !== "doctor") throw new Error('user not a doctor'); 

    await dateRepositories.createDate({date_disp, time_disp, doctor_id});
}

export default {
    createDate
}