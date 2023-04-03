import connectionDB from "../config/database.js"

async function doctorFindName({name}){
    return await connectionDB.query(`SELECT u.id, u.name, u.email, u.type FROM users u WHERE name = $1 AND type = $2`,[name, "doctor"]);
};

async function doctorFindSpecialty({specialty}){
    return  await connectionDB.query(`
    SELECT u.id ,u.name, u.email, u.type, s.name AS specialty FROM specialties s
    JOIN users u
        ON u.id = s.doctor_id
    WHERE s.name = $1 AND u.type = $2`,[specialty, "doctor"]);
};

async function doctorFindLocation({postal, city, state}){
    if(!city && !state){
        return await connectionDB.query(`
        SELECT u.id ,u.name, u.email, u.type, a.street, a.number, a.complement, a.postal_code  
        FROM doctors_addresses a
        JOIN users u 
            ON u.id = a.doctor_id
        WHERE a.postal_code = $1 AND u.type = $2`,[postal, "doctor"]);
    }else if(!state){
        return await connectionDB.query(`
        SELECT u.id ,u.name, u.email, u.type, a.street, a.number, a.complement, a.postal_code, c.name AS city 
        FROM cities c
        JOIN doctors_addresses a
            ON a.city_id = c.id
        JOIN users u
            ON u.id = a.doctor_id
        WHERE c.name = $1 AND  a.postal_code = $2 AND u.type = $3
        `,[city, postal, "doctor"]);
    }else if(postal && city && state){
        return await connectionDB.query(`
        SELECT u.id ,u.name, u.email, u.type, a.street, a.number, a.complement, a.postal_code, c.name AS city, s.name AS state
        FROM states s
        JOIN cities c
            ON c.states_id = s.id
        JOIN doctors_addresses a
            ON a.city_id = c.id
        JOIN users u
            ON u.id = a.doctor_id
        WHERE s.name = $1 AND c.name = $2 AND  a.postal_code = $3 AND u.type = $4
        `,[state, city, postal, "doctor"]);
    }
};

async function findDates({date, time}){
     return await connectionDB.query(`SELECT * FROM doctors_dates_schedules WHERE date_disp = $1 AND time_disp = $2`,[date,time]);
};

async function insertQuery({patient_id, date, time, doctor_id}){
    await connectionDB.query(`INSERT INTO queries (patient_id, doctor_id, date, time) VALUES($1, $2, $3, $4)`,[patient_id, doctor_id, date, time]);
};

async function consultQueriePacient({patient_id}){
    return await connectionDB.query(`
    SELECT q.date, q.time, u.name AS doctor_name, s.name AS specialty 
    FROM queries q 
    JOIN users u 
        ON u.id = q.doctor_id
    JOIN specialties s
        ON s.doctor_id = u.id
    WHERE q.patient_id = $1`,[patient_id]);
};

async function consultQuerieDoctor({doctor_id}){
    return await connectionDB.query(`
    SELECT q.date, q.time, u.name AS patient_name, s.name AS specialty
    FROM queries q
    JOIN specialties s
        ON s.doctor_id = q.doctor_id
    JOIN users u
        ON u.id = q.patient_id
    WHERE q.doctor_id = $1`, [doctor_id]);
}

export default {
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation,
    findDates,
    insertQuery,
    consultQueriePacient,
    consultQuerieDoctor
}