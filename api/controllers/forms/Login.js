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

        db.query("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err.message);
            }
            if (!row) {
                return res.status(404).send("Utilisateur non trouvé");
            }

            if (row[0].password!== password.toString()) {
                console.log('tsy mitovy')
                return res.status(401).send("Mot de passe incorrect");
            }

            const data = {
                user : row[0].password,
            };

            res.status(200).send(data);
        });
    })


module.exports=router
