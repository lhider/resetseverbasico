const express = require('express');
const cors = require('cors');


class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middelwares
        this.middelwares();
        
        //routes
        this.routes();
        
    }

    middelwares() {

        //cors
        this.app.use(cors());

        //parseo y lectura de body
        this.app.use(express.json());

        //directporo piblipo
        this.app.use( express.static('public'));
    }

    routes(){
         
        this.app.use(this.usuariosPath , require('../routes/usuarios'));

    }

    listen() {

        this.app.listen( this.port, () => {
            console.log('servidor correindo en ', this.port);
        })
    }

}


module.exports = Server;