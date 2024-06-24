const express=require("express")
const db = require("../config/db");
const router=express.Router()
router.route('/')
    .get((req,res)=>{
        db.query("SELECT * FROM projects", (err, rows) => {
            if (err) {
                return res.status(500).send(err.message);
            }

            res.status(200).send(rows);
        });
    })

    .post((req,res)=>{
        const {
            title,
            description,
            date_debut,
            date_fin
        } = req.body;

        // insert the user
        db.query("INSERT INTO projects (title, description, date_debut, date_fin) VALUES (?, ?, ?, ?)", [title, description, date_debut, date_fin], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err.message);
            }

            const id = result.insertId;
            let row = { id, title, description, date_debut, date_fin };
            res.status(201).json(row);
        });
    })

    .put((req,res)=>{
        const {
            id,
            title,
            description,
            date_debut,
            date_fin
        } = req.body;

        db.query("UPDATE projects SET title = ?, description = ?, date_debut = ?, date_fin = ? WHERE id = ?", [title, description, date_debut, date_fin, id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("Project modifié");
        });
    })


router.route('/:id')
    .get((req,res)=>{
        const { id } = req.params;
        db.query("SELECT * FROM projects WHERE id = ?", [id], (err, rows) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send(rows);
        });
    })
    .delete((req,res)=>{
        const { id } = req.params;
        db.query("DELETE FROM projects WHERE id = ?", [id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("projects supprimé");
        });
    })

    // updating
    .put((req,res)=>{
        const {
            id,
            title,
            description,
            date_debut,
            date_fin
        } = req.body;

        db.query("UPDATE projects SET title = ?, description = ?, date_debut = ?, date_fin = ? WHERE id = ?", [title, description, date_debut, date_fin, id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("projects modifié");
        });
    })


module.exports=router
