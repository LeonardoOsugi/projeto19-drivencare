import specialtyServices from "../services/specialtyServices.js";

async function specialty(req, res){
    const {id} = res.locals.user;
    const {type} = res.locals.user
    const {name} = req.body;
    try{
        await specialtyServices.specialty({name, type, doctor_id: id});
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export default{
    specialty
}