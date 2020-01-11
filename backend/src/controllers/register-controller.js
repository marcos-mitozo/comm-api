'use strict';

const pool = require('../connection')

var register = function (name, date) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("Connected!")
        connection.query("INSERT INTO `registro` (`NOME`, `DATA`) VALUES ('" + name + "', '" + date + "')", function (err, result) {
            connection.release()
            if (err) {
                console.log(err)
            } else {
                console.log("Result: ", result)
                console.log("O colaborador é: ", name)
                console.log("A data é: ", date)
            }
        })
    })
}

exports.post = (req, res, next) => {
    var employee = req.body.employee;
    var date = req.body.date;
    res.status(200).send({
        employee: employee,
        date: date
    })
    register(employee, date)
}