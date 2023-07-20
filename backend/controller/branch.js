const db = require('../config/db');

const branches = [];

exports.getAllBranch = async (req, res ,next) => {
    // mysql db search and get data with prisma
    const result = await db.query('SELECT * FROM branch');
    // send data to frontend
    res.send(result);

    
}

exports.postBranch = async (req, res ,next) => {
    const { name, address, tel } = req.body;
    const result = await db.query('INSERT INTO branch (name, address, tel) VALUES (?, ?, ?)', [name, address, tel]);
    res.send(result);
}

exports.deleteBranch = async (req, res ,next) => {
    const { id } = req.params;
    const result = await db.query('DELETE FROM branch WHERE id = ?', [id]);
    res.send(result);
}

exports.updateBranch = async (req, res ,next) => {
    
}