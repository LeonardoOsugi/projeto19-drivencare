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
    };
}

async function insertQuery(req, res){
    const {id} = res.locals.user;
    const {type} = res.locals.user;
    const {date, time} = req.body;

    try{
        await querieServices.insertQuery({patient_id: id, type, date, time});
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
};

async function consultQueriePacient(req, res){
    const {id} = res.locals.user;
    const {type} = res.locals.user;

    try{
        const patient = await querieServices.consultQueriePacient({type, patient_id: id});

        return res.json(patient);

    }catch(err){
        return res.status(500).send(err.message);
    }
};

async function consultQuerieDoctor(req, res){
    const {id} = res.locals.user;
    const {type} = res.locals.user;

    try{
        const doctor = await querieServices.consultQuerieDoctor({type, doctor_id: id});

        return res.json(doctor);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export default{
    doctorFindName,
    doctorFindSpecialty,
    doctorFindLocation,
    insertQuery,
    consultQueriePacient,
    consultQuerieDoctor
}