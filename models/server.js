const express = require("express");
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middleware
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){

        this.app.use(cors());

        //Lectura del body
        this.app.use( express.json());
        //Directorio public
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use( this.usuariosPath , require('../routes/usuarios'));

    }

    lister() {
        this.app.listen(this.port, () => {
            console.log("Corriendo", this.port);
        });
    }
}

module.exports = Server;
