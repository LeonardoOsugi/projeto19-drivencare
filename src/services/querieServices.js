import querieRepositories from "../repositories/querieRepositories.js";

async function doctorFindName({name}){
    const {rows, rowCount} = await querieRepositories.doctorFindName({name});
    if(!rowCount)throw new Error('Doctor not Found');

    return rows;
};

async function doctorFindSpecialty({specialty}){
    const {rows, rowCount} = await querieRepositories.doctorFindSpecialty({specialty});
    if(!rowCount)throw new Error('Doctor not Found');

    return rows;
};

async function doctorFindLocation({postal, city, state}){
    const {rows, rowCount} = await querieRepositories.doctorFindLocation({postal, city, state});
    if(!rowCount)throw new Error('Doctor not Found');

    return rows;
};

async function insertQuery({patient_id, type, date, time}){

    if(type !== "patient") throw new Error('user not a patient');

    const {rows: [user], rowCount} = await querieRepositories.findDates({date, time})

    if(!rowCount)throw new Error('Date or Time not Found');

    await querieRepositories.insertQuery({patient_id, date, time, doctor_id: user.doctor_id});
}

export default {
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation,
    insertQuery
}