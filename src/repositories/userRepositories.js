import connectionDB from "../config/database.js";

async function findByEmail(email){
   return await connectionDB.query(`SELECT * FROM users WHERE email = $1 `,[email]);

};

async function createPatient({name, email, password, type}){
    await connectionDB.query(`INSERT INTO users (name, email, password, confirm_password, type) VALUES ($1, $2, $3, $4, $5)`, [name, email, password, password, type]);

};

async function createDoctor({name, email, password, type, street, number, complement, postal_code, name_city, name_state, name_speci}){

    await connectionDB.query(`INSERT INTO users (name, email, password, confirm_password, type) VALUES ($1, $2, $3, $4, $5)`, [name, email, password, password, type]);

    const doctorId = await connectionDB.query(`SELECT * FROM users WHERE email = $1`,[email]);

    await connectionDB.query(`INSERT INTO states (name) VALUES ($1)`, [name_state]);

    const stateId = await connectionDB.query(`SELECT * FROM states WHERE name = $1`, [name_state]);

    await connectionDB.query(`INSERT INTO cities (states_id, name) VALUES ($1, $2)`, [stateId.rows[0].id, name_city]);

    const cityId = await connectionDB.query(`SELECT * FROM cities WHERE name = $1`, [name_city]);

    await connectionDB.query(`INSERT INTO doctors_addresses (doctor_id, city_id, street, number, complement, postal_code) VALUES($1, $2, $3, $4, $5, $6)`, [doctorId.rows[0].id, cityId.rows[0].id, street, number, complement, postal_code]);

    await connectionDB.query(`INSERT INTO specialties (doctor_id, name) VALUES ($1, $2)`, [doctorId.rows[0].id, name_speci]);
};

async function createSession({userId, token}){
    await connectionDB.query(`INSERT INTO sessions (user_id, token) VALUES($1, $2)`,[userId, token]);
};

export default {
    findByEmail,
    createPatient,
    createDoctor,
    createSession
};