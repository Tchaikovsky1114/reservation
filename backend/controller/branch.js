

const Branch = require('../model/branch');
const { pool } = require('../psql');
 

exports.getAllBranch = async (req, res ,next) => {
  // name, address, tel, image, id, status, description, location
    pool.query('SELECT * FROM branch BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
    
}

exports.getBranch = async (req, res ,next) => {
    const { id } = req.params;
    const queryText = 'SELECT * FROM branch WHERE id = ?'
    const values = [id];
    const result = await pool.query(
      queryText,
      values,
      );
    res.send(result);
}


exports.postBranch = async (req, res ,next) => {
  const { name, address, tel, image, id, status, description, location } = req.body;
  const queryText = 'INSERT INTO branch (name, address, tel, image, id, status, description, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
  const values = [name, address, tel, image, id, status, description, location];
    pool.query(
      queryText,
      values,
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(`Branch added with ID: ${results.fields}`)
    })
}

exports.deleteBranch = async (req, res ,next) => {
    const { id } = req.params;
    const result = await db.query('DELETE FROM branch WHERE id = ?', [id]);
    res.send(result);
}

exports.updateBranch = async (req, res ,next) => {

}