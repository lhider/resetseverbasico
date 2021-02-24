const { response } = require('express');

const usuariosGet= (req, res) => {

    const {q, nombre, page = 1} = req.query;

    res.json({
        msg:'get api - controlador',
        q, nombre, page
    })
}

const usuariosPost= (req, res) => {

    const { nombre, edad }= req.body;

    res.json({
        msg: 'post',
        nombre,        edad
    })
}

const usuariosDelete= (req, res) => {
    res.json({
        msg:'get delete - controlador'
    })
}

const usuariosPut= (req, res) => {

    const { id } = req.params;
    res.json({
        msg:'get put - controlador',
        id
    })
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}