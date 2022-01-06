import { gql } from "apollo-server-micro";

export const schema = gql`
  type Error {
    type: String
    code: String
    message: String
  }
`;
