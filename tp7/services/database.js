import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todos.db');

export const initDB = () =>
  new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL);`
        );
      },
      (err) => reject(err),
      () => resolve()
    );
  });

export const addTodoOffline = (title) =>
  new Promise((resolve, reject) => {
    const id = Date.now();
    db.transaction(
      (tx) => {
        tx.executeSql('INSERT INTO todos (id, title) VALUES (?, ?);', [id, title]);
      },
      (err) => reject(err),
      () => resolve(id)
    );
  });

export const updateTodoOffline = (id, title) =>
  new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE todos SET title = ? WHERE id = ?;', [title, id]);
      },
      (err) => reject(err),
      () => resolve()
    );
  });

export const deleteTodoOffline = (id) =>
  new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM todos WHERE id = ?;', [id]);
      },
      (err) => reject(err),
      () => resolve()
    );
  });

export const loadTodos = () =>
  new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM todos;',
          [],
          (_tx, result) => {
            const rows = [];
            for (let i = 0; i < result.rows.length; i++) rows.push(result.rows.item(i));
            resolve(rows);
          }
        );
      },
      (err) => reject(err)
    );
  });
