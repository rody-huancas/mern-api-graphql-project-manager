import { connectDB } from "./db/db.js";
import { startApolloServer } from "./app.js";
import { typeDefs, resolvers } from "./graphql";

connectDB();

startApolloServer(typeDefs, resolvers)
