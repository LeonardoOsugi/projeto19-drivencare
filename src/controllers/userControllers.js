import userServices from "../services/userServices.js";



async function signup(req, res){
    const {name, email, password, type} = req.body;
    try{
        await userServices.createPatientUser({name, email, password, type});
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
};

async function signupDoctor(req, res){
    const {name, email, password, type, street, number, complement, postal_code,name_city, name_state} = req.body;
    try{
        await userServices.createDoctorUser({name, email, password, type, street, number, complement, postal_code, name_city, name_state});
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }

};

async function signin(req, res){
    const {email, password} = req.body;

    try{
        const token = await userServices.signin({email, password});

        return res.send({token});
    }catch(err){
        return res.status(500).send(err.message);
    }

}

export default {
    signup,
    signupDoctor,
    signin
}