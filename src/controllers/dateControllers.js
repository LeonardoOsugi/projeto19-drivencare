import dateServices from "../services/dateServices.js";


async function createDate(req, res){
    const {date_disp, time_disp} = req.body;
    const {id} = res.locals.user;
    const {type} = res.locals.user;
    try{
        await dateServices.createDate({date_disp, time_disp, doctor_id: id, type});

        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export default {
    createDate
}