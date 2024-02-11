import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('localData.db');

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS localData (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL, name TEXT NOT NULL, phone TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, error) => reject(error),
            )
        })
    })
    return promise
}

export const insertData = ({localId, email, token}) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO localData (localId, email, token, name, phone) VALUES (?,?,?,?,?);',
                [localId, email, token,'User','123'],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const updateUserData = ({ localId, name, phone }) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE localData SET name = ?, phone = ? WHERE localId = ?;',
                [name, phone, localId],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const fetchData = () => {

    const promise = new Promise((resolve, reject) => {

        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM localData ;',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const deleteData = (localId) => {

    const promise = new Promise((resolve, reject) => {

        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE IF EXISTS localData;',
                [localId],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}