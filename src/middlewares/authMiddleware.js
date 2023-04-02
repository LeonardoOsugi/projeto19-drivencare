import userRepositories from "../repositories/userRepositories.js";


async function authValidation(req, res, next){
    const {authorization} = req.headers;
    const token = authorization.replace("Bearer ", "");

    if(!token) return res.status(401).send("No token");

    try{
        const {rows: [session]} = await userRepositories.findSessionByToken({token});


        if(!session) return res.status(401).send("Session not a found");

        const {rows: [user]} = await userRepositories.findById({id: session.user_id});

        if(!user) return res.status(401).send("Session not a found");

        res.locals.user = user;
        next();
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export default {
    authValidation
}