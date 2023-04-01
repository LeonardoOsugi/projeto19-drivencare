import bcrypt from "bcrypt";
import {v4 as uuidV4} from "uuid";
import userRepositories from "../repositories/userRepositories.js";

async function createPatientUser({name, email, password, type}){
    const {rowCount} = await userRepositories.findByEmail(email);

    if(rowCount !== 0) throw new Error('User alredy exists');

    const hashPass = await bcrypt.hash(password, 10);
    
    await userRepositories.createPatient({name, email, password: hashPass, type});
}

async function createDoctorUser({name, email, password, type, street, number, complement, postal_code,name_city, name_state, name_speci}){

    const {rowCount} = await userRepositories.findByEmail(email);

    if(rowCount !== 0) throw new Error('User alredy exists');

    const hashPass = await bcrypt.hash(password, 10);

    await userRepositories.createDoctor({name, email, password: hashPass, type, street, number, complement, postal_code,name_city, name_state, name_speci})
};

async function signin({email, password}){
    const {rowCount, rows: [user]} = await userRepositories.findByEmail(email);


    if(rowCount === 0) throw new Error('Incorrect Email or Password');

    const validPass = await bcrypt.compare(password, user.password);

    if(!validPass)throw new Error('Incorrect Email or Password');

    const token = uuidV4();

    await userRepositories.createSession({userId: user.id, token});

    return token;
}

export default {
    createPatientUser,
    createDoctorUser,
    signin
}