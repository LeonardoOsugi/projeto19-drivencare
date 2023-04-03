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

export default {
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation
}