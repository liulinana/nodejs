let mysql = require("mysql");

/**
 * 数据库连接配置
 * @type {Pool}
 */
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"liulina_schema"
});

/**
 * 对数据库进行增删改查操作的基础
 * @param sql
 * @param callback
 */
function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release()
        })
    })
}

exports.query = query;
