const db = require("../../config/db");
const express=require("express")
const router=express.Router()

router.route('/')

    .get((req,res)=>{
        const msg = "Veuillez vous connecter";
        res.status(200).send(msg)
    })
    .post((req,res)=>{
        const { email, password } = req.body;

        db.query("SELECT id, name, email, password FROM users WHERE email = ?", [email], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err.message);
            }
            if (!row) {
                return res.status(404).send("Utilisateur non trouvé");
            }

            if (row[0].password!== password.toString()) {
                return res.status(401).send("Mot de passe incorrect");
            }

            delete row[0].password;
            const data = {
                user : row[0],
            };

            res.status(200).send(data);
        });
    })


module.exports=router
