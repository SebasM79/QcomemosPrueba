async function login(req,res){

}

async function register(req,res){
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;   
    if(!email || !password || !password2){
        res.status(400).send("Todos los campos son obligatorios");
        return;
    }
}

export const methods = {
    login,
    register
}