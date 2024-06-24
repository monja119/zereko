const express=require("express")
const db = require("../config/db");
const router=express.Router()
router.route('/')

    .get((req,res)=>{
        db.all("SELECT * FROM projects", (err, rows) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send(rows);
        });
    })
    .post((req,res)=>{
        const {
            project_id,
            member_id,
        } = req.body;
        const role  = "admin"

        // insert the user
        db.query("INSERT INTO members (project_id, user_id, id,role) VALUES (?, ?, ?)", [project_id, member_id, role], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err.message);
            }

            const id = result.insertId;
            let row = { id, project_id, member_id, role };
            res.status(201).json(row);
        });
    })

    .put((req,res)=>{
        const {
            project_id,
            member_id,
            role,
            status
        } = req.body;

        db.query("UPDATE members SET role = ?, status = ? WHERE project_id = ? AND user_id = ?", [role, status, project_id, member_id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("Membre modifié");
        });
    })

    .delete((req,res)=>{
        const { id } = req.body;
        db.query("DELETE FROM members WHERE id = ?", [id], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send("Membre supprimé");
        });
    })


module.exports=router
