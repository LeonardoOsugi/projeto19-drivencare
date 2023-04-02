import connectionDB from "../config/database.js";

async function createDate({date_disp, time_disp, doctor_id}){
    await connectionDB.query(`INSERT INTO doctors_dates_schedules(doctor_id, date_disp, time_disp)VALUES ($1, $2, $3)`,[doctor_id, date_disp, time_disp]);
};

export default {
    createDate
}