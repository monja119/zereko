const express=require("express")
const db = require("../config/db");
const router=express.Router()
router.route('/')

    .get((req,res)=>{
        db.all("SELECT * FROM users", (err, rows) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send(rows);
        });
    })
    .post((req,res)=>{
        const {
            name,
            email,
            password,
        } = req.body;

        // check if the user already exists
        db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (row) {
                return res.status(409).send("Utilisateur déjà existant");
            }
        })

        // insert the user
        db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(201).send("Utilisateur ajouté");
        });
    })

    .put((req,res)=>{
        const {
            id,
            name,
            email,
            password,
        } = req.body;

        db.run("UPDATE users SET name = ?, email = ?, pass = ? WHERE id = ?", [name, email, password, id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("Utilisateur modifié");
        });
    })

    .delete((req,res)=>{
        const { id } = req.body;
        db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("Utilisateur supprimé");
        });
    })


module.exports=router
