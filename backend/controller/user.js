const { default: removePassword } = require("../util/removePassword")

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(removePassword(results.rows))
  })
}


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(200).json(removePassword(results.rows))
  })
}



const createUser = (request, response) => {
  const { name, email,password,created_at } = request.body;
  console.log(name,email,password,created_at);
  pool.query('INSERT INTO users (name, email, password,created_at) VALUES ($1, $2, $3, $4)', [name, email,password, created_at], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.fields}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}