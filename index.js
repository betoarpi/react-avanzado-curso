const { ApolloServer, gql } = require('apollo-server');

//Schema
const typeDefs = gql`
  type Curso {
    titulo: String
    tecnologia: String
  }

  type Query {
    obtenerCursos: [Curso]
  }
`

const cursos = [
  {
    titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
    tecnologia: 'JavaScript ES6',
  },
  {
    titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
    tecnologia: 'React',
  },
  {
    titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
    tecnologia: 'Node.js'
  },
  {
    titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
    tecnologia: 'React'
  }
];

//Resolvers
const resolvers = {
  Query: {
    obtenerCursos: () => cursos
  }
}

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Server listo en la siguiente URL ${url}`)
})