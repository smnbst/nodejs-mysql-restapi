import { connection } from "../db.js";

//GET
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await connection.query(
      "SELECT * FROM employees WHERE id = ?",
      [req.params.id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res.send(rows[0]);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//GET ALL
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM employees");
    res.send([rows]);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//CREATE
export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req?.body;
    const [rows] = await connection.query(
      "INSERT INTO employees (name, salary) VALUES (?, ?)",
      [name, salary]
    );

    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//UPDATE
export const updateEmployees = async (req, res) => {
  try {
    const { id } = req?.params;
    const { name, salary } = req?.body;

    const [result] = await connection.query(
      "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    //console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Employee not founed" });
    } else {
      const [rows] = await connection.query(
        "SELECT * FROM employees WHERE id = ?",
        [id]
      );
      res.json(rows[0]);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//DELETE
export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await connection.query(
      "DELETE FROM employees WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee no found" });
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
