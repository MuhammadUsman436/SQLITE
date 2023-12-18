import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("UserData.db");

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER, address TEXT)',
      [],
      () => {},
      (error) => {
        console.error("Error creating table: ", error);
      }
    );
  });
};

const insertUser = (name, age, address, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Users (name, age, address) VALUES (?, ?, ?)',
      [name, age, address],
      (_, results) => {
        callback(results.insertId);
      },
      (error) => {
        console.error("Error inserting user: ", error);
      }
    );
  });
};

const getUserById = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Users WHERE id = ?',
      [id],
      (_, results) => {
        const user = results.rows.item(0);
        callback(user);
      },
      (error) => {
        console.error("Error getting user by ID: ", error);
      }
    );
  });
};

export { createTable, insertUser, getUserById };