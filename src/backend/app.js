const { GraphQLServer } = require("graphql-yoga");
const genSchema = require("./utilities/generateSchema");

const server = new GraphQLServer({
  schema: genSchema(),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({ ...req })
});

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    },
    playground: process.env.NODE_ENV === "production" ? false : true
  },
  () => console.log("Server is running on localhost:4000")
);
