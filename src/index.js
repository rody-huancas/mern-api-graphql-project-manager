import { typeDefs } from "./graphql/typeDefs.js";
import { connectDB } from "./db/db.js";
import { resolvers } from "./graphql/resolvers.js";
import { startApolloServer } from "./app.js";

connectDB();

startApolloServer(typeDefs, resolvers)
