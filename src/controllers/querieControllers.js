import querieServices from "../services/querieServices.js";

async function doctorFindName(req, res){
    const {name} = req.params;
    try{
        const doctor = await querieServices.doctorFindName({name});
        return res.json(doctor);
    }catch(err){
        return res.status(500).send(err.massage);
    }

};

async function doctorFindSpecialty(req, res){
    const {specialty} = req.params;
    try{
        const doctor = await querieServices.doctorFindSpecialty({specialty});
        return res.json(doctor);
    }catch(err){
        return res.status(500).send(err.massage);
    }
};

async function doctorFindLocation(req, res){
    const {postal, city, state} = req.params;

    try{
        const doctor = await querieServices.doctorFindLocation({postal, city, state});
        return res.json(doctor);
    }catch(err){
        return res.status(500).send(err.massage);
    }

}
export default{
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation
}