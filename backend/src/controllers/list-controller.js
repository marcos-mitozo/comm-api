'use strict';

const pool = require('../connection')

var list = function (callback) {
    var resultado = [];
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT * FROM `registro`", function (err, result) {
            connection.release()
            if (err) {
                console.log(err)
                throw err
            } else {
                result.forEach(colaborador => {
                    resultado.push({ nome: colaborador.NOME, data: colaborador.DATA })
                    console.log("Resultado>>>>>> ", resultado)
                })
            }
            return callback(result)
        })
    })
}

exports.get = (req, res, next) => {

    list(function (result) {
        res.status(200).send(
            result
        )
    });

}
