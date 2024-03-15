const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    notes: {
        type: Map,
        of: Number
    }
});

const User = mongoose.model('User2', userSchema);//User2 es el nombre de la coleccion

module.exports = User; //exporto user para ser utilizado, por ejemplo en la databe cuando se crea