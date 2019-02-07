import { gql, ApolloServer } from 'apollo-server'

const typeDefs = gql`
  type Framework {
    id: ID!
      name: String
    repo: String
  }

  type Query {
    frameworks: [Framework!]
  }
`

const resolvers = {
  Query: {
    frameworks: () => []
  }
}

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await server.listen()
  console.log(`Server running on ${url}`)
}

startServer()
