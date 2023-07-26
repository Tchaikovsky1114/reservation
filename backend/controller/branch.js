

const Branch = require('../model/branch');
const { pool } = require('../psql');
 

const getAllBranch = async (req, res ,next) => {
  // name, address, tel, image, id, status, description, location
    pool.query('SELECT * FROM branches', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
    
}

const getBranch = async (req, res ,next) => {
    const { id } = req.params;
    const queryText = 'SELECT * FROM branch WHERE id = ?'
    const values = [id];
    const result = await pool.query(
      queryText,
      values,
      );
    res.send(result);
}


const postBranch = async (req, res ,next) => {
  const { name, address, tel, image = '',  status, description, location } = req.body;
  const queryText = 'INSERT INTO branches (name, address, tel, image, status, description, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
  const values = [name, address, tel, image, status, description, location];
    pool.query(
      queryText,
      values,
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(results.rows[0])
    })
}

const deleteBranch = async (req, res ,next) => {
    const { id } = req.params;
    const result = await db.query('DELETE FROM branch WHERE id = ?', [id]);
    res.send(result);
}

const updateBranch = async (req, res ,next) => {

}

module.exports = {
  getAllBranch,
  getBranch,
  postBranch,
  deleteBranch,
  updateBranch,
}