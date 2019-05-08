const db = require('../mysql');


/**
 * 显示全部 （select*）
 * @returns {Promise<any>}
 */
let show = () => {
    return new  Promise((resolve, reject) => {
        db.query('select * from user', (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

/**
 * 查询一行（传参)
 * @param id
 * @param val
 * @returns {Promise<any>}
 */
let select = (id, val) => {
    return new Promise((resolve, reject) => {
        db.query(`select id, name, age from user where id = ${val}`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

/**
 * 修改
 * @param name
 * @param newData
 * @param id
 * @param idVal
 * @returns {Promise<any>}
 */
let update = (name, newData,id,idVal) => {
    return new Promise((resolve, reject) => {
        db.query(`update user set ${name} = ${newData} where ${id} = ${idVal}`,(err,rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

/**
 * 增加
 * @param attributenames
 * @param attributes
 * @returns {Promise<any>}
 */
let insert = (attributenames, attributes) => {
    return new Promise((resolve, reject) => {
        db.query(`insert into user ${attributenames} values ${attributes}`, (err,rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

exports.show = show;
exports.select = select;
exports.update =  update;
exports.insert = insert;
