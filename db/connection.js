const { Client } = require('pg');
const pool = require('./pool');

exports.query = pool.query(queryText, queryParams)
    .then(res =>{

    })
    .catch(res =>{

    })

exports.query= (queryText, queryParams) => {
    return new Promise((resolve, reject) => {
        pool.query(queryText, queryParams)
        .then(res =>{
            resolve(res);
        })
        .catch(err =>{
            reject(err);
        })
    });

}