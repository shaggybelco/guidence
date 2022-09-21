const db = require ("../configs/db.config")

exports.createQualification = (req, res) => {
    const {name, image} = req.body

    try {
        db.query(
          "INSERT INTO qualifications (qualification, description, requirementsId) VALUES($1,$2,$3)",
          [qualification, description,requirementsId],
          (err) => {
            if (err) {
              res.status(400).json({ error: "Sorry we facing Technical issues" });
            } 
              res.status(201).json({ success: "Successful" }); 
          }
        );
        } catch (error) {
        res.status(500).json({ error: "database error" });
      }
    
}
exports.getQualifications = (req, res) =>{
    const requirementsId = req.params,id;
    
    db.query('SELECT * FROM qualifications WHERE id = $1', [requirementsId], (err, results)=> {
        if(err){
            res.status(400).json({error: 'Sorry we facing Technical issues'});
        }
        res.status(200).josn(results.row)
    })
}
