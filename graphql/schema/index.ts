import { merge } from "lodash"
import { gql } from "apollo-server";
import fs from "fs"

const root = gql`
  scalar Date
  
  type Query {
    root: String
  }
  
  type Mutation {
    root: String
  }
  
  enum CookingMeasures {
    litres
    millilitres
    grams
    kilograms
  }
`

const typeDefs = [root]
let resolvers = {}

const schemaPath = "graphql/schema"
const pathList = fs.readdirSync(schemaPath)

for (const file of pathList) {
  const currentPath = schemaPath + "/" + file
  if (fs.statSync(currentPath).isDirectory()) {
    const type = require(`./${file}/${file}.type.ts`)
    const resolver = require(`./${file}/${file}.resolver.ts`)
    typeDefs.push(type["default"])
    merge(resolvers, resolver["default"])
  }
}

export { typeDefs, resolvers }