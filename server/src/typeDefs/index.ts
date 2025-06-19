import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Planet {
    id: ID!
    name: String!
    distance: Int!
    description: String!
    gravity: String
    temperature: String
    habitability: String
    anomalies: [String]
    loadout: [String]
  }

  type Query {
    planets: [Planet]
    planet(id: ID!): Planet
  }
`;

export default typeDefs;
