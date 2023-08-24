// importing module,=.
const mysql = require("mysql2");
require("dotenv").config();

// creating a pool and passing all required parameters for connection.- configuring database.
const pool = mysql
  .createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise(); // adding promises to the end will allow us to use async/await instead of callbacks.

// function to fetch all records from the table.
async function getNotes() {
  const [rows] = await pool.query("select * from notes");
  // rows will be returned in object form.
  return rows;
}

// function to fetch record based on id passed.
async function getNote(id) {
  // 'id' is not  directly passed to query, but rather an argument to prevent attacks like sql injection.
  const [rows] = await pool.query(`select * from notes where id = ?`, [id]);
  return rows;
}

// function to insert data into table.
async function createNote(title, contents) {
  const [rows] = await pool.query(
    `Insert into notes (title,contents) values (?,?)`,
    [title, contents]
  );
  return rows;
}

// function to update record in database.
async function updateNote(contents, id) {
  const [rows] = await pool.query(
    `update notes set contents = ? where id = ?`,
    [contents, id]
  );
  return rows;
}

// function to delete data.
async function deleteNote(id) {
  const [rows] = await pool.query(`delete from notes where id = ?`, [id]);
  return rows;
}
// exporting all functions.
module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };
