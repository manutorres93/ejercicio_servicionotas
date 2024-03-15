const User = require('../models/userModel'); //esta importanto lo que hay en esa ruta

const userController = { //Aqui es donde defino la lógica del negocio
    // Obtener todas las notas
    getAllNotes: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener notas:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    //Obtiene las notas por ID
    getNoteById: async (req, res) => {
        
        try{
        const id= req.params.id;
        const noteId= await User.findById(id);
        res.json(noteId);
        } catch (error) {
            console.error('Error al obtener nota:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

    },

    //Obtener nota por nombre
    getNoteByName: async (req, res) => {
        const name= req.params.name; //se puede hacer destructurando, otra forma de hacerlo
        
        try{
        const noteName= await User.findOne({name: name});
        res.json(noteName);
        } catch (error) {
            console.error('Error al obtener nota:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Crear un nuevo registro de nota
    createNote: async (req, res) => {
        //const noteData = req.body;
        console.log('Datos recibidos en el cuerpo de la solicitud:', req.body);

        const noteData = {
            name: req.body.name,
            notes: {
                desarrollo: req.body['notes[desarrollo]'], // Accede a la nota de desarrollo directamente desde req.body
                ingles: req.body['notes[ingles]'] // Accede a la nota de inglés directamente desde req.body
            }
        };

        console.log('Datos de la nota recibidos:', noteData)

        try {
            const newNote = new User(noteData);
            const savedNote = await newNote.save();
            res.status(201).json(savedNote);
        } catch (error) {
            console.error('Error al crear nota:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    
};

module.exports = userController; //estoy exportando el usercontroller para ser utilizado en cualquier parte de la aplicacion