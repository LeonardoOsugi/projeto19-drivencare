import connectionDB from "../config/database.js"


async function specialty({name, doctor_id}){
    await connectionDB.query(`INSERT INTO specialties (doctor_id, name) VALUES ($1, $2)`,[doctor_id, name]);
}

export default {
    specialty
}