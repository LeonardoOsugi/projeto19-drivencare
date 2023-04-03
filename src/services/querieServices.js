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
};

async function consultQueriePacient({type, patient_id}){
    if(type !== "patient") throw new Error('user not a patient');

    const {rows, rowCount} = await querieRepositories.consultQueriePacient({patient_id});

    if(!rowCount)throw new Error('Patient not have query');

    return rows;
}

async function consultQuerieDoctor({type, doctor_id}){
    if(type !== "doctor") throw new Error('user not a doctor');

    const {rows, rowCount} = await querieRepositories.consultQuerieDoctor({doctor_id});

    if(!rowCount)throw new Error('Doctor not have query');

    return rows;

};

async function confirmQuirie({paramsId, type}){
    if(type !== "doctor") throw new Error('user not a doctor');

    const {rowCount} = await querieRepositories.findQuirieById({paramsId});

    if(!rowCount)throw new Error('id not found');

    await querieRepositories.confirmQuirie({paramsId});
};

async function cancelQuirie({paramsId, type}){
    if(type !== "doctor") throw new Error('user not a doctor');

    const {rowCount} = await querieRepositories.findQuirieById({paramsId});

    if(!rowCount)throw new Error('id not found');

    await querieRepositories.cancelQuirie({paramsId});
};

async function consultationsHeld({paramsId, type}){
    if(type !== "doctor") throw new Error('user not a doctor');

    const {rowCount} = await querieRepositories.findQuirieById({paramsId});

    if(!rowCount)throw new Error('id not found');

    await querieRepositories.consultationsHeld({paramsId});
};

async function consultationsHeldCancel({paramsId, type}){
    if(type !== "doctor") throw new Error('user not a doctor');

    const {rowCount} = await querieRepositories.findQuirieById({paramsId});

    if(!rowCount)throw new Error('id not found');

    await querieRepositories.consultationsHeldCancel({paramsId});
};

async function history(){
    const {rows, rowCount} = await querieRepositories.history();
    if(!rowCount) throw new Error("Not Found");

    return rows;
}

export default {
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation,
    insertQuery,
    consultQueriePacient,
    consultQuerieDoctor,
    confirmQuirie,
    cancelQuirie,
    consultationsHeld,
    consultationsHeldCancel,
    history
}