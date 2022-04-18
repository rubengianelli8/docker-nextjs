import { gql } from "apollo-server-micro";

export const schema = gql`
  type Demo {
    id: Int
    name: String
    description: String
  }

  type Query {
    getDemos: [Demo]
    getDemo(id: Int, name: String): Demo
  }

  type Mutation {
    addDemo(name: String): Demo
    deleteDemo(id: Int): Demo
  }
`;
