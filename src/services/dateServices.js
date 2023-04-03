import dateRepositories from "../repositories/dateRepositories.js";


async function createDate({date_disp, time_disp, doctor_id, type}){
    if(type !== "doctor") throw new Error('user not a doctor'); 

    await dateRepositories.createDate({date_disp, time_disp, doctor_id});
}

async function querieDate(){
    const {rows, rowCount} = await dateRepositories.querieDate();
    if(!rowCount) throw new Error("Not Found");

    return rows;
}

export default {
    createDate,
    querieDate
}