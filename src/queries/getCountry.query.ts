import { gql } from "@apollo/client"

export const GET_COUNTRY = gql`
  query GetCounty($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        name
      }
      languages {
        name
        native
      }
      capital
    }
  }
`
