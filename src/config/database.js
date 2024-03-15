const mongoose = require('mongoose');
let User

const connectDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('User2', require('../models/userModel').schema); //User2 es el nombre de la coleccion
        } //si User no existe entonces es la conexion del modelo. Lo que está en el require es el schema

        await mongoose.connect('mongodb+srv://manutorres9312:Wwl9ejoe1FicGqTV@db-ejemplo-01.elrgq55.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();//funcion definida más abajo

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}; 

const initializeData = async () => {
    try {
        await User.deleteMany(); //aqui cada que lanzo la bd estoy creando una nueva

        const usersData = [
            {
                name: "Manuela Torres",
                notes: {
                    desarrollo: 4.5,
                    ingles: 3.4
                }
            },
            {
                name:"Valentina Pelaez",
                notes: {
                    desarrollo: 4.0,
                    ingles: 3.9
                }
            },
            {
                name:"Valentina",
                notes: {
                    desarrollo: 5,
                    ingles: 5
                }
            },
        ];

        await User.insertMany(usersData);//insertandole los datos de userData
        console.log('Data successfully initialized!');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase; //está exportando la función connectDatabase para que esté disponible para otros módulos en tu aplicación Node.js.