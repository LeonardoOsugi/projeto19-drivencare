import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";

async function createPatientUser({name, email, password, type}){
    const {rowCount, rows: [user]} = await userRepositories.findByEmail(email);

    if(rowCount !== 0) return console.log("deu ruim");

    const hashPass = await bcrypt.hash(password, 10);
    
    await userRepositories.createPatient({name, email, password: hashPass, type});
}

async function createDoctorUser({name, email, password, type, street, number, complement, postal_code,name_city, name_state, name_speci}){
    const {rowCount, rows: [user]} = await userRepositories.findByEmail(email);

    if(rowCount !== 0) return console.log("deu ruim");

    const hashPass = await bcrypt.hash(password, 10);

    await userRepositories.createDoctor({name, email, password: hashPass, type, street, number, complement, postal_code,name_city, name_state, name_speci})
}

export default {
    createPatientUser,
    createDoctorUser
}