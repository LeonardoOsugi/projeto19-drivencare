import connectionDB from "../config/database.js";

async function createDate({date_disp, time_disp, doctor_id}){
    await connectionDB.query(`INSERT INTO doctors_dates_schedules(doctor_id, date_disp, time_disp)VALUES ($1, $2, $3)`,[doctor_id, date_disp, time_disp]);
};

async function querieDate(){
    return await connectionDB.query(`
    SELECT d.id, u.name, d.date_disp, d.time_disp FROM doctors_dates_schedules d 
    JOIN users u  ON u.id = d.doctor_id`);
}

export default {
    createDate,
    querieDate
}