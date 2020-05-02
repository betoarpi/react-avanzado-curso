const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');

//Resolvers
const resolvers = {
  Query: {
    obtenerCurso: () => "Algo"
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input;

      //Revisar si el usuario ya existe en la base de datos
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error('El usuario ya está registrado');
      }

      //Hashear el password

      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      //Guardar en la base de datos
      try {
        const usuario = new Usuario(input);
        usuario.save(); //guardarlo
        return usuario;
      } catch (error) {
        console.log(error);
      }
    }
  }
}

module.exports = resolvers;